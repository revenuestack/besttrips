export const metadata = {
  title: "Best Apartments for Adventure Seekers in Copenhagen",
  description: "Copenhagen transforms apartment living into a launchpad for daily adventures, where your doorstep opens directly onto bike lanes, harbor kayaking routes, and wilderness trails."
};

export default function GuidePage() {
  return (
    <div className="guide-page">
      <h1>Best Apartments for Adventure Seekers in Copenhagen</h1>
      
      <div className="hook">
        <p>Copenhagen transforms apartment living into a launchpad for daily adventures, where your doorstep opens directly onto bike lanes, harbor kayaking routes, and wilderness trails.</p>
      </div>

      <section className="why-choose">
        <h2>Why Choose Copenhagen?</h2>
        <ul>
          <li>Pedal anywhere in minutes thanks to 400+ kilometers of dedicated bike lanes connecting every neighborhood to forests, beaches, and urban parks—most apartments include dedicated bike storage</li>
          <li>Launch kayaks straight from harbor-side neighborhoods like Islands Brygge and Christianshavn, with equipment rentals steps from waterfront apartments and year-round swimming culture</li>
          <li>Access Zealand's ancient beech forests, coastal cliffs, and hiking trails within 30 minutes by bike or train, making weekend wilderness escapes effortless from your urban base</li>
        </ul>
      </section>

      <section className="considerations">
        <h2>Things to Consider</h2>
        <ul>
          <li>Summer (May-September) offers midnight sun adventures and peak outdoor conditions, while winter requires embracing Denmark's 'friluftsliv' philosophy—there's no bad weather, only bad clothing</li>
          <li>Ground-floor or apartments with elevators matter when hauling bikes, kayaks, or hiking gear daily; prioritize neighborhoods with storage facilities and easy outdoor access</li>
        </ul>
      </section>

      <section className="neighborhoods">
        <h2>Best Neighborhoods</h2>
        <p>Vesterbro and Nørrebro blend urban energy with direct bike routes to Frederiksberg Gardens and coastal paths. Islands Brygge offers harbor swimming platforms and kayak launches outside your window. Østerbro provides instant access to Fælledparken's vast green spaces and coastal trails toward Charlottenlund Forest. Christianshavn's canals and alternative vibe suit adventurers seeking waterfront living with authentic local character.</p>
      </section>

      <div className="cta">
        <p>Book your Copenhagen adventure base today and discover why Danes consistently rank among the world's happiest people—the secret is outside your apartment door.</p>
      </div>
    </div>
  );
}
