export const metadata = {
  title: "Best Apartments for Adventure Seekers in Dublin",
  description: "Discover the perfect apartment base for your Dublin adventures. Explore hiking trails, coastal climbs, kayaking spots, and vibrant city exploration from strategically located rentals."
};

export default function GuidePage() {
  return (
    <div className="guide-page">
      <section className="hook">
        <p>Dublin isn\'t just cobblestones and castles—it\'s a launchpad for epic adventures. From coastal cliff walks to mountain hikes in the Wicklow foothills, adventure seekers need apartments that put them close to the action while offering comfort after a day of exploration.</p>
      </section>
      
      <section className="why-choose">
        <h2>Why Choose Apartments?</h2>
        <ul>
          <li>Strategic proximity to Dublin Bay, Howth cliffs, and Phoenix Park means you\'re minutes from kayaking, rock climbing, and trail running without sacrificing urban convenience</li>
          <li>Self-catering apartments give you the flexibility to fuel early mountain starts and late coastal sunsets on your schedule, with space to store bikes, climbing gear, and hiking equipment</li>
          <li>Dublin\'s compact layout means your apartment can serve dual duty—base camp for Wicklow Mountains day trips and launching pad for pub crawls through Temple Bar</li>
        </ul>
      </section>
      
      <section className="considerations">
        <h2>Considerations</h2>
        <ul>
          <li>Book apartments with secure bike storage or ground-floor access if you\'re bringing adventure gear; many Georgian buildings have narrow staircases</li>
          <li>Consider neighborhoods with good public transport links to Heuston or Connolly stations for quick escapes to Glendalough, Bray, or Killiney Hill</li>
        </ul>
      </section>
      
      <section className="neighborhoods">
        <h2>Best Neighborhoods</h2>
        <p>Stoneybatter offers authentic vibes near Phoenix Park trails. Sandymount puts you steps from coastal walks. Rathmines balances nightlife with easy Wicklow access via LUAS and bus routes.</p>
      </section>
      
      <section className="cta">
        <p>Find your Dublin adventure apartment today and start planning cliff hikes, harbor swims, and mountain bike trails that most tourists never discover.</p>
      </section>
    </div>
  );
}
