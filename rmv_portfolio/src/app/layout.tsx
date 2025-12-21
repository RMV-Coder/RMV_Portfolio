import type { Metadata, Viewport } from "next";
import { //Geist, Geist_Mono, 
  Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Footer } from "@/components/footer";
import { RatingTrigger } from "@/components/rating-trigger";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { GoogleAnalytics } from '@next/third-parties/google';
import { structuredData, websiteStructuredData, professionalServiceStructuredData } from "@/lib/structured-data";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ['400', '700']
})

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  metadataBase: new URL('https://raymondvaldepenas-dev.vercel.app'),
  title: {
    default: "Raymond Valdepeñas - Full Stack Developer",
    template: "%s | Raymond Valdepeñas"
  },
  description: "Passionate Full Stack Developer from Tangub City, Philippines. Specializing in React, Next.js, Node.js, and modern web technologies. Let's build something amazing together!",
  keywords: [
    "Raymond Valdepeñas",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "JavaScript",
    "TypeScript",
    "Web Developer",
    "Philippines",
    "Tangub City",
    "Frontend Developer",
    "Backend Developer",
    "Software Engineer"
  ],
  authors: [{ name: "Raymond Valdepeñas" }],
  creator: "Raymond Valdepeñas",
  publisher: "Raymond Valdepeñas",
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
    type: "website",
    locale: "en_US",
    url: "https://raymondvaldepenas-dev.vercel.app",
    title: "Raymond Valdepeñas - Full Stack Developer",
    description: "Passionate Full Stack Developer from Tangub City, Philippines. Specializing in React, Next.js, Node.js, and modern web technologies.",
    siteName: "Raymond Valdepeñas Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Raymond Valdepeñas - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Raymond Valdepeñas - Full Stack Developer",
    description: "Passionate Full Stack Developer from Tangub City, Philippines. Specializing in React, Next.js, Node.js, and modern web technologies.",
    images: ["/og-image.png"],
    creator: "@mond_valdepenas",
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://raymondvaldepenas-dev.vercel.app",
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#1e293b' },
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
        {/* Security headers for screenshot protection */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' fonts.googleapis.com; font-src 'self' fonts.gstatic.com fonts.googleapis.com; img-src 'self' data: blob: https://www.googletagmanager.com https://avatars.githubusercontent.com https://raw.githubusercontent.com; connect-src 'self' https://api.github.com https://github.com https://www.google-analytics.com https://analytics.google.com https://www.googletagmanager.com; frame-src 'none'; object-src 'none';" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        
        {/* Prevent right-click and screenshot attempts */}
        <style dangerouslySetInnerHTML={{
          __html: `
            * {
              -webkit-user-select: none !important;
              -moz-user-select: none !important;
              -ms-user-select: none !important;
              user-select: none !important;
              -webkit-touch-callout: none !important;
              -webkit-user-drag: none !important;
              -khtml-user-drag: none !important;
              -moz-user-drag: none !important;
              -o-user-drag: none !important;
              user-drag: none !important;
            }
            
            /* Allow text selection for specific content areas */
            .selectable-text {
              -webkit-user-select: text !important;
              -moz-user-select: text !important;
              -ms-user-select: text !important;
              user-select: text !important;
            }
            
            /* Prevent screenshot overlay */
            body::before {
              content: '';
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: transparent;
              z-index: 999999;
              pointer-events: none;
              -webkit-user-select: none;
              -moz-user-select: none;
              -ms-user-select: none;
              user-select: none;
            }
            
            /* Hide from print */
            @media print {
              body { display: none !important; }
            }
            
            /* Prevent dev tools detection */
            body {
              -webkit-user-select: none;
              -moz-user-select: none;
              -ms-user-select: none;
              user-select: none;
            }
          `
        }} />
        
        {/* Anti-screenshot script */}
        <script dangerouslySetInnerHTML={{
          __html: `
            // Disable right-click context menu
            document.addEventListener('contextmenu', function(e) {
              e.preventDefault();
              return false;
            });
            
            // Disable keyboard shortcuts
            document.addEventListener('keydown', function(e) {
              // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, Ctrl+S, Print Screen
              if (e.keyCode === 123 || 
                  (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) ||
                  (e.ctrlKey && e.keyCode === 85) ||
                  (e.ctrlKey && e.keyCode === 83) ||
                  e.keyCode === 44) {
                e.preventDefault();
                return false;
              }
            });
            
            // Disable text selection
            document.addEventListener('selectstart', function(e) {
              if (!e.target.closest('.selectable-text')) {
                e.preventDefault();
                return false;
              }
            });
            
            // Disable drag events
            document.addEventListener('dragstart', function(e) {
              e.preventDefault();
              return false;
            });
            
            // Console warning
            console.warn('🚫 Screenshots and content downloading are disabled for security reasons.');
            console.warn('⚠️ This portfolio is protected by security measures.');
          `
        }} />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteStructuredData),
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
        className={`${montserrat.variable} antialiased`}
      >
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ''} />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
          <SpeedInsights />
          <RatingTrigger />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
