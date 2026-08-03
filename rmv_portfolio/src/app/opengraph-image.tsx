import { ImageResponse } from 'next/og'
import { PERSON, PROFILES } from '@/lib/site'

/**
 * Generated OpenGraph card.
 *
 * The metadata previously pointed at `/og-image.png`, which does not exist in
 * `public/` and returned 404. Every share link, every social preview, and every
 * AI-surfaced result card rendered without an image. Generating the card at
 * build time removes the possibility of the file drifting out of existence
 * again, and keeps the text in sync with the site's own copy.
 */

export const alt = `${PERSON.name} — Full Stack Developer and AIoT Researcher`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(135deg, #0b1120 0%, #1e293b 55%, #0f172a 100%)',
          color: '#f8fafc',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 26,
            letterSpacing: 4,
            textTransform: 'uppercase',
            color: '#38bdf8',
            marginBottom: 28,
          }}
        >
          Portfolio
        </div>

        <div style={{ display: 'flex', fontSize: 84, fontWeight: 700, lineHeight: 1.05 }}>
          {PERSON.name}
        </div>

        <div
          style={{
            display: 'flex',
            fontSize: 40,
            color: '#94a3b8',
            marginTop: 20,
            lineHeight: 1.3,
          }}
        >
          Full Stack Developer · AIoT Researcher
        </div>

        <div
          style={{
            display: 'flex',
            marginTop: 'auto',
            fontSize: 26,
            color: '#64748b',
          }}
        >
          {PROFILES.github.replace('https://', '')} · {PERSON.locality}, {PERSON.country}
        </div>
      </div>
    ),
    size,
  )
}
