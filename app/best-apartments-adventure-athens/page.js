export const metadata = {
  title: "Best Apartments for Adventure Seekers in Athens",
  description: "Discover the perfect Athens apartment base for your Greek adventures. From hiking Mount Lycabettus to exploring ancient ruins, find accommodation that puts you at the heart of the action."
};

export default function GuidePage() {
  return (
    <div className="guide-page">
      <section className="hook">
        <p>Athens isn\'t just ancient history—it\'s a thrilling playground where urban exploration meets Mediterranean adventure, and your apartment choice can make or break your adrenaline-filled itinerary.</p>
      </section>
      
      <section className="why-choose">
        <h2>Why Choose Apartments?</h2>
        <ul>
          <li>Strategic locations near hiking trails like Mount Lycabettus and Philopappos Hill, plus easy access to day trips to Cape Sounion for cliff diving and the Saronic Islands for kayaking and sailing</li>
          <li>Flexible space for storing adventure gear—bikes, climbing equipment, snorkeling gear—with many apartments offering secure storage and bike rentals</li>
          <li>Cost-effective base camp allowing you to invest more in experiences like rock climbing in Varibopi, scuba diving in the Athenian Riviera, or paragliding excursions while enjoying authentic neighborhood life</li>
        </ul>
      </section>
      
      <section className="considerations">
        <h2>Considerations</h2>
        <ul>
          <li>Book apartments near metro stations (Monastiraki, Syntagma, Thissio) for quick access to coastal adventure spots and trailheads—Athens traffic can eat into your adventure time</li>
          <li>Summer heat (June-August) can be intense; prioritize apartments with air conditioning and consider spring or fall for optimal hiking and outdoor exploration conditions</li>
        </ul>
      </section>
      
      <section className="neighborhoods">
        <h2>Best Neighborhoods</h2>
        <p>Koukaki and Thissio offer proximity to hillside trails and ancient sites. Plaka provides central access to everything, while Exarchia appeals to alternative adventurers. For coastal activities, consider Glyfada or Vouliagmeni along the Athens Riviera.</p>
      </section>
      
      <section className="cta">
        <p>Ready to conquer Athens from your perfect apartment base? Start comparing adventure-friendly rentals and plan your epic Greek escape today.</p>
      </section>
    </div>
  );
}
