// Hotel/Apartment recommendation card with booking link
export default function RecommendationCard({ recommendation, rank }) {
  const { 
    name, 
    location, 
    priceRange, 
    features = [], 
    whyGreat,
    bookingUrl,
    rating,
    reviewCount 
  } = recommendation

  return (
    <div style={{
      border: '1px solid #e5e7eb',
      borderRadius: '8px',
      padding: '1.5rem',
      background: 'white',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      marginBottom: '1.5rem'
    }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
        {/* Rank Badge */}
        <div style={{
          background: '#2563eb',
          color: 'white',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
          fontSize: '1.2rem',
          flexShrink: 0
        }}>
          {rank}
        </div>

        <div style={{ flex: 1 }}>
          {/* Name + Location */}
          <h3 style={{ fontSize: '1.3rem', marginBottom: '0.25rem', color: '#333' }}>
            {name}
          </h3>
          <p style={{ 
            margin: '0 0 0.75rem 0', 
            fontSize: '0.9rem', 
            color: '#666' 
          }}>
            📍 {location}
          </p>

          {/* Rating */}
          {rating && (
            <div style={{ marginBottom: '0.75rem' }}>
              <span style={{ 
                background: '#10b981', 
                color: 'white',
                padding: '0.25rem 0.5rem',
                borderRadius: '4px',
                fontSize: '0.9rem',
                fontWeight: 'bold',
                marginRight: '0.5rem'
              }}>
                ⭐ {rating}/10
              </span>
              {reviewCount && (
                <span style={{ fontSize: '0.85rem', color: '#666' }}>
                  ({reviewCount.toLocaleString()} reviews)
                </span>
              )}
            </div>
          )}

          {/* Price Range */}
          <div style={{ 
            marginBottom: '1rem',
            fontSize: '1.1rem',
            color: '#2563eb',
            fontWeight: 'bold'
          }}>
            {priceRange}
          </div>

          {/* Features */}
          {features.length > 0 && (
            <ul style={{ 
              margin: '0 0 1rem 0', 
              paddingLeft: '1.25rem', 
              color: '#666',
              fontSize: '0.95rem',
              lineHeight: 1.6
            }}>
              {features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          )}

          {/* Why Great */}
          {whyGreat && (
            <div style={{
              background: '#eff6ff',
              padding: '1rem',
              borderRadius: '6px',
              marginBottom: '1rem'
            }}>
              <p style={{ 
                margin: 0, 
                fontSize: '0.95rem', 
                color: '#1e40af',
                lineHeight: 1.6
              }}>
                <strong>Why we recommend it:</strong> {whyGreat}
              </p>
            </div>
          )}

          {/* Booking Button */}
          {bookingUrl && (
            <a 
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer sponsored"
              style={{
                display: 'inline-block',
                background: '#10b981',
                color: 'white',
                padding: '0.75rem 1.5rem',
                borderRadius: '6px',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '0.95rem',
                transition: 'background 0.2s'
              }}
            >
              Check Availability →
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
