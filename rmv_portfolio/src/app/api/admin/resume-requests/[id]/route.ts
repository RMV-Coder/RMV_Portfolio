import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { baseUrl, isSameOrigin } from '@/lib/request-guards'
import { sendMail, type MailOutcome } from '@/lib/mailer'
import { canDecide, hasAdminSession } from '@/lib/resume/admin-auth'
import { approvalEmail, declineEmail } from '@/lib/resume/emails'
import { getResumeFileStore } from '@/lib/resume/file-store'
import { getResumeRequestStore, StoreUnavailableError } from '@/lib/resume/store'
import { ACCESS_MAX_DOWNLOADS, ACCESS_TTL_DAYS, createAccessToken } from '@/lib/resume/tokens'

const decisionSchema = z.object({
  action: z.enum(['approve', 'decline']),
  note: z.string().max(1000).optional(),
  /** Decline only: whether to tell the requester. */
  notify: z.boolean().optional(),
  /** Review token from the notification email, when not signed in. */
  token: z.string().max(200).optional(),
})

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params

  if (!isSameOrigin(request)) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  const parsed = decisionSchema.safeParse(await request.json().catch(() => null))
  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }
  const { action, token, notify } = parsed.data
  const note = parsed.data.note?.trim() || null

  try {
    const store = getResumeRequestStore()

    // Looked up before the auth check because the emailed link only works
    // while the request is pending. An unknown id and a refused one get the
    // same answer, so the response says nothing about which ids exist.
    const existing = await store.findById(id)
    if (!(await canDecide(id, existing?.status, token))) {
      return NextResponse.json(
        { error: 'This link can no longer change the request. Sign in to continue.' },
        { status: 401 }
      )
    }
    if (!existing) return NextResponse.json({ error: 'Request not found.' }, { status: 404 })

    // The emailed link was authorised against "pending" just above, so the
    // write is made conditional on it still being pending: two link holders
    // posting at once cannot both decide. A signed-in session may change an
    // earlier decision, so its writes are unconditional.
    const viaSession = await hasAdminSession()
    const expectedStatus = viaSession ? undefined : 'pending'
    const notDecided = () =>
      viaSession
        ? NextResponse.json({ error: 'Request not found.' }, { status: 404 })
        : NextResponse.json(
            { error: 'This request was already decided. Sign in to change it.' },
            { status: 409 }
          )

    if (action === 'decline') {
      const record = await store.decide(
        id,
        {
          status: 'declined',
          adminNote: note,
          tokenHash: null,
          tokenExpiresAt: null,
          maxDownloads: ACCESS_MAX_DOWNLOADS,
        },
        expectedStatus
      )
      if (!record) return notDecided()

      const email: MailOutcome | 'not-sent' = notify
        ? await sendMail(declineEmail(record, note))
        : 'not-sent'
      return NextResponse.json({ ok: true, status: record.status, email })
    }

    // Nothing uploaded yet: approving would email a link with nothing behind it.
    if (!(await getResumeFileStore().info())) {
      return NextResponse.json(
        { error: 'Upload your résumé on the admin page first. There is nothing to send yet.' },
        { status: 409 }
      )
    }

    // Approving again issues a fresh link and retires the old one — the way to
    // extend access or replace a link that never arrived.
    const access = createAccessToken()
    const record = await store.decide(
      id,
      {
        status: 'approved',
        adminNote: note,
        tokenHash: access.hash,
        tokenExpiresAt: new Date(Date.now() + ACCESS_TTL_DAYS * 24 * 60 * 60 * 1000),
        maxDownloads: ACCESS_MAX_DOWNLOADS,
      },
      expectedStatus
    )
    if (!record) return notDecided()

    const accessUrl = `${baseUrl(request)}/resume/${access.token}`
    const email = await sendMail(approvalEmail(record, accessUrl, note))

    // The link is returned once, here, because only its hash is stored: if the
    // email does not arrive it can still be passed on by hand.
    return NextResponse.json({ ok: true, status: record.status, email, accessUrl })
  } catch (error) {
    if (error instanceof StoreUnavailableError) {
      return NextResponse.json({ error: 'Storage is not configured.' }, { status: 503 })
    }
    console.error('[admin/resume-requests] failed:', error instanceof Error ? error.message : error)
    return NextResponse.json({ error: "That didn't save. Try again." }, { status: 500 })
  }
}
