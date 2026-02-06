export const metadata = {
  title: "Best Apartments for Adventure Seekers in Rome",
  description: "Rome isn't just ancient ruins and pasta—it's a launchpad for adrenaline-fueled adventures from the Apennines to the Tyrrhenian coast."
};

export default function GuidePage() {
  return (
    <div className="guide-page">
      <h1>Best Apartments for Adventure Seekers in Rome</h1>
      
      <div className="hook">
        <p>Rome isn't just ancient ruins and pasta—it's a launchpad for adrenaline-fueled adventures from the Apennines to the Tyrrhenian coast.</p>
      </div>

      <section className="why-choose">
        <h2>Why Choose Rome?</h2>
        <ul>
          <li>Strategic location with cycling routes like the historic Appian Way, hiking trails in Castelli Romani hills within 30 minutes, and coastal water sports at Ostia beaches just a metro ride away</li>
          <li>Unique blend of urban exploration through millennia-old archaeological sites, catacombs, and hidden ruins that double as your daily walking routes and weekend discovery missions</li>
          <li>Easy access to Apennine mountain ranges for weekend skiing, rock climbing, and trail running while maintaining a home base in one of the world's most captivating cities</li>
        </ul>
      </section>

      <section className="considerations">
        <h2>Things to Consider</h2>
        <ul>
          <li>Summer heat (June-August) can reach 35°C+, making early morning or evening adventures essential—prioritize apartments with air conditioning and bike storage</li>
          <li>Many historic center apartments lack elevators and parking, so choose neighborhoods with metro access near Termini or Tiburtina stations for quick escapes to trailheads</li>
        </ul>
      </section>

      <section className="neighborhoods">
        <h2>Best Neighborhoods</h2>
        <p>Testaccio and San Lorenzo offer authentic Roman living with excellent public transport links to adventure hotspots, plus bike-friendly streets and local gear shops. Prati, near the Vatican, provides metro access and proximity to riverside cycling paths along the Tiber. For direct Appian Way access, consider apartments in Appio-Latino or Tuscolano districts, where you can literally step out your door onto ancient cobblestones leading to countryside trails.</p>
      </section>

      <div className="cta">
        <p>Book your adventure base in Rome today and transform every morning coffee into the starting line of your next epic exploration.</p>
      </div>
    </div>
  );
}
