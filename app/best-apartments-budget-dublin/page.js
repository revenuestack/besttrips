export const metadata = {
  title: "Best Apartments for Budget Travelers in Dublin",
  description: "Discover the best budget-friendly apartments in Dublin for savvy travelers. Find affordable self-catering accommodations in prime locations across Ireland's capital city."
};

export default function GuidePage() {
  return (
    <div className="guide-page">
      <h1>Best Apartments for Budget Travelers in Dublin</h1>
      
      <section className="hook">
        <p>Dublin's apartment rentals offer budget travelers the perfect blend of affordability, space, and authentic local living that hotels simply can't match.</p>
      </section>
      
      <section className="why-choose">
        <h2>Why Choose This?</h2>
        <ul>
          <li>Self-catering facilities let you save significantly on dining costs while enjoying the freedom to cook traditional Irish meals with fresh market ingredients.</li>
          <li>More space and privacy than hostels or hotel rooms, with separate living areas perfect for families or groups splitting costs.</li>
          <li>Stay in residential neighborhoods for genuine Dublin experiences, with easier access to local markets, pubs, and hidden gems tourists often miss.</li>
        </ul>
      </section>
      
      <section className="considerations">
        <h2>Considerations</h2>
        <ul>
          <li>Book well in advance during peak seasons (June-August and St. Patrick's week) as budget-friendly options fill quickly in this popular European capital.</li>
          <li>Check proximity to public transport links, as Dublin's LUAS tram and bus network makes staying outside the city center both practical and economical.</li>
        </ul>
      </section>
      
      <section className="neighborhoods">
        <h2>Best Neighborhoods</h2>
        <p>The Liberties and Stoneybatter offer authentic character with affordable rates, while Drumcondra and Phibsborough provide excellent value near the city center. Rathmines attracts students and budget travelers with its vibrant cafe culture and proximity to St. Stephen's Green.</p>
      </section>
      
      <section className="cta">
        <p>Start your Dublin adventure today by browsing verified budget apartment listings and secure your perfect Irish home base.</p>
      </section>
    </div>
  );
}
