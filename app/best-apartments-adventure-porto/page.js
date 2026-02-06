export const metadata = {
  title: "Best Apartments for Adventure Seekers in Porto",
  description: "Porto transforms into an adventure playground where centuries-old cobblestone streets meet Atlantic surf breaks and vineyard-draped valleys await just beyond the city limits."
};

export default function GuidePage() {
  return (
    <div className="guide-page">
      <h1>Best Apartments for Adventure Seekers in Porto</h1>
      
      <div className="hook">
        <p>Porto transforms into an adventure playground where centuries-old cobblestone streets meet Atlantic surf breaks and vineyard-draped valleys await just beyond the city limits.</p>
      </div>

      <section className="why-choose">
        <h2>Why Choose Porto?</h2>
        <ul>
          <li>Base yourself minutes from world-class surf spots at Matosinhos and Espinho beaches while maintaining easy access to Porto's vibrant food scene and cultural landmarks</li>
          <li>Launch day trips into Douro Valley's terraced vineyards for hiking and wine tasting, or explore Peneda-Gerês National Park's waterfalls and granite peaks within 90 minutes</li>
          <li>Experience authentic urban adventure through Ribeira's medieval alleys, climb the iconic Dom Luís I Bridge for sunset views, and kayak the Douro River between historical wine cellars</li>
        </ul>
      </section>

      <section className="considerations">
        <h2>Things to Consider</h2>
        <ul>
          <li>Porto's hilly terrain means apartments in central neighborhoods like Ribeira and Miragaia involve steep climbs—perfect training for valley hikes but challenging with heavy gear</li>
          <li>Summer months (June-August) bring crowds and higher apartment rates, while spring and fall offer ideal hiking weather, smaller waves for beginner surfers, and better accommodation value</li>
        </ul>
      </section>

      <section className="neighborhoods">
        <h2>Best Neighborhoods</h2>
        <p>Foz do Douro delivers the ultimate adventure-seeker setup with beachfront access, coastal trails, and surf schools while staying connected to downtown via vintage tram. Matosinhos Norte provides budget-friendly apartments near consistent surf breaks and fresh seafood markets. For urban explorers, Cedofeita and Miguel Bombarda offer artistic edge with climbing gyms, bike rental hubs, and quick metro access to trailheads. Ribeira immerses you in historic atmosphere with riverside kayaking and walking tours departing from your doorstep.</p>
      </section>

      <div className="cta">
        <p>Book your Porto adventure base today and discover why this coastal city has become Europe's hotspot for thrill-seekers who refuse to choose between cultural immersion and outdoor adrenaline.</p>
      </div>
    </div>
  );
}
