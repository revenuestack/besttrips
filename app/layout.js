export const metadata = {
  title: 'BestTrips.org - Travel Guides & Destination Recommendations',
  description: 'Discover the best hotels, restaurants, and attractions for your next trip. Expert travel guides for families, couples, and adventurers.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
        <main style={{ maxWidth: '1000px', margin: '0 auto', padding: '2rem' }}>
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
        </footer>
      </body>
    </html>
  )
}
