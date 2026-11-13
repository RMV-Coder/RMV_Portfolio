// Server-only. The three emails the résumé-request flow sends.
import "server-only"
import { escapeHtml } from '@/lib/utils'
import { PERSON } from '@/lib/site'
import { RESUME_PURPOSES } from '@/lib/validations'
import type { OutgoingMail } from '@/lib/mailer'
import type { ResumeRequestRecord } from '@/lib/resume/store'

const purposeLabel = (value: string) =>
  RESUME_PURPOSES.find((p) => p.value === value)?.label ?? value

const formatDate = (date: Date) =>
  date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })

/** One shared, deliberately plain layout: these have to survive every mail client. */
function layout(title: string, body: string): string {
  return `<!DOCTYPE html>
<html>
  <head><meta charset="utf-8"><title>${escapeHtml(title)}</title></head>
  <body style="margin:0;padding:24px;background:#f4f4f2;font-family:Arial,Helvetica,sans-serif;color:#1c1b19;line-height:1.6;">
    <div style="max-width:560px;margin:0 auto;background:#ffffff;border:1px solid #e3e1da;border-radius:10px;padding:28px;">
      <h2 style="margin:0 0 16px;font-size:20px;">${escapeHtml(title)}</h2>
      ${body}
    </div>
  </body>
</html>`
}

const button = (href: string, label: string) =>
  `<p style="margin:24px 0;"><a href="${escapeHtml(href)}" style="display:inline-block;background:#1c1b19;color:#ffffff;text-decoration:none;padding:12px 22px;border-radius:8px;font-weight:bold;">${escapeHtml(label)}</a></p>`

const row = (label: string, value: string) =>
  `<tr><td style="padding:6px 12px 6px 0;color:#6b6860;vertical-align:top;white-space:nowrap;">${escapeHtml(label)}</td><td style="padding:6px 0;">${value}</td></tr>`

/**
 * To the site owner: someone asked for the résumé.
 *
 * Deliberately no Reply-To pointing at the requester. This email carries the
 * signed review link, which approves the request while it is pending; a reply
 * would quote that link straight back to the person who asked.
 */
export function requestNotification(
  record: ResumeRequestRecord,
  reviewUrl: string,
  to: string
): OutgoingMail {
  const where = [record.city, record.country].filter(Boolean).join(', ') || 'Unknown'
  const who = record.company ? `${record.name} (${record.company})` : record.name

  return {
    to,
    fromName: 'Portfolio',
    subject: `Résumé request from ${who}`,
    text: [
      `${who} asked for your résumé.`,
      '',
      `Email:    ${record.email}`,
      `Reason:   ${purposeLabel(record.purpose)}`,
      `Location: ${where}`,
      '',
      record.message,
      '',
      `Review and approve or decline: ${reviewUrl}`,
      '',
      'Nothing is sent to them until you approve.',
      `To ask them something first, write to ${record.email} in a new email. Don't forward this one, because the review link works for anyone who has it.`,
    ].join('\n'),
    html: layout(
      'Someone asked for your résumé',
      `<table style="border-collapse:collapse;font-size:15px;">
        ${row('Name', escapeHtml(record.name))}
        ${row('Email', escapeHtml(record.email))}
        ${record.company ? row('Company', escapeHtml(record.company)) : ''}
        ${row('Reason', escapeHtml(purposeLabel(record.purpose)))}
        ${row('Location', escapeHtml(where))}
      </table>
      <p style="margin:18px 0 0;padding:14px 16px;background:#f7f6f2;border-radius:8px;white-space:pre-wrap;">${escapeHtml(record.message)}</p>
      ${button(reviewUrl, 'Review request')}
      <p style="margin:0;color:#6b6860;font-size:13px;">Nothing is sent to them until you approve. To ask them something first, <a href="mailto:${escapeHtml(record.email)}" style="color:#6b6860;">write to ${escapeHtml(record.name)}</a> in a new email. Don't forward this one, because the review button works for anyone who has it.</p>`
    ),
  }
}

/** To the requester: approved, here is your private link. */
export function approvalEmail(
  record: ResumeRequestRecord,
  accessUrl: string,
  note: string | null
): OutgoingMail {
  const expires = record.tokenExpiresAt ? formatDate(record.tokenExpiresAt) : 'soon'

  return {
    to: record.email,
    replyTo: PERSON.email,
    subject: `Your copy of ${PERSON.name}'s résumé`,
    text: [
      `Hi ${record.name},`,
      '',
      'Thanks for your interest — here is a private link to my résumé:',
      accessUrl,
      '',
      ...(note ? [note, ''] : []),
      `The link is personal to you and works until ${expires}.`,
      'If you have a role or project in mind, just reply to this email.',
      '',
      PERSON.name,
    ].join('\n'),
    html: layout(
      'Here is my résumé',
      `<p style="margin:0 0 12px;">Hi ${escapeHtml(record.name)},</p>
      <p style="margin:0;">Thanks for your interest. The button below opens a private copy of my résumé.</p>
      ${button(accessUrl, 'Open résumé')}
      ${note ? `<p style="margin:0 0 16px;padding:14px 16px;background:#f7f6f2;border-radius:8px;white-space:pre-wrap;">${escapeHtml(note)}</p>` : ''}
      <p style="margin:0;color:#6b6860;font-size:13px;">The link is personal to you and works until ${escapeHtml(expires)}. If you have a role or project in mind, just reply to this email.</p>
      <p style="margin:18px 0 0;">${escapeHtml(PERSON.name)}</p>`
    ),
  }
}

/** To the requester: declined, sent only when the owner chooses to notify. */
export function declineEmail(record: ResumeRequestRecord, note: string | null): OutgoingMail {
  const fallback =
    "Thanks for reaching out. I'm not sharing my résumé for this request, but you're welcome to get in touch through the contact form on my site."

  return {
    to: record.email,
    replyTo: PERSON.email,
    subject: `About your request for ${PERSON.name}'s résumé`,
    text: [`Hi ${record.name},`, '', note || fallback, '', PERSON.name].join('\n'),
    html: layout(
      'About your résumé request',
      `<p style="margin:0 0 12px;">Hi ${escapeHtml(record.name)},</p>
      <p style="margin:0;white-space:pre-wrap;">${escapeHtml(note || fallback)}</p>
      <p style="margin:18px 0 0;">${escapeHtml(PERSON.name)}</p>`
    ),
  }
}
