export const metadata = {
  title: 'Best Apartments for Adventure Seekers in London',
  description: 'London\'s apartments offer adventure seekers the perfect base to explore this dynamic city\'s endless thrills.'
}

export default function Page() {
  const content = {
  "intro": "London's apartments offer adventure seekers the perfect base to explore this dynamic city's endless thrills. From rock climbing walls to Thames kayaking, urban exploration to food market adventures, staying in a self-catered flat gives you freedom and flexibility. Wake up in vibrant neighborhoods where every street corner promises discovery.",
  "why_stay": [
    "Apartments provide kitchens for fueling early morning adventures and late-night returns from London's legendary nightlife scene.",
    "Self-catering accommodation saves money for experiences like indoor skydiving, zip-lining at O2 Arena, or spontaneous West End shows.",
    "Washing machines mean packing light for multi-day adventures hiking the Thames Path or cycling through Richmond Park's wilderness."
  ],
  "neighborhoods": [
    "Shoreditch: Street art paradise with climbing gyms, rooftop bars, and direct access to Olympic Park's adventure activities.",
    "Camden: Edgy markets, canal-side walks, and proximity to Regent's Park for morning runs and outdoor yoga sessions.",
    "Canary Wharf: Modern apartments near cable car rides, watersports centers, and excellent transport links to adventure destinations."
  ],
  "tips": [
    "Book apartments near Tube stations for quick access to day trips like Brighton beaches or Chiltern Hills hiking trails.",
    "Choose neighborhoods with 24-hour grocery stores and bike rental schemes for maximum spontaneity and adventure flexibility."
  ],
  "cta": "Book your London adventure apartment today and transform the city into your ultimate urban playground."
}

  return (
    <article style={{ maxWidth: '800px', margin: '0 auto' }}>
      {/* Hero Section */}
      <section style={{ marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#2563eb' }}>
          Best Apartments for Adventure Seekers in London
        </h1>
        <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#666' }}>
          {content.intro}
        </p>
      </section>

      {/* Why Stay */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#333' }}>Why Choose Apartments</h2>
        <ul style={{ lineHeight: 1.8, color: '#666' }}>
          {content.why_stay.map((reason, i) => (
            <li key={i} style={{ marginBottom: '1rem' }}>{reason}</li>
          ))}
        </ul>
      </section>

      {/* Neighborhoods */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#333' }}>Best Neighborhoods</h2>
        <div style={{ display: 'grid', gap: '1.5rem' }}>
          {content.neighborhoods.map((area, i) => {
            const [name, desc] = area.split(': ')
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
                <p style={{ margin: 0, color: '#666', lineHeight: 1.7 }}>{desc}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Tips */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#333' }}>Booking Tips</h2>
        <div style={{ 
          background: '#fffbeb', 
          padding: '1.5rem', 
          borderRadius: '8px',
          borderLeft: '4px solid #fbbf24'
        }}>
          <ul style={{ margin: 0, paddingLeft: '1.5rem', color: '#666', lineHeight: 1.8 }}>
            {content.tips.map((tip, i) => (
              <li key={i} style={{ marginBottom: '0.75rem' }}>{tip}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        background: '#ecfdf5',
        padding: '2rem',
        borderRadius: '8px',
        borderLeft: '4px solid #10b981',
        textAlign: 'center'
      }}>
        <p style={{ fontSize: '1.1rem', margin: 0, color: '#065f46', fontWeight: 500 }}>
          {content.cta}
        </p>
      </section>
    </article>
  )
}
