export const metadata = {
  title: "Best Apartments for Business Travelers in London",
  description: "Discover top serviced apartments in London perfect for business travelers. Compare locations, amenities, and proximity to financial districts for your corporate stay."
};

export default function GuidePage() {
  return (
    <div className="guide-page">
      <section className="hook">
        <p>London's serviced apartments offer business travelers the perfect blend of professional amenities and home comfort, with flexible stays that adapt to your corporate schedule.</p>
      </section>
      
      <section className="why-choose">
        <h2>Why Choose This</h2>
        <ul>
          <li>Fully equipped kitchens and separate living spaces provide cost-effective alternatives to hotels for extended stays, while high-speed Wi-Fi and dedicated workspaces ensure productivity throughout your trip.</li>
          <li>Prime locations in Canary Wharf, The City, and Mayfair place you minutes from London's financial hubs, reducing commute times and maximizing efficiency during busy work schedules.</li>
          <li>Flexible check-in times, 24/7 concierge services, and weekly housekeeping eliminate the hassles of traditional rentals while maintaining the privacy and space essential for business professionals.</li>
        </ul>
      </section>
      
      <section className="considerations">
        <h2>Considerations</h2>
        <ul>
          <li>Book well in advance during peak business seasons (September-November, January-March) as corporate demand fills premium apartments quickly, particularly near major financial districts.</li>
          <li>Factor in London's congestion charge zones when selecting locations if you plan to drive, though most business travelers find the Tube and taxi services more convenient for city navigation.</li>
        </ul>
      </section>
      
      <section className="neighborhoods">
        <h2>Neighborhoods</h2>
        <p>Canary Wharf dominates for finance professionals, while Mayfair and St. James's serve luxury corporate needs. South Bank and Southwark offer modern riverside options with excellent transport links, and King's Cross provides emerging tech hub proximity with Eurostar access for continental business.</p>
      </section>
      
      <section className="cta">
        <button>Browse our curated selection of business-ready apartments and secure your London base with instant confirmation and flexible cancellation policies.</button>
      </section>
    </div>
  );
}
