// Server-only. Persistence for résumé requests.
//
// Production talks to Postgres through Prisma. Local development without a
// database gets an in-memory store so the whole request → review → download
// flow can be exercised with nothing configured; it is never used in
// production, where a missing database is reported instead of papered over.
import "server-only"

export type ResumeRequestStatus = 'pending' | 'approved' | 'declined'

export interface ResumeRequestRecord {
  id: string
  name: string
  email: string
  company: string | null
  purpose: string
  message: string
  status: ResumeRequestStatus
  adminNote: string | null
  decidedAt: Date | null
  tokenHash: string | null
  tokenExpiresAt: Date | null
  downloadCount: number
  maxDownloads: number
  lastDownloadAt: Date | null
  ipAddress: string | null
  userAgent: string | null
  country: string | null
  city: string | null
  createdAt: Date
}

export interface NewResumeRequest {
  name: string
  email: string
  company: string | null
  purpose: string
  message: string
  ipAddress: string | null
  userAgent: string | null
  country: string | null
  city: string | null
}

export interface Decision {
  status: Exclude<ResumeRequestStatus, 'pending'>
  adminNote: string | null
  tokenHash: string | null
  tokenExpiresAt: Date | null
  maxDownloads: number
}

export interface ResumeRequestStore {
  create(input: NewResumeRequest): Promise<ResumeRequestRecord>
  findById(id: string): Promise<ResumeRequestRecord | null>
  findByTokenHash(tokenHash: string): Promise<ResumeRequestRecord | null>
  /** Most recent still-open request from this address since `since`. */
  findPendingByEmail(email: string, since: Date): Promise<ResumeRequestRecord | null>
  list(limit: number): Promise<ResumeRequestRecord[]>
  /** How many requests have arrived since `since`, from anyone. */
  countCreatedSince(since: Date): Promise<number>
  /** How many requests have arrived since `since` from this IP address. */
  countCreatedSinceByIp(ip: string, since: Date): Promise<number>
  /**
   * Records a decision and returns the updated record, or `null` when the id
   * is unknown. With `expectedStatus`, the write only happens if the request
   * still has that status at the moment of writing (one conditional write), and
   * `null` is also returned when it no longer does — so two simultaneous
   * decisions cannot both land.
   */
  decide(
    id: string,
    decision: Decision,
    expectedStatus?: ResumeRequestStatus
  ): Promise<ResumeRequestRecord | null>
  /**
   * Counts one download against the link and returns the record, or `null`
   * when the link is unknown, expired, not approved, or used up. The check and
   * the increment are a single conditional write so two simultaneous clicks
   * cannot both take the last download.
   */
  consumeDownload(tokenHash: string, now: Date): Promise<ResumeRequestRecord | null>
}

/** Thrown when production has no database configured. */
export class StoreUnavailableError extends Error {
  constructor() {
    super('Résumé request storage is not configured')
    this.name = 'StoreUnavailableError'
  }
}

export function isLinkUsable(record: ResumeRequestRecord, now: Date): boolean {
  return (
    record.status === 'approved' &&
    record.tokenExpiresAt !== null &&
    record.tokenExpiresAt > now &&
    record.downloadCount < record.maxDownloads
  )
}

// ── Postgres (Prisma) ───────────────────────────────────────────────────

