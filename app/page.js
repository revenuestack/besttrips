export default function HomePage() {
  return (
    <div>
      <section style={{ marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#2563eb' }}>
          Find Your Perfect Trip
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#666', lineHeight: 1.8 }}>
          Discover expertly curated travel guides for families, couples, and adventurers. 
          We help you find the best hotels, restaurants, and attractions for unforgettable experiences.
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
          <DestinationCard
            title="Lyon, France"
            description="Gastronomic capital perfect for family adventures"
            link="/best-hotels-families-lyon"
          />
          <DestinationCard
            title="Barcelona, Spain"
            description="Family-friendly beaches and culture"
            link="#"
            comingSoon
          />
          <DestinationCard
            title="Paris, France"
            description="Romantic escapes and world-class dining"
            link="#"
            comingSoon
          />
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

function DestinationCard({ title, description, link, comingSoon }) {
  const cardStyle = {
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    padding: '1.5rem',
    background: 'white',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s, box-shadow 0.2s',
    textDecoration: 'none',
    color: 'inherit',
    display: 'block',
    position: 'relative'
  }

  const content = (
    <>
      <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: '#2563eb' }}>
        {title}
      </h3>
      <p style={{ color: '#666', margin: 0 }}>
        {description}
      </p>
      {comingSoon && (
        <span style={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          background: '#fbbf24',
          color: '#78350f',
          padding: '0.25rem 0.75rem',
          borderRadius: '4px',
          fontSize: '0.75rem',
          fontWeight: 'bold'
        }}>
          Coming Soon
        </span>
      )}
    </>
  )

  if (comingSoon) {
    return <div style={cardStyle}>{content}</div>
  }

  return <a href={link} style={cardStyle}>{content}</a>
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
