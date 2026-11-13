// Server-only request helpers shared by the route handlers.
import "server-only"
import type { NextRequest } from 'next/server'
import { SITE_URL } from '@/lib/site'

/**
 * True when the request was made by a page on this site. A same-origin browser
 * fetch always sends Origin; a bare script does not, which shuts the trivial
 * flood-the-inbox path and doubles as CSRF protection for the admin actions.
 */
export function isSameOrigin(request: NextRequest): boolean {
  const origin = request.headers.get('origin')
  const host = request.headers.get('host')
  if (!origin || !host) return false
  try {
    return new URL(origin).host === host
  } catch {
    return false
  }
}

export function clientIp(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for')
  return forwarded?.split(',')[0]?.trim() || request.headers.get('x-real-ip') || 'unknown'
}

/**
 * Origin to put in emailed links. Production always uses the configured site
 * URL: building it from the Host header would let a forged header aim a signed
 * review link at someone else's domain. Development uses the request's origin
 * so links work on whatever port the dev server picked.
 */
export function baseUrl(request: NextRequest): string {
  return process.env.NODE_ENV === 'production' ? SITE_URL : request.nextUrl.origin
}

/**
 * Fixed-window, per-key limiter held in memory. Good enough to blunt abuse of
 * a low-traffic form; it resets on cold start, so it is a speed bump, not a
 * guarantee.
 */
export function createRateLimiter(options: { windowMs: number; max: number }) {
  const hits = new Map<string, { count: number; resetAt: number }>()

  return function allow(key: string): boolean {
    const now = Date.now()
    for (const [k, entry] of hits) {
      if (now > entry.resetAt) hits.delete(k)
    }
    const entry = hits.get(key)
    if (!entry) {
      hits.set(key, { count: 1, resetAt: now + options.windowMs })
      return true
    }
    if (entry.count >= options.max) return false
    entry.count += 1
    return true
  }
}
