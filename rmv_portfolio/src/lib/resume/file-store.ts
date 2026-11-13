// Server-only. Where the résumé PDF itself is kept.
//
// The file is not in the repository (which is public) and not on the server's
// disk: it is uploaded from /admin and stored in the database, next to the
// requests it is handed out for. Local development without a database keeps
// it in memory, like the requests.
import "server-only"
import { createHash } from 'node:crypto'
import { StoreUnavailableError } from '@/lib/resume/store'

/** The largest file accepted. Vercel caps a request body at 4.5 MB. */
export const RESUME_MAX_BYTES = 4 * 1024 * 1024

/** Everything about the stored file except its bytes. */
export interface ResumeFileInfo {
  size: number
  /** SHA-256 of the bytes, hex: lets the owner confirm which version is live. */
  sha256: string
  /** The name it was uploaded under, shown in the admin page only. */
  fileName: string
  uploadedAt: Date
}

export interface StoredResume extends ResumeFileInfo {
  data: Uint8Array
}

export interface ResumeFileStore {
  /** What is stored, without loading the bytes. `null` when nothing has been uploaded. */
  info(): Promise<ResumeFileInfo | null>
  get(): Promise<StoredResume | null>
  /** Replaces the stored file. There is only ever one. */
  put(data: Uint8Array, fileName: string): Promise<ResumeFileInfo>
}

/** A PDF starts with "%PDF-". The browser's stated type is not trusted. */
export function looksLikePdf(data: Uint8Array): boolean {
  const magic = [0x25, 0x50, 0x44, 0x46, 0x2d]
  return data.length > magic.length && magic.every((byte, index) => data[index] === byte)
}

/** A display name with nothing but ordinary characters, capped to fit its column. */
export function tidyFileName(name: string): string {
  const cleaned = name.replace(/[^\w .()-]+/g, '_').trim().slice(0, 120)
  return cleaned || 'resume.pdf'
}

const describe = (data: Uint8Array, fileName: string) => ({
  size: data.byteLength,
  sha256: createHash('sha256').update(data).digest('hex'),
  fileName: tidyFileName(fileName),
})

/** The table holds a single row; this is its id. */
const ROW = 'current'

function createPrismaFileStore(): ResumeFileStore {
  // Imported lazily, as in the request store: constructing the client without
  // a connection URL throws.
  const client = async () => (await import('@/lib/prisma')).default
  const infoFields = { size: true, sha256: true, fileName: true, uploadedAt: true } as const

  return {
    async info() {
      const prisma = await client()
      return prisma.resumeFile.findUnique({ where: { id: ROW }, select: infoFields })
    },
    async get() {
      const prisma = await client()
      const row = await prisma.resumeFile.findUnique({ where: { id: ROW } })
      if (!row) return null
      return {
        data: new Uint8Array(row.data),
        size: row.size,
        sha256: row.sha256,
        fileName: row.fileName,
        uploadedAt: row.uploadedAt,
      }
    },
    async put(data, fileName) {
      const prisma = await client()
      // Copied into a plain buffer: the bytes may be a view onto a larger one.
      const fields = { ...describe(data, fileName), data: new Uint8Array(data), uploadedAt: new Date() }
      return prisma.resumeFile.upsert({
        where: { id: ROW },
        create: { id: ROW, ...fields },
        update: fields,
        select: infoFields,
      })
    },
  }
}

function createMemoryFileStore(): ResumeFileStore {
  const holder = globalThis as typeof globalThis & { __resumeFile?: StoredResume | null }
  // Kept on globalThis so hot reloads in `next dev` do not drop the upload.
  const info = (file: StoredResume): ResumeFileInfo => ({
    size: file.size,
    sha256: file.sha256,
    fileName: file.fileName,
    uploadedAt: file.uploadedAt,
  })

  return {
    async info() {
      return holder.__resumeFile ? info(holder.__resumeFile) : null
    },
    async get() {
      return holder.__resumeFile ?? null
    },
    async put(data, fileName) {
      holder.__resumeFile = { ...describe(data, fileName), data: new Uint8Array(data), uploadedAt: new Date() }
      return info(holder.__resumeFile)
    },
  }
}

let cached: ResumeFileStore | undefined

/** Throws `StoreUnavailableError` in production when no database is configured. */
export function getResumeFileStore(): ResumeFileStore {
  if (cached) return cached
  if (process.env.PRISMA_DATABASE_URL) {
    cached = createPrismaFileStore()
  } else if (process.env.NODE_ENV !== 'production') {
    cached = createMemoryFileStore()
  } else {
    throw new StoreUnavailableError()
  }
  return cached
}
