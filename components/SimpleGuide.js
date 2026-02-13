// Simple guide component for apartment/hotel pages with intro/why_stay/neighborhoods/tips format
import { getDestinationImage } from '../lib/getDestinationImage'
import { getRelatedGuides } from '../lib/getGuides'

export default function SimpleGuide({ content, title, destination, slug }) {
  const { intro, why_stay = [], neighborhoods = [], tips = [], cta } = content
  const heroImage = destination ? getDestinationImage(destination) : null
  const relatedGuides = slug ? getRelatedGuides(slug) : []

  // Structured data for SEO
  const structuredData = title && destination ? {
    "@context": "https://schema.org",
    "@type": "TravelGuide",
    "name": title,
    "description": intro,
    "about": {
      "@type": "Place",
      "name": destination
    }
  } : null

  return (
    <>
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
      <article style={{ maxWidth: '800px', margin: '0 auto' }}>
      {/* Hero Image */}
      {heroImage && (
        <div style={{ 
          marginBottom: '2rem', 
          marginLeft: '-2rem', 
          marginRight: '-2rem',
          borderRadius: '8px',
          overflow: 'hidden'
        }}>
          <img 
            src={heroImage.url} 
            alt={heroImage.alt}
            style={{ 
              width: '100%', 
              height: '400px', 
              objectFit: 'cover',
              display: 'block'
            }}
          />
          <p style={{ 
            fontSize: '0.75rem', 
            color: '#999', 
            textAlign: 'right',
            marginTop: '0.5rem',
            marginRight: '1rem'
          }}>
            {heroImage.credit}
          </p>
        </div>
      )}

      {/* Hero Section */}
      {title && (
        <section style={{ marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#2563eb' }}>
            {title}
          </h1>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#666' }}>
            {intro}
          </p>
        </section>
      )}

      {!title && intro && (
        <section style={{ 
          marginBottom: '3rem',
          background: '#eff6ff',
          padding: '1.5rem',
          borderRadius: '8px',
          borderLeft: '4px solid #2563eb'
        }}>
          <p style={{ fontSize: '1.1rem', margin: 0, lineHeight: 1.8, color: '#1e40af' }}>
            {intro}
          </p>
        </section>
      )}

      {/* Why Stay */}
      {why_stay.length > 0 && (
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#333' }}>
            Why Choose This Option
          </h2>
          <ul style={{ lineHeight: 1.8, color: '#666', paddingLeft: '1.5rem' }}>
            {why_stay.map((reason, i) => (
              <li key={i} style={{ marginBottom: '1rem' }}>{reason}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Neighborhoods */}
      {neighborhoods.length > 0 && (
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#333' }}>
            Best Areas
          </h2>
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            {neighborhoods.map((area, i) => {
              const parts = area.split(': ')
              const name = parts[0]
              const desc = parts.slice(1).join(': ')
              
              return (
                <div key={i} style={{ 
                  padding: '1.5rem', 
                  background: '#f9fafb', 
                  borderRadius: '8px',
                  borderLeft: '4px solid #2563eb'
                }}>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#2563eb' }}>
                    {name}
                  </h3>
                  {desc && (
                    <p style={{ margin: 0, color: '#666', lineHeight: 1.7 }}>{desc}</p>
                  )}
                </div>
              )
            })}
          </div>
        </section>
      )}

      {/* Tips */}
      {tips.length > 0 && (
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#333' }}>
            Practical Tips
          </h2>
          <div style={{ 
            background: '#fffbeb', 
            padding: '1.5rem', 
            borderRadius: '8px',
            borderLeft: '4px solid #fbbf24'
          }}>
            <ul style={{ margin: 0, paddingLeft: '1.5rem', color: '#666', lineHeight: 1.8 }}>
              {tips.map((tip, i) => (
                <li key={i} style={{ marginBottom: '0.75rem' }}>{tip}</li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* CTA */}
      {cta && (
        <section style={{
          background: '#ecfdf5',
          padding: '2rem',
          borderRadius: '8px',
          borderLeft: '4px solid #10b981',
          textAlign: 'center',
          marginBottom: '3rem'
        }}>
          <p style={{ fontSize: '1.1rem', margin: 0, color: '#065f46', fontWeight: 500 }}>
            {cta}
          </p>
        </section>
      )}

      {/* Related Guides */}
      {relatedGuides.length > 0 && (
        <section style={{ 
          marginTop: '4rem',
          padding: '2rem',
          background: '#f9fafb',
          borderRadius: '8px'
        }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#333' }}>
            Related Guides
          </h2>
          <div style={{ display: 'grid', gap: '1rem' }}>
            {relatedGuides.map(guide => (
              <a 
                key={guide.slug}
                href={guide.url}
                style={{
                  display: 'block',
                  padding: '1rem',
                  background: 'white',
                  borderRadius: '6px',
                  border: '1px solid #e5e7eb',
                  textDecoration: 'none',
                  color: 'inherit',
                  transition: 'border-color 0.2s'
                }}
              >
                <h3 style={{ 
                  fontSize: '1.1rem', 
                  marginBottom: '0.25rem', 
                  color: '#2563eb' 
                }}>
                  {guide.title}
                </h3>
                <p style={{ 
                  margin: 0, 
                  fontSize: '0.9rem', 
                  color: '#666' 
                }}>
                  {guide.type} for {guide.audience} in {guide.destination}
                </p>
              </a>
            ))}
          </div>
        </section>
      )}
    </article>
    </>
  )
}
