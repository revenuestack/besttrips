export const metadata = {
  title: "Best Apartments for Adventure Seekers in Lyon",
  description: "Lyon transforms from Renaissance city to adventure basecamp, where urban exploration meets alpine thrills just beyond your apartment door."
};

export default function GuidePage() {
  return (
    <div className="guide-page">
      <h1>Best Apartments for Adventure Seekers in Lyon</h1>
      
      <div className="hook">
        <p>Lyon transforms from Renaissance city to adventure basecamp, where urban exploration meets alpine thrills just beyond your apartment door.</p>
      </div>

      <section className="why-choose">
        <h2>Why Choose Lyon?</h2>
        <ul>
          <li>Prime riverside cycling routes along the Rhône and Saône offer morning rides through historic quarters, while evening pedals reveal illuminated bridges and waterfront cafés perfect for post-adventure refreshment.</li>
          <li>Day-trip access to world-class rock climbing in the Chartreuse and Vercors ranges means you can scale limestone cliffs by morning and explore medieval traboules through Old Lyon by afternoon.</li>
          <li>Strategic location places you 90 minutes from Chamonix and Annecy, turning your apartment into a weekend launchpad for serious alpine hiking, paragliding, and skiing without sacrificing urban amenities.</li>
        </ul>
      </section>

      <section className="considerations">
        <h2>Things to Consider</h2>
        <ul>
          <li>Apartments near Confluence or Presqu'île offer best cycling infrastructure and river access, though expect premium pricing for these adventure-friendly neighborhoods with secure bike storage.</li>
          <li>Summer heat in Lyon can be intense for midday activities; many adventurers prefer morning alpine excursions or evening urban exploration, so consider air-conditioned units with early checkout flexibility.</li>
        </ul>
      </section>

      <section className="neighborhoods">
        <h2>Best Neighborhoods</h2>
        <p>Confluence blends modern sustainability with Rhône riverside trails and bike-share stations, ideal for cyclists. Croix-Rousse provides hillside character, traboule access, and proximity to climbing gyms, attracting boulder enthusiasts. Presqu'île centers you between both rivers with excellent public transport to trailheads. Vieux Lyon offers authentic charm near traboules but limited parking for alpine gear. Villeurbanne provides budget-friendly options near metro lines connecting to hiking shuttle departure points.</p>
      </section>

      <div className="cta">
        <p>Book your Lyon adventure apartment today and discover why this UNESCO city is France's ultimate basecamp for explorers who refuse to choose between culture and adrenaline.</p>
      </div>
    </div>
  );
}
