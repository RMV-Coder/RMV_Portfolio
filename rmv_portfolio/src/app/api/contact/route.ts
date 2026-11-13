import { NextRequest, NextResponse } from 'next/server'
import { ownerEmail, sendMail } from '@/lib/mailer'
import { clientIp, createRateLimiter, isSameOrigin } from '@/lib/request-guards'
import { PROFILES, SITE_URL } from '@/lib/site'
import { escapeHtml } from '@/lib/utils'
import { contactFormSchema } from '@/lib/validations'

/** Five messages per address per quarter of an hour: a speed bump against a flooded inbox. */
const allow = createRateLimiter({ windowMs: 15 * 60 * 1000, max: 5 })

const NOT_NOW = "That didn't go through. Try again in a moment, or email me directly."
const NOT_WORKING = "The contact form isn't working right now. Please email me directly."

/** One line, no control characters: this ends up in an email subject. */
const singleLine = (value: string) => value.replace(/[\u0000-\u001f\u007f]+/g, ' ').trim()

/**
 * The contact form. It only accepts posts from this site's own pages, limits
 * how often one address may write, and hands the message to the same mailer
 * the résumé requests use. Without SMTP settings, development prints the
 * message to the server log instead of failing, so the form can be tried locally.
 */
export async function POST(request: NextRequest) {
  // A browser on this site always sends its Origin; a bare script does not.
  if (!isSameOrigin(request)) {
    return NextResponse.json({ error: NOT_NOW }, { status: 403 })
  }

  if (!allow(clientIp(request))) {
    return NextResponse.json(
      { error: "That's a lot of messages in a short time. Try again in a few minutes." },
      { status: 429 }
    )
  }

  const parsed = contactFormSchema.safeParse(await request.json().catch(() => null))
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Some of the details don't look right. Check the form and try again." },
      { status: 400 }
    )
  }
  const { name, email, message } = parsed.data
  const subject = singleLine(parsed.data.subject)

  const to = ownerEmail()
  if (!to) {
    console.error('[contact] no address to deliver to: set CONTACT_EMAIL or SMTP_USER')
    return NextResponse.json({ error: NOT_WORKING }, { status: 503 })
  }

  // UTC, so the time means the same thing wherever the server happens to run.
  const sentAt = new Date().toUTCString()
  const outcome = await sendMail({
    to,
    fromName: 'Portfolio contact',
    replyTo: email,
    subject: `Portfolio contact: ${subject}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      `Subject: ${subject}`,
      '',
      'Message:',
      message,
      '',
      '---',
      `Sent from the portfolio contact form, ${sentAt}`,
    ].join('\n'),
    html: `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>New message from the portfolio</title>
    <style>
      body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
      .container { max-width: 600px; margin: 0 auto; padding: 20px; }
      .header { background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
      .content { background: #ffffff; padding: 20px; border: 1px solid #e9ecef; border-radius: 8px; }
      .field { margin-bottom: 15px; }
      .label { font-weight: bold; color: #495057; }
      .value { margin-top: 5px; padding: 10px; background: #f8f9fa; border-radius: 4px; }
      .footer { margin-top: 20px; padding: 20px; text-align: center; color: #6c757d; font-size: 14px; }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h2>New message from the portfolio</h2>
        <p>Replying to this email answers ${escapeHtml(name)} directly.</p>
      </div>
      <div class="content">
        <div class="field"><div class="label">Name</div><div class="value">${escapeHtml(name)}</div></div>
        <div class="field"><div class="label">Email</div><div class="value">${escapeHtml(email)}</div></div>
        <div class="field"><div class="label">Subject</div><div class="value">${escapeHtml(subject)}</div></div>
        <div class="field"><div class="label">Message</div><div class="value">${escapeHtml(message).replace(/\n/g, '<br>')}</div></div>
      </div>
      <div class="footer"><p>Sent from the portfolio contact form, ${escapeHtml(sentAt)}</p></div>
    </div>
  </body>
</html>`,
  })

  if (outcome === 'failed') {
    return NextResponse.json({ error: NOT_NOW }, { status: 503 })
  }
  if (outcome === 'skipped') {
    return NextResponse.json({ error: NOT_WORKING }, { status: 503 })
  }

  // Optional acknowledgement to the sender. Its outcome does not change the
  // answer: the message itself has already been delivered.
  if (process.env.SEND_AUTO_REPLY === 'true') {
    await sendMail({
      to: email,
      subject: 'Thanks for your message',
      text: [
        `Hi ${name},`,
        '',
        "Thanks for getting in touch. Your message reached me and I'll reply by email.",
        '',
        'Raymond Valdepeñas',
        'Software developer',
        '',
        `Portfolio: ${SITE_URL}`,
        `GitHub: ${PROFILES.github}`,
        '',
        '---',
        'This is an automatic acknowledgement from my portfolio contact form.',
      ].join('\n'),
      html: `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Thanks for your message</title>
    <style>
      body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
      .container { max-width: 600px; margin: 0 auto; padding: 20px; }
      .content { background: #ffffff; padding: 20px; border: 1px solid #e9ecef; border-radius: 8px; }
      .signature { margin-top: 30px; padding-top: 20px; border-top: 1px solid #e9ecef; }
      .signature a { color: #9c3d08; text-decoration: none; margin-right: 15px; }
      .note { margin-top: 15px; color: #6c757d; font-size: 12px; }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="content">
        <p>Hi ${escapeHtml(name)},</p>
        <p>Thanks for getting in touch. Your message reached me and I'll reply by email.</p>
        <div class="signature">
          <strong>Raymond Valdepeñas</strong><br>
          Software developer<br>
          <a href="${SITE_URL}">Portfolio</a>
          <a href="${PROFILES.github}">GitHub</a>
          <p class="note">This is an automatic acknowledgement from my portfolio contact form.</p>
        </div>
      </div>
    </div>
  </body>
</html>`,
    })
  }

  return NextResponse.json({ message: 'Message sent.' })
}
