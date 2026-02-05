export default function TravelGuidePage({ content }) {
  const {
    quickSummary,
    atAGlance,
    overview,
    topPlaces,
    practicalTips,
    faq,
    finalVerdict
  } = content

  return (
    <article>
      {/* Quick Summary */}
      <section style={{ 
        background: '#eff6ff', 
        padding: '1.5rem', 
        borderRadius: '8px',
        marginBottom: '2rem',
        borderLeft: '4px solid #2563eb'
      }}>
        <p style={{ 
          fontSize: '1.1rem', 
          margin: 0, 
          lineHeight: 1.8,
          color: '#1e40af'
        }}>
          {quickSummary}
        </p>
      </section>

      {/* At a Glance */}
      {atAGlance && (
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#333' }}>
            At a Glance
          </h2>
          <div style={{ 
            background: '#f9fafb', 
            padding: '1.5rem', 
            borderRadius: '8px' 
          }}>
            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#2563eb' }}>
                Best For
              </h3>
              <p style={{ margin: 0, color: '#666' }}>{atAGlance.bestFor}</p>
            </div>
            
            {atAGlance.keyHighlights && atAGlance.keyHighlights.length > 0 && (
              <div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#2563eb' }}>
                  Key Highlights
                </h3>
                <ul style={{ margin: 0, paddingLeft: '1.5rem', color: '#666' }}>
                  {atAGlance.keyHighlights.map((highlight, i) => (
                    <li key={i} style={{ marginBottom: '0.5rem' }}>{highlight}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Overview */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#333' }}>
          Overview
        </h2>
        <div 
          style={{ color: '#666', lineHeight: 1.8 }}
          dangerouslySetInnerHTML={{ __html: overview }}
        />
      </section>

      {/* Top Places */}
      {topPlaces && topPlaces.length > 0 && (
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: '#333' }}>
            Our Top Picks
          </h2>
          <div style={{ display: 'grid', gap: '2rem' }}>
            {topPlaces.map((place, i) => (
              <PlaceCard key={i} place={place} rank={i + 1} />
            ))}
          </div>
        </section>
      )}

      {/* Practical Tips */}
      {practicalTips && (
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#333' }}>
            Practical Tips
          </h2>
          <div 
            style={{ 
              color: '#666', 
              lineHeight: 1.8,
              background: '#fffbeb',
              padding: '1.5rem',
              borderRadius: '8px',
              borderLeft: '4px solid #fbbf24'
            }}
            dangerouslySetInnerHTML={{ __html: practicalTips }}
          />
        </section>
      )}

      {/* FAQ */}
      {faq && faq.length > 0 && (
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: '#333' }}>
            Frequently Asked Questions
          </h2>
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            {faq.map((item, i) => (
              <div 
                key={i}
                style={{
                  padding: '1.5rem',
                  background: '#f9fafb',
                  borderRadius: '8px'
                }}
              >
                <h3 style={{ 
                  fontSize: '1.1rem', 
                  marginBottom: '0.75rem', 
                  color: '#2563eb' 
                }}>
                  {item.question}
                </h3>
                <p style={{ margin: 0, color: '#666', lineHeight: 1.7 }}>
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Final Verdict */}
      {finalVerdict && (
        <section>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#333' }}>
            Final Verdict
          </h2>
          <div 
            style={{ 
              color: '#666', 
              lineHeight: 1.8,
              background: '#ecfdf5',
              padding: '1.5rem',
              borderRadius: '8px',
              borderLeft: '4px solid #10b981'
            }}
            dangerouslySetInnerHTML={{ __html: finalVerdict }}
          />
        </section>
      )}
    </article>
  )
}

function PlaceCard({ place, rank }) {
  return (
    <div style={{
      border: '1px solid #e5e7eb',
      borderRadius: '8px',
      padding: '1.5rem',
      background: 'white',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
    }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
        <div style={{
          background: '#2563eb',
          color: 'white',
          width: '36px',
          height: '36px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
          flexShrink: 0
        }}>
          {rank}
        </div>
        <div style={{ flex: 1 }}>
          <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: '#333' }}>
            {place.name}
          </h3>
          {place.priceRange && (
            <div style={{ 
              marginBottom: '0.75rem', 
              color: '#10b981',
              fontWeight: 'bold'
            }}>
              {place.priceRange}
            </div>
          )}
          <p style={{ color: '#666', marginBottom: '0.75rem', lineHeight: 1.7 }}>
            {place.description}
          </p>
          {place.whyGreat && (
            <div style={{
              background: '#eff6ff',
              padding: '1rem',
              borderRadius: '6px',
              marginTop: '1rem'
            }}>
              <p style={{ 
                margin: 0, 
                fontSize: '0.95rem', 
                color: '#1e40af',
                lineHeight: 1.6
              }}>
                <strong>Why families love it:</strong> {place.whyGreat}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
