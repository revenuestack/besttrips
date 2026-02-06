export const metadata = {
  title: "Best Apartments for Adventure Seekers in Amsterdam",
  description: "Amsterdam transforms into an adventure playground when you choose the right apartment base for exploring by bike, boat, and boot."
};

export default function GuidePage() {
  return (
    <div className="guide-page">
      <h1>Best Apartments for Adventure Seekers in Amsterdam</h1>
      
      <div className="hook">
        <p>Amsterdam transforms into an adventure playground when you choose the right apartment base for exploring by bike, boat, and boot.</p>
      </div>

      <section className="why-choose">
        <h2>Why Choose Amsterdam?</h2>
        <ul>
          <li>Apartment living puts you at the heart of canal-side cycling routes and within minutes of IJ lake's kayaking and sailing opportunities, letting you start each adventure right from your doorstep.</li>
          <li>Noord district apartments offer authentic local vibes with direct access to urban exploration hotspots, street art trails, and the free ferry system that becomes your daily commute to central Amsterdam.</li>
          <li>Strategic apartment locations provide easy train or bike access to Zandvoort beaches, Amsterdamse Waterleidingduinen nature reserve, and the extensive countryside cycling networks that make day trips effortless.</li>
        </ul>
      </section>

      <section className="considerations">
        <h2>Things to Consider</h2>
        <ul>
          <li>Bike storage is essential—confirm your apartment includes secure bike parking or a dedicated shed, as quality bikes are investments worth protecting in this cycling-obsessed city.</li>
          <li>Ground floor or elevator access matters when you're hauling kayaking gear, hiking packs, or muddy bikes after countryside excursions, so prioritize practical layouts over canal-view penthouses.</li>
        </ul>
      </section>

      <section className="neighborhoods">
        <h2>Best Neighborhoods</h2>
        <p>Oud-Noord and NDSM-werf deliver raw adventure energy with waterfront access and creative spaces. Oost offers the perfect balance—near Flevopark for morning runs and quick tram links to Centraal Station. De Pijp keeps you central with Amstel River access for water sports. Westerpark combines green space proximity with cultural venues. For countryside access, consider Sloterdijk or Zuid with excellent train connections.</p>
      </section>

      <div className="cta">
        <p>Book your Amsterdam adventure apartment today and unlock a city where every morning starts with possibility and every evening ends with stories worth telling.</p>
      </div>
    </div>
  );
}
