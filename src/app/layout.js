import './globals.css'
import { Montserrat } from 'next/font/google'
import { LanguageProvider } from './i18n'
import SchemaOrg from './components/SchemaOrg'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://hollandveranda.com'),
  title: "Holland Veranda",
  description: 'Ontdek ons assortiment hoogwaardige veranda\'s en overkappingen, perfect voor uw buitenruimte. Specialist in moderne en klassieke veranda\'s.',
  keywords: 'veranda, overkapping, tuin, buitenruimte, holland veranda, moderne veranda, klassieke veranda, carports, frames',
  openGraph: {
    title: "Holland Veranda",
    description: 'Ontdek ons assortiment hoogwaardige veranda\'s en overkappingen, perfect voor uw buitenruimte.',
    url: 'https://hollandveranda.com',
    siteName: 'Holland Veranda',
    images: [
      {
        url: '/Veranda4.jpg',
        width: 1200,
        height: 630,
        alt: 'Holland Veranda - Moderne veranda met glazen wanden',
      },
    ],
    locale: 'nl_NL',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <head>
        <meta property="og:image" content="https://hollandveranda.com/Veranda4.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Holland Veranda - Moderne veranda met glazen wanden" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://hollandveranda.com/Veranda4.jpg" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon_io/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="manifest" href="/favicon_io/site.webmanifest" />
      </head>
      <body className={montserrat.className}>
        <LanguageProvider>
          <SchemaOrg />
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}