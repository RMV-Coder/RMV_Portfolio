// Server-only mail helper. Do NOT import from client components.
import "server-only"
import nodemailer from 'nodemailer'

export interface OutgoingMail {
  to: string
  subject: string
  text: string
  html: string
  replyTo?: string
  /** Display name on the From line. */
  fromName?: string
}

/** What happened to a message — surfaced to the admin UI so a failure is visible. */
export type MailOutcome = 'sent' | 'logged' | 'skipped' | 'failed'

export function isMailConfigured(): boolean {
  return Boolean(process.env.SMTP_USER && process.env.SMTP_PASS)
}

/**
 * Where notifications about the site are delivered. Development falls back to
 * a placeholder so the message — and the links in it — still reach the log.
 */
export function ownerEmail(): string | undefined {
  return (
    process.env.CONTACT_EMAIL ||
    process.env.SMTP_USER ||
    (process.env.NODE_ENV !== 'production' ? 'owner@localhost' : undefined)
  )
}

/**
 * Sends one message and reports the outcome instead of throwing, because every
 * caller here treats mail as a side effect of a request that has already been
 * recorded — a dead SMTP server must not lose the request itself.
 *
 * Without SMTP credentials, development prints the message to the server log
 * (so links in it can still be followed); production skips it and says so.
 */
export async function sendMail(mail: OutgoingMail): Promise<MailOutcome> {
  if (!isMailConfigured()) {
    if (process.env.NODE_ENV !== 'production') {
      console.info(
        `\n[mail:dev] SMTP not configured — message printed instead of sent\n` +
          `  To:      ${mail.to}\n  Subject: ${mail.subject}\n\n${mail.text}\n`
      )
      return 'logged'
    }
    console.error('[mail] SMTP not configured — message not sent:', mail.subject)
    return 'skipped'
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        // App passwords are often pasted with quotes or spaces.
        pass: process.env.SMTP_PASS?.replace(/["\s]/g, ''),
      },
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 10000,
    })

    await transporter.sendMail({
      from: `"${mail.fromName ?? 'Raymond Valdepeñas'}" <${process.env.SMTP_USER}>`,
      to: mail.to,
      subject: mail.subject,
      text: mail.text,
      html: mail.html,
      replyTo: mail.replyTo,
    })
    return 'sent'
  } catch (error) {
    console.error('[mail] send failed:', error instanceof Error ? error.message : error)
    return 'failed'
  }
}
