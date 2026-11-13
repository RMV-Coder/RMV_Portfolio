import { NextRequest, NextResponse } from 'next/server'
import { resumeRequestSchema } from '@/lib/validations'
import { baseUrl, clientIp, createRateLimiter, isSameOrigin } from '@/lib/request-guards'
import { ownerEmail, sendMail } from '@/lib/mailer'
import { requestNotification } from '@/lib/resume/emails'
import { getResumeRequestStore, StoreUnavailableError } from '@/lib/resume/store'
import { createReviewToken } from '@/lib/resume/tokens'

const HOUR_MS = 60 * 60 * 1000

/** Requests one network may make per hour. */
const PER_IP_PER_HOUR = 3

/** Fast first check; lives in one instance's memory, so it is backed by a database count below. */
const allow = createRateLimiter({ windowMs: HOUR_MS, max: PER_IP_PER_HOUR })

/** A repeat request inside this window is treated as the same request. */
const DUPLICATE_WINDOW_MS = 24 * 60 * 60 * 1000

/**
 * Site-wide ceilings per hour, counted in the database so they hold across
 * serverless instances. Past the first, requests are still saved but stop
 * emailing the owner. The second is only a backstop against flooding the
 * database, set well above real traffic so that a few senders cannot close
 * the form for everyone; the per-network count is what turns people away.
 */
const NOTIFY_CAP_PER_HOUR = 10
const ACCEPT_CAP_PER_HOUR = 500

/**
 * The same body is returned for a new request, a duplicate, and a tripped
 * honeypot, so the response never reveals whether an address has asked before
 * or whether a bot was caught.
 */
const accepted = () => NextResponse.json({ ok: true })

/**
 * Vercel percent-encodes this header for non-ASCII names ("S%C3%A3o%20Paulo").
 * Decoded so the owner reads a real place name, and cut to fit the
 * 100-character column. A malformed value is kept as it arrived, also cut.
 */
function cityFrom(request: NextRequest): string | null {
  const raw = request.headers.get('x-vercel-ip-city')
  if (!raw) return null
  let city = raw
  try {
    city = decodeURIComponent(raw)
  } catch {
    // Not valid percent-encoding: keep the raw value.
  }
  // Cut by code point, as the column counts them, so a character outside the
  // Basic Multilingual Plane is never split in half.
  return Array.from(city).slice(0, 100).join('')
}

export async function POST(request: NextRequest) {
  if (!isSameOrigin(request)) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  const ip = clientIp(request)
  if (!allow(ip)) {
    return NextResponse.json(
      { error: 'Too many requests from this network. Try again in an hour.' },
      { status: 429 }
    )
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }

  // Honeypot: a field no person can see. Filled in means a form-filling bot.
  if (typeof body === 'object' && body !== null && 'website' in body && body.website) {
    return accepted()
  }

  const parsed = resumeRequestSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Some fields need another look. Check the form and try again.' },
      { status: 400 }
    )
  }

  const data = parsed.data
  const email = data.email.trim().toLowerCase()

  try {
    const store = getResumeRequestStore()

    const existing = await store.findPendingByEmail(email, new Date(Date.now() - DUPLICATE_WINDOW_MS))
    if (existing) return accepted()

    const hourAgo = new Date(Date.now() - HOUR_MS)
    const storedIp = ip === 'unknown' ? null : ip.slice(0, 45)

    // The same per-network limit as above, counted in the database so it
    // holds across instances. Skipped when the address is unknown, because
    // every such request would share one bucket.
    if (storedIp && (await store.countCreatedSinceByIp(storedIp, hourAgo)) >= PER_IP_PER_HOUR) {
      return NextResponse.json(
        { error: 'Too many requests from this network. Try again in an hour.' },
        { status: 429 }
      )
    }

    const lastHour = await store.countCreatedSince(hourAgo)
    if (lastHour >= ACCEPT_CAP_PER_HOUR) {
      return NextResponse.json(
        { error: 'Lots of requests right now. Try again in an hour, or use the contact form.' },
        { status: 429 }
      )
    }

    const record = await store.create({
      name: data.name.trim(),
      email,
      company: data.company.trim() || null,
      purpose: data.purpose,
      message: data.message.trim(),
      ipAddress: storedIp,
      userAgent: request.headers.get('user-agent'),
      country: request.headers.get('x-vercel-ip-country'),
      city: cityFrom(request),
    })

    // The request is saved either way; the email is only how the owner hears
    // about it. Without a signing secret the link falls back to the dashboard.
    const to = ownerEmail()
    if (lastHour >= NOTIFY_CAP_PER_HOUR) {
      console.warn('[resume-requests] hourly notification cap reached — request saved, email skipped')
    } else if (to) {
      const token = createReviewToken(record.id)
      const reviewUrl = token
        ? `${baseUrl(request)}/admin/resume-requests/${record.id}?t=${encodeURIComponent(token)}`
        : `${baseUrl(request)}/admin`
      await sendMail(requestNotification(record, reviewUrl, to))
    } else {
      console.error('[resume-requests] no owner email configured — request saved without notification')
    }

    return accepted()
  } catch (error) {
    if (error instanceof StoreUnavailableError) {
      return NextResponse.json(
        { error: 'Résumé requests are unavailable right now. Use the contact form instead.' },
        { status: 503 }
      )
    }
    console.error('[resume-requests] failed:', error instanceof Error ? error.message : error)
    return NextResponse.json(
      { error: "That didn't go through. Try again in a moment." },
      { status: 500 }
    )
  }
}
