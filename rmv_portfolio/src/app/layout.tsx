import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Footer } from "@/components/footer";
import { SiteOnly } from "@/components/site-only";
import { SkipLink } from "@/components/skip-link";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { GoogleAnalytics } from '@next/third-parties/google';
import { identityGraph, professionalServiceStructuredData } from "@/lib/structured-data";
import { PERSON, SITE, SITE_URL } from "@/lib/site";

// Three voices: a characterful grotesque for headlines, a quiet sans for
// reading, and a mono for the blueprint annotations.
const display = Bricolage_Grotesque({
  variable: "--font-display-face",
  subsets: ["latin"],
  display: "swap",
})

const body = Geist({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
})

const mono = JetBrains_Mono({
  variable: "--font-mono-face",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    // Includes the researcher role, because "who is this person" is the query
    // being answered when someone searches the name.
    default: SITE.title,
    template: `%s | ${PERSON.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: PERSON.name, url: SITE_URL }],
  creator: PERSON.name,
  publisher: PERSON.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "profile",
    firstName: PERSON.givenName,
    lastName: PERSON.familyName,
    locale: SITE.locale,
    url: SITE_URL,
    title: SITE.title,
    description: SITE.description,
    siteName: SITE.name,
    // Images come from the app/opengraph-image.tsx file convention, so the
    // reference cannot go stale the way the hand-written /og-image.png did.
  },
  twitter: {
    card: "summary_large_image",
    // No title or description here on purpose: left unset, Next fills them
    // from each page's own openGraph, so /tools and /research share on X with
    // their own text instead of the home page's.
    creator: "@mond_valdepenas",
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f4eee5' },
    { media: '(prefers-color-scheme: dark)', color: '#14110f' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="referrer" content="strict-origin-when-cross-origin" />

        {/*
          Site-wide identity as one connected @graph — person, site, and
          publication, linked by @id. This replaces three standalone blocks that
          each declared their own unlinked copy of the Person, which read as
          several vaguely-described entities rather than one well-described one.
          Page-level nodes are emitted by the pages themselves.
        */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(identityGraph),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(professionalServiceStructuredData),
          }}
        />
      </head>
      <body
        className={`${display.variable} ${body.variable} ${mono.variable} font-sans antialiased`}
      >
        {/*
          Analytics, the skip link and the site footer are public-site chrome.
          They are left off the admin area and private résumé links, whose URLs
          carry access tokens that must not be reported to a tracker.
          Google Analytics renders only when an ID is configured; with an empty
          ID it would still preload and run the tag script for nothing.
        */}
        <SiteOnly>
          <SkipLink />
          {process.env.NEXT_PUBLIC_GA_ID && <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />}
        </SiteOnly>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <SiteOnly>
            <Analytics />
            <SpeedInsights />
            <Footer />
          </SiteOnly>
        </ThemeProvider>
      </body>
    </html>
  );
}
