import { NextRequest, NextResponse } from 'next/server'
import { isSameOrigin } from '@/lib/request-guards'
import { hasAdminSession } from '@/lib/resume/admin-auth'
import { getResumeFileStore, looksLikePdf, RESUME_MAX_BYTES } from '@/lib/resume/file-store'
import { StoreUnavailableError } from '@/lib/resume/store'

const tooLarge = () =>
  NextResponse.json(
    { error: `That file is too large. Keep it under ${RESUME_MAX_BYTES / 1024 / 1024} MB.` },
    { status: 413 }
  )

const failure = (error: unknown, what: string) => {
  if (error instanceof StoreUnavailableError) {
    return NextResponse.json({ error: 'Storage is not configured.' }, { status: 503 })
  }
  console.error(`[admin/resume-file] ${what} failed:`, error instanceof Error ? error.message : error)
  return NextResponse.json({ error: "That didn't work. Try again." }, { status: 500 })
}

/**
 * Replaces the stored résumé. Signed-in owner only: the emailed review links
 * can decide one request and nothing else, so they cannot reach this.
 */
export async function POST(request: NextRequest) {
  if (!isSameOrigin(request)) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }
  if (!(await hasAdminSession())) {
    return NextResponse.json({ error: 'Sign in to upload.' }, { status: 401 })
  }

  // Refused on the stated length first, so an oversized body is not read at all.
  // The slack covers the multipart wrapping around the file.
  const declared = Number(request.headers.get('content-length') ?? 0)
  if (declared > RESUME_MAX_BYTES + 64 * 1024) return tooLarge()

  const form = await request.formData().catch(() => null)
  const file = form?.get('file')
  if (!(file instanceof File)) {
    return NextResponse.json({ error: 'Choose a PDF to upload.' }, { status: 400 })
  }
  if (file.size > RESUME_MAX_BYTES) return tooLarge()

  const data = new Uint8Array(await file.arrayBuffer())
  // Judged by its first bytes, not by the name or type the browser gave it.
  if (!looksLikePdf(data)) {
    return NextResponse.json({ error: "That isn't a PDF. Export the résumé as a PDF and try again." }, { status: 400 })
  }

  try {
    const info = await getResumeFileStore().put(data, file.name)
    return NextResponse.json({ ok: true, ...info })
  } catch (error) {
    return failure(error, 'upload')
  }
}

/** Lets the signed-in owner open what is stored, to check the right version is live. */
export async function GET() {
  if (!(await hasAdminSession())) {
    return NextResponse.json({ error: 'Sign in first.' }, { status: 401 })
  }
  try {
    const file = await getResumeFileStore().get()
    if (!file) return NextResponse.json({ error: 'Nothing uploaded yet.' }, { status: 404 })
    return new NextResponse(new Uint8Array(file.data), {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'inline; filename="resume.pdf"',
        'Content-Length': String(file.size),
        'Cache-Control': 'private, no-store',
        'X-Robots-Tag': 'noindex, noarchive',
      },
    })
  } catch (error) {
    return failure(error, 'read')
  }
}
