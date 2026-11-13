import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Raymond Valdepeñas — Software Developer',
    short_name: 'RMV Portfolio',
    description: 'Raymond Valdepeñas builds and ships software: a password manager, a browser, study tools and a live rental platform.',
    start_url: '/',
    display: 'standalone',
    background_color: '#14110f',
    theme_color: '#ff7a1a',
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