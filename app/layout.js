export const metadata = {
  metadataBase: new URL('https://besttrips.org'),
  title: {
    default: 'BestTrips.org - Travel Guides & Destination Recommendations',
    template: '%s | BestTrips.org'
  },
  description: 'Discover the best hotels, apartments, and B&Bs for your next trip. Expert travel guides for families, couples, and adventurers across Europe.',
  keywords: ['travel guides', 'hotel recommendations', 'apartments', 'Europe travel', 'family hotels', 'budget accommodation'],
  authors: [{ name: 'BestTrips.org' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://besttrips.org',
    siteName: 'BestTrips.org',
    title: 'BestTrips.org - Travel Guides & Destination Recommendations',
    description: 'Discover the best hotels, apartments, and B&Bs for your next trip. Expert travel guides for families, couples, and adventurers across Europe.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'BestTrips.org - Your trusted travel guide'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BestTrips.org - Travel Guides & Destination Recommendations',
    description: 'Discover the best hotels, apartments, and B&Bs for your next trip.',
    images: ['/og-image.png']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  verification: {
    // google: 'your-google-site-verification-code',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://besttrips.org" />
      </head>
      <body style={{
        fontFamily: 'system-ui, -apple-system, sans-serif',
        margin: 0,
        padding: 0,
        lineHeight: 1.6,
        color: '#333'
      }}>
        <header style={{
          background: '#2563eb',
          color: 'white',
          padding: '1.5rem 2rem',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h1 style={{ margin: 0, fontSize: '1.5rem' }}>
            <a href="/" style={{ color: 'white', textDecoration: 'none' }}>
              ✈️ BestTrips.org
            </a>
          </h1>
          <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.9rem', opacity: 0.9 }}>
            Your trusted travel guide
          </p>
        </header>

        <main style={{
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '2rem'
        }}>
          {children}
        </main>

        <footer style={{
          background: '#f5f5f5',
          padding: '2rem',
          marginTop: '4rem',
          textAlign: 'center',
          fontSize: '0.9rem',
          color: '#666'
        }}>
          <p>© 2026 BestTrips.org - Travel guides and destination recommendations</p>
          <p style={{ marginTop: '1rem', fontSize: '0.85rem' }}>
            <a href="/privacy" style={{ color: '#2563eb', marginRight: '1rem' }}>Privacy Policy</a>
            <a href="/terms" style={{ color: '#2563eb', marginRight: '1rem' }}>Terms of Service</a>
            <a href="/contact" style={{ color: '#2563eb' }}>Contact</a>
          </p>
        </footer>
      </body>
    </html>
  )
}
