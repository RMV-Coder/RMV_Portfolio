import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Raymond Valdepeñas - Full Stack Developer',
    short_name: 'RMV Portfolio',
    description: 'Portfolio website of Raymond Valdepeñas, a passionate Full Stack Developer from the Philippines.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#0070f3',
    orientation: 'portrait-primary',
    categories: ['portfolio', 'developer', 'technology'],
    icons: [
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    lang: 'en',
    dir: 'ltr',
  }
}