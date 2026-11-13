import { NextRequest, NextResponse } from 'next/server'
import { clientIp, createRateLimiter, isSameOrigin } from '@/lib/request-guards'
import {
  ADMIN_COOKIE,
  SESSION_TTL_SECONDS,
  createSessionValue,
  isAdminConfigured,
  verifyAdminPassword,
} from '@/lib/resume/tokens'

// Five guesses per quarter hour per network.
const allow = createRateLimiter({ windowMs: 15 * 60 * 1000, max: 5 })

/** Sign in. */
export async function POST(request: NextRequest) {
  if (!isSameOrigin(request)) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }
  if (!isAdminConfigured()) {
    return NextResponse.json(
      { error: 'Admin sign-in is not set up on this deployment.' },
      { status: 503 }
    )
  }
  if (!allow(clientIp(request))) {
    return NextResponse.json(
      { error: 'Too many attempts. Wait 15 minutes and try again.' },
      { status: 429 }
    )
  }

  let password = ''
  try {
    const body = (await request.json()) as { password?: unknown }
    if (typeof body.password === 'string') password = body.password
  } catch {
    // Falls through to the wrong-password response.
  }

  const session = verifyAdminPassword(password) ? createSessionValue() : null
  if (!session) {
    return NextResponse.json({ error: "That password isn't right." }, { status: 401 })
  }

  const response = NextResponse.json({ ok: true })
  response.cookies.set(ADMIN_COOKIE, session, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    // Lax, not strict: the cookie must survive arriving from a link in an
    // email. Every state change is a same-origin-checked POST.
    sameSite: 'lax',
    path: '/',
    maxAge: SESSION_TTL_SECONDS,
  })
  return response
}

/** Sign out. */
export async function DELETE(request: NextRequest) {
  if (!isSameOrigin(request)) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }
  const response = NextResponse.json({ ok: true })
  response.cookies.delete(ADMIN_COOKIE)
  return response
}
