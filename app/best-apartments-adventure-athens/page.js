export const metadata = {
  title: "Best Apartments for Adventure Seekers in Athens",
  description: "Athens isn't just ancient ruins—it's a playground for adventure seekers who crave adrenaline by day and authentic Greek culture by night."
};

export default function GuidePage() {
  return (
    <div className="guide-page">
      <h1>Best Apartments for Adventure Seekers in Athens</h1>
      
      <div className="hook">
        <p>Athens isn't just ancient ruins—it's a playground for adventure seekers who crave adrenaline by day and authentic Greek culture by night.</p>
      </div>

      <section className="why-choose">
        <h2>Why Choose Athens?</h2>
        <ul>
          <li>Prime access to Lycabettus Hill for sunrise hikes, coastal beaches for windsurfing and kayaking within 30 minutes, and easy day trips to Meteora's world-class rock climbing routes</li>
          <li>Urban exploration through Plaka's labyrinthine streets, Exarchia's street art scene, and rooftop bars with Acropolis views to celebrate post-adventure</li>
          <li>Affordable apartment rentals with modern amenities, balconies perfect for gear storage, and proximity to metro stations connecting you to trailheads and coastal departure points</li>
        </ul>
      </section>

      <section className="considerations">
        <h2>Things to Consider</h2>
        <ul>
          <li>Summer temperatures (June-August) exceed 35°C, making early morning or evening adventures essential—choose apartments with air conditioning and blackout curtains for midday rest</li>
          <li>Many historic neighborhoods feature steep stairs and cobblestone streets; ground-floor or elevator-equipped apartments in Koukaki or Pangrati offer easier gear transport</li>
        </ul>
      </section>

      <section className="neighborhoods">
        <h2>Best Neighborhoods</h2>
        <p>Koukaki places you minutes from both the Acropolis Museum and southern hiking trails, with excellent tavernas for refueling. Pangrati offers local authenticity, Panathenaic Stadium proximity for runners, and easy metro access to Piraeus for island-hopping adventures. Exarchia attracts climbers and outdoor enthusiasts with its alternative vibe, affordable eateries, and direct routes to Lycabettus trails. For beach access, consider Glyfada apartments—you'll trade central location for immediate waterfront activities and sunset paddleboarding.</p>
      </section>

      <div className="cta">
        <p>Book your Athens adventure base now and discover why this ancient city is the Mediterranean's emerging outdoor sports capital.</p>
      </div>
    </div>
  );
}
