// AccommodationGuide component with Schema.org markup for SEO
// Handles both old and new content formats

import { getDestinationImage } from '@/lib/destination-images';

export default function AccommodationGuide({ 
  // New format (guide + content objects)
  guide = null,
  content = null,
  // Legacy format (flat props)
  destination = '',
  country = '', 
  type = '',
  audience = '',
  hook = '',
  whyStay = [],
  considerations = [],
  neighborhoodTips = '',
  bookingAdvice = '',
  recommendations = [],
  // Image override (optional)
  heroImage = null
}) {
  // Use new format if available, otherwise use legacy
  const dest = guide?.destination || destination;
  const ctry = guide?.country || country;
  const accType = guide?.accommodationType || type;
  const aud = guide?.audience || audience;
  
  const intro = content?.intro || hook;
  const whyChoose = content?.whyChoose || whyStay;
  const topPicks = content?.topPicks || recommendations;
  const tips = content?.tips || neighborhoodTips;
  const conclusion = content?.conclusion || bookingAdvice;
  
  // Get hero image for destination
  const bgImage = heroImage || getDestinationImage(dest);

  // Schema.org TravelAction markup for SEO
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "TravelAction",
    "name": `Best ${accType} for ${aud} in ${dest}`,
    "description": intro,
    "image": bgImage,
    "location": {
      "@type": "Place",
      "name": dest,
      "address": {
        "@type": "PostalAddress",
        "addressCountry": ctry
      }
    },
    "result": {
      "@type": "LodgingReservation",
      "lodgingUnitType": accType
    }
  };

  // FAQ Schema for rich snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `What are the best ${accType?.toLowerCase()} for ${aud?.toLowerCase()} in ${dest}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": topPicks?.map(p => p.name).join(', ') || `Top-rated ${accType?.toLowerCase()} in ${dest}`
        }
      },
      {
        "@type": "Question", 
        "name": `Which neighborhoods in ${dest} are best for ${aud?.toLowerCase()}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": tips || `The city center and historic districts offer the best options.`
        }
      }
    ]
  };

  return (
    <>
      {/* Schema.org JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <article className="accommodation-guide">
        <header className="guide-header" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.5)), url(${bgImage})` }}>
          <div className="container">
            <nav className="breadcrumb">
              <a href="/">Home</a> / <a href={`/${accType?.toLowerCase()}`}>{accType}</a> / <span>{dest}</span>
            </nav>
            <h1>Best {accType} for {aud} in {dest}</h1>
            <p className="subtitle">{ctry} · Updated 2026</p>
          </div>
        </header>

        <main className="guide-content">
          <div className="container">
            {/* Introduction */}
            <section className="intro">
              <p>{intro}</p>
            </section>

            {/* Why Choose Section */}
            {whyChoose && whyChoose.length > 0 && (
              <section className="why-choose">
                <h2>Why {accType} for {aud} in {dest}?</h2>
                <ul>
                  {whyChoose.map((reason, i) => (
                    <li key={i}>{reason}</li>
                  ))}
                </ul>
              </section>
            )}

            {/* Top Picks */}
            {topPicks && topPicks.length > 0 && (
              <section className="top-picks">
                <h2>Our Top Picks</h2>
                <div className="picks-grid">
                  {topPicks.map((pick, i) => (
                    <div key={i} className="pick-card">
                      <h3>{pick.name}</h3>
                      <p>{pick.description}</p>
                      {pick.highlight && (
                        <span className="highlight">✨ {pick.highlight}</span>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Tips Section */}
            {tips && (
              <section className="tips">
                <h2>Insider Tips</h2>
                <p>{tips}</p>
              </section>
            )}

            {/* Conclusion */}
            {conclusion && (
              <section className="conclusion">
                <h2>Book Your {dest} Stay</h2>
                <p>{conclusion}</p>
              </section>
            )}

            {/* FAQ Section for SEO */}
            <section className="faq">
              <h2>Frequently Asked Questions</h2>
              <div className="faq-item">
                <h3>What are the best {accType?.toLowerCase()} for {aud?.toLowerCase()} in {dest}?</h3>
                <p>{topPicks?.map(p => p.name).join(', ') || `We recommend several top-rated options in ${dest}.`}</p>
              </div>
              <div className="faq-item">
                <h3>Which neighborhoods in {dest} are best for {aud?.toLowerCase()}?</h3>
                <p>{tips || `The city center offers great access to attractions and amenities.`}</p>
              </div>
            </section>
          </div>
        </main>

        <footer className="guide-footer">
          <div className="container">
            <p>© 2026 BestTrips.org · Expert travel guides for every traveler</p>
          </div>
        </footer>
      </article>

      <style jsx>{`
        .accommodation-guide {
          font-family: system-ui, -apple-system, sans-serif;
          line-height: 1.6;
          color: #333;
        }
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 20px;
        }
        .guide-header {
          background-size: cover;
          background-position: center;
          color: white;
          padding: 80px 0 60px;
          min-height: 300px;
          display: flex;
          align-items: flex-end;
        }
        .breadcrumb {
          font-size: 0.9em;
          opacity: 0.9;
          margin-bottom: 20px;
        }
        .breadcrumb a {
          color: white;
          text-decoration: none;
        }
        h1 {
          font-size: 2.5em;
          margin: 0 0 10px;
        }
        .subtitle {
          opacity: 0.9;
          font-size: 1.1em;
        }
        .guide-content {
          padding: 40px 0;
        }
        section {
          margin-bottom: 40px;
        }
        h2 {
          font-size: 1.5em;
          color: #667eea;
          margin-bottom: 20px;
        }
        .picks-grid {
          display: grid;
          gap: 20px;
        }
        .pick-card {
          background: #f8f9fa;
          padding: 20px;
          border-radius: 10px;
          border-left: 4px solid #667eea;
        }
        .pick-card h3 {
          margin: 0 0 10px;
          color: #333;
        }
        .highlight {
          display: inline-block;
          background: #667eea;
          color: white;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 0.9em;
          margin-top: 10px;
        }
        .faq-item {
          background: #f8f9fa;
          padding: 20px;
          margin-bottom: 15px;
          border-radius: 8px;
        }
        .faq-item h3 {
          margin: 0 0 10px;
          font-size: 1.1em;
        }
        .guide-footer {
          background: #333;
          color: white;
          padding: 30px 0;
          text-align: center;
        }
        ul {
          padding-left: 20px;
        }
        li {
          margin-bottom: 10px;
        }
      `}</style>
    </>
  );
}
