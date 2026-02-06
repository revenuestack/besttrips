export const metadata = {
  title: "Best Apartments for Adventure Seekers in Lisbon",
  description: "Lisbon combines urban charm with thrilling outdoor adventures, making it the perfect base for adrenaline seekers who want the best of both worlds."
};

export default function GuidePage() {
  return (
    <div className="guide-page">
      <h1>Best Apartments for Adventure Seekers in Lisbon</h1>
      
      <div className="hook">
        <p>Lisbon combines urban charm with thrilling outdoor adventures, making it the perfect base for adrenaline seekers who want the best of both worlds.</p>
      </div>

      <section className="why-choose">
        <h2>Why Choose Lisbon?</h2>
        <ul>
          <li>Prime location between Atlantic surf breaks and Sintra's mountain trails, with most adventure spots reachable within 30-45 minutes</li>
          <li>Walkable historic neighborhoods like Alfama and Mouraria double as urban hiking expeditions with steep cobblestone streets and panoramic viewpoints</li>
          <li>Year-round outdoor conditions with 300 days of sunshine, ideal for coastal cliff exploration, river cycling, and beach activities in every season</li>
        </ul>
      </section>

      <section className="considerations">
        <h2>Things to Consider</h2>
        <ul>
          <li>Many authentic buildings feature steep stairs without elevators—great training for hikers but challenging after long adventure days</li>
          <li>Peak summer months bring crowds to popular surf beaches and Sintra trails; consider shoulder seasons (April-May, September-October) for better access</li>
        </ul>
      </section>

      <section className="neighborhoods">
        <h2>Best Neighborhoods</h2>
        <p>Adventure seekers should target Cais do Sodré for quick train access to Cascais surf beaches and coastal paths, or Santos for proximity to riverside cycling routes along the Tagus. Alfama offers built-in daily workouts with its labyrinthine hills and authentic atmosphere. For those prioritizing Sintra mountain access, Alcântara provides direct train connections while maintaining urban convenience. Príncipe Real balances central location with easy escapes to nature, plus rooftop apartments offering stunning views of the adventure playground surrounding you.</p>
      </section>

      <div className="cta">
        <p>Book your Lisbon adventure base today and wake up ready to surf, hike, and explore one of Europe's most dynamic outdoor playgrounds.</p>
      </div>
    </div>
  );
}
