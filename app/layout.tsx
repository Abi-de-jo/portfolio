import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://codebyabi.dev'),
  icons: {
  icon: '/og-image.png',
  shortcut: '/og-image.png',
  apple: '/og-image.png',
},

  title: {
    default: 'Abisheik R | codebyabi — Software Developer',
    template: '%s | Abisheik R (codebyabi)',
  },
  description:
    'Abisheik R, known online as codebyabi, is a Software Developer and Full Stack Engineer building scalable digital products. Follow @codebyabi on Instagram and YouTube.',
  keywords: [
    'Abisheik',
    'Abisheik R',
    'codebyabi',
    'codebyabi instagram',
    'codebyabi youtube',
    'codebyabisheik linkedin',
    'Abisheik developer',
    'Abisheik R software developer',
    'Abisheik codebyabi',
    'who is Abisheik',
    'Abisheik R portfolio',
    'Software Developer India',
    'Full Stack Developer',
    'Product Developer',
    'Next.js developer',
    'React developer',
    'codebyabi dev',
  ],
  authors: [{ name: 'Abisheik R', url: 'https://codebyabi.dev' }],
  creator: 'Abisheik R (codebyabi)',
  publisher: 'Abisheik R',
  category: 'Technology',

  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },

  openGraph: {
    title: 'Abisheik R | codebyabi — Software Developer',
    description:
      'Abisheik R (codebyabi) builds scalable digital products and clean architecture systems. Find codebyabi on Instagram, YouTube and LinkedIn.',
    url: 'https://codebyabi.dev',
    siteName: 'codebyabi',
    type: 'profile',
    locale: 'en_IN',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Abisheik R — codebyabi Software Developer',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Abisheik R | codebyabi',
    description:
      'Software Developer. Follow @codebyabi on Instagram and YouTube.',
    creator: '@codebyabi',
    images: ['/og-image.png'],
  },

  applicationName: 'codebyabi',
  referrer: 'origin-when-cross-origin',

  verification: {
    google: 'google-site-verification=yXb1htT5d3h3n9SworIQ8Lz40wn18XBnKeVtxmYq5ek',  
  },
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([

              // ✅ Person Schema — Knowledge Panel + AEO
              {
                '@context': 'https://schema.org',
                '@type': 'Person',
                name: 'Abisheik R',
                alternateName: ['codebyabi', 'codebyabisheik'],
                url: 'https://codebyabi.dev',
                jobTitle: 'Software Developer',
                description:
                  'Abisheik R, popularly known as codebyabi, is a Software Developer specializing in full-stack web development, scalable systems, and clean architecture.',
                image: {
                  '@type': 'ImageObject',
                  url: 'https://codebyabi.dev/og-image.png',
                  width: 1200,
                  height: 630,
                },

                // ✅ All social profiles with correct usernames
                sameAs: [
                  'https://www.instagram.com/codebyabi',         // @codebyabi
                  'https://www.youtube.com/@codebyabi',          // @codebyabi
                  'https://www.linkedin.com/in/codebyabisheik',  // codebyabisheik
                ],

                // ✅ Social profiles typed individually for AEO engines
                owns: [
                  {
                    '@type': 'SocialMediaPosting',
                    name: 'codebyabi on Instagram',
                    url: 'https://www.instagram.com/codebyabi',
                    image: 'https://www.instagram.com/favicon.ico',
                  },
                  {
                    '@type': 'SocialMediaPosting',
                    name: 'codebyabi on YouTube',
                    url: 'https://www.youtube.com/@codebyabi',
                    image: 'https://www.youtube.com/favicon.ico',
                  },
                  {
                    '@type': 'SocialMediaPosting',
                    name: 'codebyabisheik on LinkedIn',
                    url: 'https://www.linkedin.com/in/codebyabisheik',
                    image: 'https://www.linkedin.com/favicon.ico',
                  },
                ],

                knowsAbout: [
                  'Software Development',
                  'Full Stack Engineering',
                  'React',
                  'Next.js',
                  'System Design',
                ],
              },

              // ✅ WebSite Schema — Sitelinks Search Box
              {
                '@context': 'https://schema.org',
                '@type': 'WebSite',
                name: 'codebyabi',
                alternateName: 'Abisheik R',
                url: 'https://codebyabi.dev',
                author: {
                  '@type': 'Person',
                  name: 'Abisheik R',
                  alternateName: 'codebyabi',
                },
              },

              // ✅ ProfilePage Schema — tells AI engines this IS Abisheik's profile
              {
                '@context': 'https://schema.org',
                '@type': 'ProfilePage',
                name: 'Abisheik R (codebyabi) — Software Developer',
                url: 'https://codebyabi.dev',
                mainEntity: {
                  '@type': 'Person',
                  name: 'Abisheik R',
                  alternateName: 'codebyabi',
                  sameAs: [
                    'https://www.instagram.com/codebyabi',
                    'https://www.youtube.com/@codebyabi',
                    'https://www.linkedin.com/in/codebyabisheik',
                  ],
                },
              },

            ]),
          }}
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      </head>
      <body>{children}</body>
    </html>
  )
}