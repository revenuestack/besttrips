export const metadata = {
  title: "Best Apartments for Adventure Seekers in Berlin",
  description: "Discover the perfect apartment base for your Berlin adventure. From bike-friendly neighborhoods to areas with extreme sports access, find where thrill-seekers stay in Germany's dynamic capital."
};

export default function GuidePage() {
  return (
    <div className="guide-page">
      <section className="hook">
        <p>Berlin pulses with urban adventure, and choosing the right apartment puts you at the heart of the action. Whether you\'re cycling the Berlin Wall Trail, exploring abandoned sites, or kayaking the Spree, your basecamp matters.</p>
      </section>
      
      <section className="why-choose">
        <h2>Why Choose Apartments?</h2>
        <ul>
          <li>Flexible home base with kitchen facilities to fuel early morning adventures and late-night returns from Berlin\'s legendary nightlife</li>
          <li>Space for adventure gear storage including bikes, climbing equipment, and outdoor essentials in spacious German apartments</li>
          <li>Local neighborhood immersion in areas where Berliners actually live, bike, and explore beyond typical tourist zones</li>
        </ul>
      </section>
      
      <section className="considerations">
        <h2>Considerations</h2>
        <ul>
          <li>Book apartments near U-Bahn or S-Bahn stations for quick access to Teufelsberg, Müggelsee, or Grunewald forest adventures</li>
          <li>Summer months (May-September) offer peak adventure conditions but require advance booking, especially in popular districts</li>
        </ul>
      </section>
      
      <section className="neighborhoods">
        <h2>Best Neighborhoods</h2>
        <p>Friedrichshain offers urban exploration with East Side Gallery access and Spree kayaking. Kreuzberg combines canal-side cycling with vibrant street culture. Prenzlauer Berg provides easy bike routes to parks and lakes. Neukölln attracts adventurous travelers with its raw energy and affordable options near Tempelhofer Feld, Berlin\'s massive former airport turned urban park.</p>
      </section>
      
      <section className="cta">
        <p>Find your Berlin adventure apartment today and unlock Germany\'s most dynamic city from a local\'s perspective.</p>
      </section>
    </div>
  );
}
