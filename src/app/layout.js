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
  title: "Holland Veranda",
  description: 'Ontdek ons assortiment hoogwaardige veranda\'s en overkappingen, perfect voor uw buitenruimte. Specialist in moderne en klassieke veranda\'s.',
  keywords: 'veranda, overkapping, tuin, buitenruimte, holland veranda, moderne veranda, klassieke veranda, carports, frames',
  openGraph: {
    title: "Holland Veranda",
    description: 'Ontdek ons assortiment hoogwaardige veranda\'s en overkappingen, perfect voor uw buitenruimte.',
    url: 'https://hollandveranda.nl',
    siteName: 'Holland Veranda',
    images: [
      {
        url: '/banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Holland Veranda Showroom',
      },
    ],
    locale: 'nl_NL',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <head>
        <link rel="icon" href="/hollandveranda-logo.png" type="image/png" />
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