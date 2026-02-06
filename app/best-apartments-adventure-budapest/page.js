export const metadata = {
  title: "Best Apartments for Adventure Seekers in Budapest",
  description: "Budapest transforms into an adventure playground where your apartment becomes base camp for exploring underground caves, scaling hills, and diving into Europe's most electrifying urban scenes."
};

export default function GuidePage() {
  return (
    <div className="guide-page">
      <h1>Best Apartments for Adventure Seekers in Budapest</h1>
      
      <div className="hook">
        <p>Budapest transforms into an adventure playground where your apartment becomes base camp for exploring underground caves, scaling hills, and diving into Europe's most electrifying urban scenes.</p>
      </div>

      <section className="why-choose">
        <h2>Why Choose Budapest?</h2>
        <ul>
          <li>Position yourself between the Buda Hills for weekend hiking and rock climbing while staying minutes from thermal cave systems like Szemlő-hegyi and Pálvölgyi, offering rare underground exploration opportunities</li>
          <li>Access the Danube cycling path directly from central neighborhoods, with easy connections to Margaret Island's running trails and nearby lakes for kayaking, SUP, and sailing adventures</li>
          <li>Immerse yourself in Budapest's legendary ruin bar district where adventure meets nightlife—explore abandoned buildings turned art spaces, hidden courtyards, and underground speakeasies that define the city's alternative culture</li>
        </ul>
      </section>

      <section className="considerations">
        <h2>Things to Consider</h2>
        <ul>
          <li>Buda-side apartments offer closer proximity to hiking trails and nature but require crossing bridges to reach the ruin bars and cycling routes concentrated in Pest</li>
          <li>Peak summer months (June-August) bring crowds to popular adventure spots and higher apartment rates, while spring and fall offer ideal temperatures for outdoor activities with better availability and pricing</li>
        </ul>
      </section>

      <section className="neighborhoods">
        <h2>Best Neighborhoods</h2>
        <p>District VII (the Jewish Quarter) puts you at the heart of ruin bar exploration with excellent public transport to adventure zones. Districts V and VI offer central locations with quick access to Danube cycling paths. For nature lovers, District XII in Buda provides direct access to hiking trails while maintaining connections to downtown. District XIII near Margaret Island balances water sports access with urban amenities, perfect for active travelers wanting morning runs before city exploration.</p>
      </section>

      <div className="cta">
        <p>Book your Budapest adventure base today and discover why this city offers the perfect blend of natural thrills and urban exploration.</p>
      </div>
    </div>
  );
}
