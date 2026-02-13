import { getFeaturedDestinations, getAllGuides } from '../lib/getGuides'

export const dynamic = 'force-static'
export const revalidate = 3600 // Rebuild every hour

export default function HomePage() {
  const featured = getFeaturedDestinations()
  const totalGuides = getAllGuides().length
  
  return (
    <div>
      <section style={{ marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#2563eb' }}>
          Find Your Perfect Trip
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#666', lineHeight: 1.8 }}>
          Discover expertly curated travel guides for families, couples, and adventurers. 
          We have <strong>{totalGuides} guides</strong> covering the best hotels, apartments, and B&Bs across Europe.
        </p>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: '#333' }}>
          Popular Destinations
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem'
        }}>
          {featured.map(({ destination, count, guides }) => (
            <DestinationCard
              key={destination}
              title={destination}
              count={count}
              guides={guides}
            />
          ))}
        </div>
      </section>

      <section>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: '#333' }}>
          What We Offer
        </h2>
        <div style={{ display: 'grid', gap: '1.5rem' }}>
          <FeatureCard
            icon="🏨"
            title="Hand-Picked Hotels"
            description="Carefully selected accommodations perfect for your travel style and budget"
          />
          <FeatureCard
            icon="🍽️"
            title="Local Restaurants"
            description="Authentic dining experiences from budget-friendly to fine dining"
          />
          <FeatureCard
            icon="🎯"
            title="Must-See Attractions"
            description="The best activities and sights tailored to your interests"
          />
          <FeatureCard
            icon="💡"
            title="Expert Tips"
            description="Practical advice from locals and experienced travelers"
          />
        </div>
      </section>
    </div>
  )
}

function DestinationCard({ title, count, guides }) {
  const cardStyle = {
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    padding: '1.5rem',
    background: 'white',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s, box-shadow 0.2s',
    display: 'block',
  }

  return (
    <div style={cardStyle}>
      <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: '#2563eb' }}>
        {title}
      </h3>
      <p style={{ color: '#666', marginBottom: '1rem', fontSize: '0.9rem' }}>
        {count} travel guides available
      </p>
      <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
        {guides.map(guide => (
          <li key={guide.slug} style={{ marginBottom: '0.5rem' }}>
            <a 
              href={guide.url}
              style={{ 
                color: '#2563eb', 
                textDecoration: 'none',
                fontSize: '0.9rem',
                display: 'block'
              }}
            >
              → {guide.type} for {guide.audience}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div style={{
      display: 'flex',
      gap: '1rem',
      padding: '1.5rem',
      background: '#f9fafb',
      borderRadius: '8px'
    }}>
      <div style={{ fontSize: '2rem', flexShrink: 0 }}>
        {icon}
      </div>
      <div>
        <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#333' }}>
          {title}
        </h3>
        <p style={{ color: '#666', margin: 0 }}>
          {description}
        </p>
      </div>
    </div>
  )
}
