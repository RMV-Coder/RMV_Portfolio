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

export const alt = `${PERSON.name} — I build things that ship`
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
          background: '#14110f',
          color: '#f3ede4',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 26,
            letterSpacing: 4,
            textTransform: 'uppercase',
            color: '#7fd6e8',
            marginBottom: 28,
          }}
        >
          {PERSON.name}
        </div>

        <div style={{ display: 'flex', fontSize: 104, fontWeight: 800, lineHeight: 1 }}>
          I build things that <span style={{ color: '#ff7a1a', marginLeft: 26 }}>ship.</span>
        </div>

        <div
          style={{
            display: 'flex',
            fontSize: 40,
            color: '#a89f92',
            marginTop: 28,
            lineHeight: 1.3,
          }}
        >
          Software developer · password managers, browsers, study tools
        </div>

        <div
          style={{
            display: 'flex',
            marginTop: 'auto',
            fontSize: 26,
            color: '#e8b86d',
          }}
        >
          {PROFILES.github.replace('https://', '')} · {PERSON.locality}, {PERSON.country}
        </div>
      </div>
    ),
    size,
  )
}
