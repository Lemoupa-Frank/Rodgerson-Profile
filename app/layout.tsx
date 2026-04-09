import type { Metadata } from 'next'
import { Newsreader, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const newsreader = Newsreader({ 
  subsets: ["latin"],
  variable: '--font-serif',
  display: 'swap',
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Penandjo Lemoupa Rodgerson | EV4GH 2026 Portfolio',
  description: 'Physician & Health Systems Leader | Emerging Voices for Global Health 2026 Application Portfolio - Track 2 Health Systems Professional',
  generator: 'v0.app',
  keywords: ['EV4GH', 'Global Health', 'Health Systems', 'Cameroon', 'Public Health', 'HSR 2026'],
  authors: [{ name: 'Penandjo Lemoupa Rodgerson' }],
  openGraph: {
    title: 'Penandjo Lemoupa Rodgerson | EV4GH 2026 Portfolio',
    description: 'Physician & Health Systems Leader | Reimagining Health Services in Cameroon through Plurality and Partnerships',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable} scroll-smooth`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
