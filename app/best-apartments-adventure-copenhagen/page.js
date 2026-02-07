export const metadata = {
  title: "Best Apartments for Adventure Seekers in Copenhagen",
  description: "Discover top apartments in Copenhagen perfect for adventure seekers. Stay near cycling routes, harbor activities, and outdoor exploration hubs in Denmark's vibrant capital."
};

export default function GuidePage() {
  return (
    <div className="guide-page">
      <section className="hook">
        <p>Copenhagen isn\'t just a city—it\'s an adventure playground where cycling culture meets Nordic wilderness, and your apartment is the perfect basecamp for exploring it all.</p>
      </section>
      
      <section className="why-choose">
        <h2>Why Choose Apartments?</h2>
        <ul>
          <li>Unmatched cycling infrastructure with over 390km of bike lanes connecting you to beaches, forests, and urban adventures within minutes of your doorstep</li>
          <li>Proximity to harbor swimming spots, kayaking channels, and waterfront activities that let you dive into adventure before breakfast</li>
          <li>Easy access to day-trip destinations like Møn\'s chalk cliffs, Swedish coastlines, and Zealand\'s forests via efficient public transit</li>
        </ul>
      </section>
      
      <section className="considerations">
        <h2>Considerations</h2>
        <ul>
          <li>Copenhagen\'s compact size means most adventure-focused neighborhoods fill quickly during summer months—book early for June-August stays</li>
          <li>While most apartments include bike storage, confirm availability beforehand since cycling is your primary adventure tool here</li>
        </ul>
      </section>
      
      <section className="neighborhoods">
        <h2>Best Neighborhoods</h2>
        <p>Vesterbro offers hipster vibes with quick routes to beaches. Nørrebro provides authentic local culture near green spaces. Islands Brygge places you waterfront with harbor pools and kayak rentals at your doorstep. Østerbro connects you to coastal paths and Fælledparken\'s outdoor activities.</p>
      </section>
      
      <section className="cta">
        <p>Find your Copenhagen adventure basecamp today—search apartments in these neighborhoods and start planning your Nordic exploration.</p>
      </section>
    </div>
  );
}
