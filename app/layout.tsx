import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const siteUrl = 'https://nuphy-design-system.vercel.app'
const siteName = 'NuPhy IO Design System'
const title = 'NuPhy IO — Apple / macOS Settings Design System'
const description =
  'Open-source React + Tailwind CSS v4 design system for Apple/macOS-inspired settings UIs. Light & dark tokens, SettingRow, IosToggle, Slider, and more via @extrastu/nuphy-ui.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: '%s · NuPhy IO',
  },
  description,
  applicationName: siteName,
  authors: [{ name: 'extrastu', url: 'https://x.com/iextrastu' }],
  creator: 'extrastu',
  publisher: 'extrastu',
  keywords: [
    'NuPhy',
    'NuPhy IO',
    'design system',
    'React components',
    'Tailwind CSS',
    'Tailwind v4',
    'macOS settings UI',
    'Apple HIG',
    'settings UI',
    'IosToggle',
    'SettingRow',
    'dark mode',
    'UI kit',
    'nuphy-ui',
    '@extrastu/nuphy-ui',
    'open source',
  ],
  category: 'technology',
  referrer: 'origin-when-cross-origin',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName,
    title,
    description,
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'NuPhy IO design system — colors, typography, and settings controls',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@iextrastu',
    creator: '@iextrastu',
    title,
    description,
    images: ['/og.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      {
        url: '/icon-light-32x32.png',
        sizes: '32x32',
        type: 'image/png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        sizes: '32x32',
        type: 'image/png',
        media: '(prefers-color-scheme: dark)',
      },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
    shortcut: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#EBEBEB' },
    { media: '(prefers-color-scheme: dark)', color: '#1C1C1E' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: siteName,
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Web',
    url: siteUrl,
    description,
    author: {
      '@type': 'Person',
      name: 'extrastu',
      url: 'https://x.com/iextrastu',
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    softwareVersion: '0.3.0',
    codeRepository: 'https://github.com/extrastu/nuphy-design-system',
  }

  return (
    <html
      lang="en"
      className="bg-background"
      style={
        {
          // System font stack mirroring the NuPhy IO UI (-apple-system first)
          '--font-app-sans':
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Helvetica Neue", "Fira Sans", "Droid Sans", sans-serif',
        } as React.CSSProperties
      }
    >
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
