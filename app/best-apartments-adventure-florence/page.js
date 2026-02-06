export const metadata = {
  title: "Best Apartments for Adventure Seekers in Florence",
  description: "Florence isn't just Renaissance art and Duomo views—it's your basecamp for Tuscan adventures that blend culture with adrenaline-pumping outdoor escapes."
};

export default function GuidePage() {
  return (
    <div className="guide-page">
      <h1>Best Apartments for Adventure Seekers in Florence</h1>
      
      <div className="hook">
        <p>Florence isn't just Renaissance art and Duomo views—it's your basecamp for Tuscan adventures that blend culture with adrenaline-pumping outdoor escapes.</p>
      </div>

      <section className="why-choose">
        <h2>Why Choose Florence?</h2>
        <ul>
          <li>Prime access to Chianti's legendary cycling routes and vineyard trails, with the Apuan Alps climbing destinations just 90 minutes away for weekend mountain adventures</li>
          <li>Walkable base for exploring authentic neighborhoods like San Frediano and Sant'Ambrogio, where local markets and hidden trattorie fuel your daily expeditions</li>
          <li>Strategic location for spontaneous day trips to Cinque Terre's coastal trails, Tuscan hill town hikes, and off-the-beaten-path medieval villages inaccessible to tour buses</li>
        </ul>
      </section>

      <section className="considerations">
        <h2>Things to Consider</h2>
        <ul>
          <li>Book apartments near Oltrarno or Santa Croce districts for easier bike storage and quick exits to countryside routes without navigating historic center traffic restrictions</li>
          <li>Summer heat (June-August) can make midday activities challenging—prioritize accommodations with air conditioning and plan adventures for early morning or evening hours</li>
        </ul>
      </section>

      <section className="neighborhoods">
        <h2>Best Neighborhoods</h2>
        <p>Oltrarno offers the perfect blend of authentic Florence living and adventure access, with bike-friendly streets leading directly to countryside routes and proximity to climbing gear shops. San Frediano provides a local vibe with easy access to both the Arno River running paths and bus connections to trailheads. Santa Croce positions you near bike rental hubs and the eastern exits toward Chianti wine country, while maintaining walkability to cultural sites for rest days.</p>
      </section>

      <div className="cta">
        <p>Book your Florence adventure apartment now and discover why this Renaissance city is the ultimate hub for Tuscan outdoor exploration.</p>
      </div>
    </div>
  );
}
