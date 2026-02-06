export const metadata = {
  title: "Best Apartments for Adventure Seekers in Venice",
  description: "Venice isn't just gondolas and grand palaces—it's an adventure playground where waterways become kayaking routes and hidden islands await exploration."
};

export default function GuidePage() {
  return (
    <div className="guide-page">
      <h1>Best Apartments for Adventure Seekers in Venice</h1>
      
      <div className="hook">
        <p>Venice isn't just gondolas and grand palaces—it's an adventure playground where waterways become kayaking routes and hidden islands await exploration.</p>
      </div>

      <section className="why-choose">
        <h2>Why Choose Venice?</h2>
        <ul>
          <li>Stay in Cannaregio or Dorsoduro for authentic neighborhoods with easy canal kayak launch points and proximity to vaporetto lines connecting to Lido's cycling paths and lagoon islands like Torcello and Burano for off-the-beaten-path exploration</li>
          <li>Base yourself near Santa Lucia station for convenient early-morning train access to the Dolomites (2-3 hours), returning by evening to paddle Venice's quieter canals or explore the Arsenale district's maritime history</li>
          <li>Choose apartments on Lido island itself for direct beach access, extensive cycling infrastructure, and a local's perspective while remaining just 10 minutes by boat from Venice's historic core</li>
        </ul>
      </section>

      <section className="considerations">
        <h2>Things to Consider</h2>
        <ul>
          <li>Ground-floor or lift-equipped apartments are essential when hauling adventure gear through Venice's endless bridges and narrow passages—confirm accessibility before booking</li>
          <li>Summer heat and crowds peak July-August; opt for shoulder seasons (April-May, September-October) when canal kayaking is more pleasant and Dolomite trails remain accessible without winter closures</li>
        </ul>
      </section>

      <section className="neighborhoods">
        <h2>Best Neighborhoods</h2>
        <p>Cannaregio offers the perfect balance—residential authenticity, fewer tourists, and northern lagoon access for kayaking. Dorsoduro attracts creative adventurers with its university vibe and proximity to southern canals. For serious cyclists and beach lovers, Lido provides car-free streets, 11km of riding terrain, and a relaxed island atmosphere. Castello's eastern edge near the Arsenale puts you closest to Sant'Elena's parks and less-trafficked waterways.</p>
      </section>

      <div className="cta">
        <p>Book your Venice adventure base today and discover the city beyond the postcards—where every canal is a path and every island holds secrets.</p>
      </div>
    </div>
  );
}
