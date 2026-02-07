export const metadata = {
  title: "Best Family Apartments in Athens: Space, Comfort & Greek Hospitality",
  description: "Discover the best family apartments in Athens, Greece. From Plaka's charm to Kolonaki's elegance, find spacious accommodations perfect for exploring ancient history with kids."
};

export default function GuidePage() {
  return (
    <div className="guide-page">
      <section className="hook">
        <p>Athens offers families the perfect blend of ancient wonders and modern comfort. Choosing an apartment over a hotel gives you the space, flexibility, and authentic local experience that makes traveling with children truly memorable.</p>
      </section>
      
      <section className="why-choose">
        <h2>Why Choose This</h2>
        <ul>
          <li>Space and flexibility: Apartments provide separate bedrooms, full kitchens for preparing familiar meals, and living areas where kids can play after long days exploring the Acropolis and ancient ruins.</li>
          <li>Cost-effective for families: Self-catering options and multiple bedrooms often cost less than booking several hotel rooms, while washers and kitchens reduce daily expenses significantly.</li>
          <li>Authentic neighborhoods: Stay where Athenians live, discover local bakeries, playgrounds, and markets, giving children a genuine cultural immersion beyond tourist zones.</li>
        </ul>
      </section>
      
      <section className="considerations">
        <h2>Considerations</h2>
        <ul>
          <li>Elevator availability: Many charming apartments occupy older buildings without elevators. Confirm this beforehand, especially with strollers or young children who tire easily on stairs.</li>
          <li>Summer heat management: Athens summers are intense. Ensure apartments have air conditioning and consider ground-floor or shaded units to keep comfortable during afternoon rest times.</li>
        </ul>
      </section>
      
      <section className="neighborhoods">
        <h2>Neighborhoods</h2>
        <p>Plaka offers cobblestone charm near major sites, Kolonaki provides upscale shopping and parks, while Pangrati and Mets deliver authentic local life with excellent tavernas, all within easy reach of family-friendly attractions and metro connections.</p>
      </section>
      
      <section className="cta">
        <button>Book your family apartment in Athens today and create unforgettable memories exploring where ancient mythology meets modern Mediterranean living.</button>
      </section>
    </div>
  );
}
