// Server-only. "Is this request allowed to manage résumé requests?"
import "server-only"
import { cookies } from 'next/headers'
import { ADMIN_COOKIE, verifyReviewToken, verifySessionValue } from '@/lib/resume/tokens'

/** True when the browser holds a valid admin session cookie. */
export async function hasAdminSession(): Promise<boolean> {
  const store = await cookies()
  return verifySessionValue(store.get(ADMIN_COOKIE)?.value)
}

/**
 * Two ways to open a request: a signed-in session, or the review link from the
 * notification email. The link is scoped to one request and nothing else.
 */
export async function canView(requestId: string, reviewToken?: string | null): Promise<boolean> {
  if (verifyReviewToken(requestId, reviewToken)) return true
  return hasAdminSession()
}

/**
 * Who may approve or decline. The emailed link is a one-decision pass: it
 * works while the request is still pending and never again. That matters
 * because the link can travel — a forwarded or quoted copy of the email
 * carries it (the notification has no Reply-To to the requester for this
 * reason) — and it must not let anyone re-approve a request that was declined
 * or revoked. Changing a decision takes a signed-in session.
 */
export async function canDecide(
  requestId: string,
  status: string | undefined,
  reviewToken?: string | null
): Promise<boolean> {
  if (await hasAdminSession()) return true
  return status === 'pending' && verifyReviewToken(requestId, reviewToken)
}
