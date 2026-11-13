import { NextRequest, NextResponse } from 'next/server'
import { getResumeFileStore } from '@/lib/resume/file-store'
import { getResumeRequestStore } from '@/lib/resume/store'
import { hashAccessToken, looksLikeAccessToken } from '@/lib/resume/tokens'

// The PDF is uploaded from /admin and kept in the database: it is not in the
// repository and not on disk, so this route is the only thing that serves it.
const DOWNLOAD_NAME = 'Raymond_Valdepenas_Resume.pdf'

type Context = { params: Promise<{ token: string }> }

/** Every failure lands on the same page, which explains what happened without
 *  saying whether the link ever existed. `failed` marks a fault on this side
 *  (the file or the database), so the page can say so instead of silently
 *  offering the same button again. */
const landing = (request: NextRequest, token: string, failed = false) =>
  NextResponse.redirect(
    new URL(`/resume/${encodeURIComponent(token)}${failed ? '?failed=1' : ''}`, request.url),
    303
  )

/**
 * Opening this URL does nothing but send the visitor to the landing page.
 * Mail scanners and link previewers follow GET links; if a GET spent a
 * download, they would use the link up before its owner ever saw it.
 */
export async function GET(request: NextRequest, { params }: Context) {
  return landing(request, (await params).token)
}

/**
 * The download itself: the button on the landing page posts here.
 *
 * There is deliberately no same-origin check. The landing page is served with
 * `Referrer-Policy: no-referrer` (so the token never leaks in a Referer), and
 * under that policy a browser sends `Origin: null` on a form post — an origin
 * check would reject every genuine click. It would also buy nothing: the token
 * in the URL is the credential, and anyone able to forge this request already
 * holds it.
 */
export async function POST(request: NextRequest, { params }: Context) {
  const { token } = await params
  const backToLanding = () => landing(request, token)

  if (!looksLikeAccessToken(token)) return backToLanding()

  try {
    // Read first: if nothing has been uploaded, a download must not be spent on it.
    const file = await getResumeFileStore().get()
    if (!file) {
      console.error('[resume] download asked for, but no résumé has been uploaded')
      return landing(request, token, true)
    }

    const record = await getResumeRequestStore().consumeDownload(hashAccessToken(token), new Date())
    if (!record) return backToLanding()

    return new NextResponse(new Uint8Array(file.data), {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${DOWNLOAD_NAME}"`,
        'Content-Length': String(file.size),
        'Cache-Control': 'private, no-store',
        'X-Robots-Tag': 'noindex, noarchive',
      },
    })
  } catch (error) {
    console.error('[resume] download failed:', error instanceof Error ? error.message : error)
    return landing(request, token, true)
  }
}
