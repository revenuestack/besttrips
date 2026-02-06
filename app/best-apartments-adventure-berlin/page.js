export const metadata = {
  title: "Best Apartments for Adventure Seekers in Berlin",
  description: "Berlin transforms into an adrenaline-fueled playground where urban grit meets wild Brandenburg nature, making it the ultimate base for adventure seekers."
};

export default function GuidePage() {
  return (
    <div className="guide-page">
      <h1>Best Apartments for Adventure Seekers in Berlin</h1>
      
      <div className="hook">
        <p>Berlin transforms into an adrenaline-fueled playground where urban grit meets wild Brandenburg nature, making it the ultimate base for adventure seekers.</p>
      </div>

      <section className="why-choose">
        <h2>Why Choose Berlin?</h2>
        <ul>
          <li>Unmatched variety: cycle the Spree riverside paths in the morning, explore hauntingly beautiful abandoned sites like Teufelsberg by afternoon, and tackle world-class climbing gyms before sunset</li>
          <li>Strategic gateway location with Brandenburg's forests, lakes, and hiking trails just 30-60 minutes away, letting you escape to nature without sacrificing city conveniences</li>
          <li>Year-round adventure calendar from summer paddleboarding on Wannsee to winter urban exploration, plus Berlin's exceptional public transport means car-free adventuring</li>
        </ul>
      </section>

      <section className="considerations">
        <h2>Things to Consider</h2>
        <ul>
          <li>Neighborhoods closer to parks and water access (Charlottenburg, Kreuzberg) command premium rents but save commute time to adventure hotspots</li>
          <li>Ground-floor or apartments with secure bike storage are essential since cycling is your primary transport mode for reaching trailheads and waterfront launch points</li>
        </ul>
      </section>

      <section className="neighborhoods">
        <h2>Best Neighborhoods</h2>
        <p>Kreuzberg and Friedrichshain offer the perfect adventurer's balance—proximity to the East Side Gallery for urban runs, direct Spree access for kayaking, and excellent S-Bahn connections to Brandenburg hiking. Charlottenburg positions you near Tiergarten's sprawling trails and Wannsee's water sports scene. Neukölln appeals to budget-conscious adventurers with authentic Berlin edge, climbing gyms, and quick access to Tempelhofer Feld's massive open space for cycling and outdoor activities.</p>
      </section>

      <div className="cta">
        <p>Book your Berlin adventure apartment now and discover why this city rewards those who seek thrills both within its rebellious streets and beyond its wild green borders.</p>
      </div>
    </div>
  );
}
