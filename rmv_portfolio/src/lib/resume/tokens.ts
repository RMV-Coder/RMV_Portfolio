// Server-only. Signing and verification for the résumé-request flow and the
// admin session. Everything here is HMAC-SHA256 over a single secret, so there
// is no token table to keep in sync and nothing to revoke but the secret.
import "server-only"
import { createHash, createHmac, randomBytes, timingSafeEqual } from 'node:crypto'

/** How long an approved requester can use their link. */
export const ACCESS_TTL_DAYS = 14
/** Downloads allowed per approved link. */
export const ACCESS_MAX_DOWNLOADS = 5
/** How long the "review this request" link in the notification email works. */
const REVIEW_TTL_MS = 7 * 24 * 60 * 60 * 1000
/** Admin session length. */
export const SESSION_TTL_SECONDS = 7 * 24 * 60 * 60

export const ADMIN_COOKIE = 'rmv_admin'

const MIN_SECRET_LENGTH = 32
/**
 * Sign-in is rate-limited per server instance, which on serverless is a speed
 * bump rather than a wall. A long passphrase is the real defence, so a short
 * one leaves the admin area switched off.
 */
const MIN_PASSWORD_LENGTH = 16

/**
 * The signing secret, or `null` when it is missing or too short to be safe.
 * Callers treat `null` as "this feature is switched off" rather than falling
 * back to a default — a guessable default would make every link forgeable.
 */
export function getSigningSecret(): string | null {
  const secret = process.env.RESUME_SIGNING_SECRET
  return secret && secret.length >= MIN_SECRET_LENGTH ? secret : null
}

function getAdminPassword(): string | null {
  const password = process.env.ADMIN_PASSWORD
  return password && password.length >= MIN_PASSWORD_LENGTH ? password : null
}

export function isAdminConfigured(): boolean {
  return Boolean(getSigningSecret() && getAdminPassword())
}

function sign(payload: string, secret: string): string {
  return createHmac('sha256', secret).update(payload).digest('base64url')
}

function safeEqual(a: string, b: string): boolean {
  const left = Buffer.from(a)
  const right = Buffer.from(b)
  return left.length === right.length && timingSafeEqual(left, right)
}

/** Builds `<expiry>.<signature>` over a purpose-scoped payload. */
function mint(scope: string, ttlMs: number): string | null {
  const secret = getSigningSecret()
  if (!secret) return null
  const expires = Date.now() + ttlMs
  return `${expires}.${sign(`${scope}:${expires}`, secret)}`
}

function check(scope: string, token: string | undefined | null): boolean {
  const secret = getSigningSecret()
  if (!secret || !token) return false
  const dot = token.indexOf('.')
  if (dot <= 0) return false
  const expires = Number(token.slice(0, dot))
  if (!Number.isSafeInteger(expires) || expires < Date.now()) return false
  return safeEqual(token.slice(dot + 1), sign(`${scope}:${expires}`, secret))
}

// ── Review links (emailed to the site owner) ─────────────────────────────
// Scoped to one request id, so a link for request A can never act on B.

export function createReviewToken(requestId: string): string | null {
  return mint(`review:${requestId}`, REVIEW_TTL_MS)
}

export function verifyReviewToken(requestId: string, token: string | undefined | null): boolean {
  return check(`review:${requestId}`, token)
}

// ── Admin session cookie ────────────────────────────────────────────────

/**
 * The session's signing scope includes a digest of the password, so changing
 * the password signs every existing session out.
 */
function sessionScope(): string | null {
  const password = getAdminPassword()
  return password ? `admin-session:${createHash('sha256').update(password).digest('hex')}` : null
}

export function createSessionValue(): string | null {
  const scope = sessionScope()
  return scope ? mint(scope, SESSION_TTL_SECONDS * 1000) : null
}

export function verifySessionValue(value: string | undefined | null): boolean {
  const scope = sessionScope()
  return scope ? check(scope, value) : false
}

/** Constant-time password check. Hashing first equalises the lengths. */
export function verifyAdminPassword(candidate: string): boolean {
  const expected = getAdminPassword()
  if (!expected || !getSigningSecret()) return false
  const digest = (value: string) => createHash('sha256').update(value).digest()
  return timingSafeEqual(digest(candidate), digest(expected))
}

// ── Download access tokens (emailed to the requester) ───────────────────
// Random, not signed: the token is a lookup key, and only its hash is stored.

export function createAccessToken(): { token: string; hash: string } {
  const token = randomBytes(32).toString('base64url')
  return { token, hash: hashAccessToken(token) }
}

export function hashAccessToken(token: string): string {
  return createHash('sha256').update(token).digest('hex')
}

/** Shape check before a token ever reaches the database. */
export function looksLikeAccessToken(token: string): boolean {
  return /^[A-Za-z0-9_-]{40,64}$/.test(token)
}
