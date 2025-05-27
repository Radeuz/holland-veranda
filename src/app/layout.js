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
        url: '/Tab_Logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Holland Veranda Logo',
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
        <meta name="google-site-verification" content="YOUR_ACTUAL_GOOGLE_VERIFICATION_CODE_HERE" />
        <meta property="og:image" content="https://hollandveranda.com/Tab_Logo.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Holland Veranda Logo" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://hollandveranda.com/Tab_Logo.jpg" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/jpeg" sizes="192x192" href="/Tab_Logo.jpg" />
        <link rel="icon" type="image/jpeg" sizes="96x96" href="/Tab_Logo.jpg" />
        <link rel="icon" type="image/jpeg" sizes="64x64" href="/Tab_Logo.jpg" />
        <link rel="icon" type="image/jpeg" sizes="48x48" href="/Tab_Logo.jpg" />
        <link rel="icon" type="image/jpeg" sizes="32x32" href="/Tab_Logo.jpg" />
        <link rel="icon" type="image/jpeg" sizes="16x16" href="/Tab_Logo.jpg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/Tab_Logo.jpg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="manifest" href="/favicon_io/site.webmanifest" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-S36QBC7C7R"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-S36QBC7C7R');
          `,
        }} />
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