function createPrismaStore(): ResumeRequestStore {
  // Imported lazily: constructing the client without a connection URL throws,
  // and this module is also loaded where no database exists.
  const client = async () => (await import('@/lib/prisma')).default
  const cast = (row: unknown) => row as ResumeRequestRecord | null

  return {
    async create(input) {
      const prisma = await client()
      return cast(await prisma.resumeRequest.create({ data: input }))!
    },
    async findById(id) {
      const prisma = await client()
      return cast(await prisma.resumeRequest.findUnique({ where: { id } }))
    },
    async findByTokenHash(tokenHash) {
      const prisma = await client()
      return cast(await prisma.resumeRequest.findUnique({ where: { tokenHash } }))
    },
    async findPendingByEmail(email, since) {
      const prisma = await client()
      return cast(
        await prisma.resumeRequest.findFirst({
          where: { email, status: 'pending', createdAt: { gte: since } },
          orderBy: { createdAt: 'desc' },
        })
      )
    },
    async list(limit) {
      const prisma = await client()
      const rows = await prisma.resumeRequest.findMany({
        orderBy: { createdAt: 'desc' },
        take: limit,
      })
      return rows as unknown as ResumeRequestRecord[]
    },
    async countCreatedSince(since) {
      const prisma = await client()
      return prisma.resumeRequest.count({ where: { createdAt: { gte: since } } })
    },
    async countCreatedSinceByIp(ip, since) {
      const prisma = await client()
      return prisma.resumeRequest.count({ where: { ipAddress: ip, createdAt: { gte: since } } })
    },
    async decide(id, decision, expectedStatus) {
      const prisma = await client()
      const data = {
        status: decision.status,
        adminNote: decision.adminNote,
        decidedAt: new Date(),
        tokenHash: decision.tokenHash,
        tokenExpiresAt: decision.tokenExpiresAt,
        maxDownloads: decision.maxDownloads,
        downloadCount: 0,
        lastDownloadAt: null,
      }
      if (expectedStatus) {
        // Guarded on the status the caller authorised against: if another
        // decision landed in between, zero rows match and this one is refused.
        const result = await prisma.resumeRequest.updateMany({
          where: { id, status: expectedStatus },
          data,
        })
        if (result.count !== 1) return null
        return cast(await prisma.resumeRequest.findUnique({ where: { id } }))
      }
      const existing = await prisma.resumeRequest.findUnique({ where: { id } })
      if (!existing) return null
      return cast(await prisma.resumeRequest.update({ where: { id }, data }))
    },
    async consumeDownload(tokenHash, now) {
      const prisma = await client()
      const record = cast(await prisma.resumeRequest.findUnique({ where: { tokenHash } }))
      if (!record || !isLinkUsable(record, now)) return null
      // Guarded on everything we just read: if another click got there first,
      // or the link was replaced or revoked in between, zero rows match and
      // this one is refused.
      const result = await prisma.resumeRequest.updateMany({
        where: {
          id: record.id,
          tokenHash,
          status: 'approved',
          downloadCount: record.downloadCount,
          tokenExpiresAt: { gt: now },
        },
        data: { downloadCount: { increment: 1 }, lastDownloadAt: now },
      })
      if (result.count !== 1) return null
      return { ...record, downloadCount: record.downloadCount + 1, lastDownloadAt: now }
    },
  }
}

// ── In-memory (development only) ─────────────────────────────────────────

function createMemoryStore(): ResumeRequestStore {
  const holder = globalThis as typeof globalThis & {
    __resumeRequests?: Map<string, ResumeRequestRecord>
  }
  // Kept on globalThis so hot reloads in `next dev` do not wipe the list.
  const rows = (holder.__resumeRequests ??= new Map())
  const newest = () => [...rows.values()].sort((a, b) => +b.createdAt - +a.createdAt)

  return {
    async create(input) {
      const record: ResumeRequestRecord = {
        ...input,
        id: `dev_${Date.now().toString(36)}${Math.random().toString(36).slice(2, 8)}`,
        status: 'pending',
        adminNote: null,
        decidedAt: null,
        tokenHash: null,
        tokenExpiresAt: null,
        downloadCount: 0,
        maxDownloads: 5,
        lastDownloadAt: null,
        createdAt: new Date(),
      }
      rows.set(record.id, record)
      return record
    },
    async findById(id) {
      return rows.get(id) ?? null
    },
    async findByTokenHash(tokenHash) {
      return newest().find((r) => r.tokenHash === tokenHash) ?? null
    },
    async findPendingByEmail(email, since) {
      return (
        newest().find((r) => r.email === email && r.status === 'pending' && r.createdAt >= since) ??
        null
      )
    },
    async list(limit) {
      return newest().slice(0, limit)
    },
    async countCreatedSince(since) {
      return newest().filter((r) => r.createdAt >= since).length
    },
    async countCreatedSinceByIp(ip, since) {
      return newest().filter((r) => r.ipAddress === ip && r.createdAt >= since).length
    },
    async decide(id, decision, expectedStatus) {
      const record = rows.get(id)
      if (!record) return null
      if (expectedStatus && record.status !== expectedStatus) return null
      Object.assign(record, decision, {
        decidedAt: new Date(),
        downloadCount: 0,
        lastDownloadAt: null,
      })
      return record
    },
    async consumeDownload(tokenHash, now) {
      const record = newest().find((r) => r.tokenHash === tokenHash)
      if (!record || !isLinkUsable(record, now)) return null
      record.downloadCount += 1
      record.lastDownloadAt = now
      return record
    },
  }
}

let cached: ResumeRequestStore | undefined

export function getResumeRequestStore(): ResumeRequestStore {
  if (cached) return cached
  if (process.env.PRISMA_DATABASE_URL) {
    cached = createPrismaStore()
  } else if (process.env.NODE_ENV !== 'production') {
    cached = createMemoryStore()
  } else {
    throw new StoreUnavailableError()
  }
  return cached
}
