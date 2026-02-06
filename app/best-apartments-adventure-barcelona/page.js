export const metadata = {
  title: "Best Apartments for Adventure Seekers in Barcelona",
  description: "Barcelona isn't just a beach city—it's an adventure playground where Mediterranean coastline meets mountain trails, making it the ultimate base for thrill-seekers."
};

export default function GuidePage() {
  return (
    <div className="guide-page">
      <h1>Best Apartments for Adventure Seekers in Barcelona</h1>
      
      <div className="hook">
        <p>Barcelona isn't just a beach city—it's an adventure playground where Mediterranean coastline meets mountain trails, making it the ultimate base for thrill-seekers.</p>
      </div>

      <section className="why-choose">
        <h2>Why Choose Barcelona?</h2>
        <ul>
          <li>Wake up to mountain biking in Collserola Natural Park's 8,000 hectares of trails, then cool off with afternoon water sports on Barceloneta Beach—all within 30 minutes of your apartment.</li>
          <li>Rock climbing at Montjuïc's crags offers stunning city views while you scale limestone walls, and the iconic Tibidabo summit provides challenging hiking routes with panoramic rewards.</li>
          <li>Weekend warriors can reach the Pyrenees in under two hours for world-class skiing, mountaineering, and backcountry adventures, then return to urban comfort by Sunday evening.</li>
        </ul>
      </section>

      <section className="considerations">
        <h2>Things to Consider</h2>
        <ul>
          <li>Apartments near metro lines L3 or L7 provide fastest access to trailheads, though expect to pay 15-20% premium for neighborhoods bordering Collserola like Sarrià-Sant Gervasi.</li>
          <li>Summer heat (June-August) can make midday adventures intense—prioritize apartments with air conditioning and consider ground-floor units for easy bike storage and gear management.</li>
        </ul>
      </section>

      <section className="neighborhoods">
        <h2>Best Neighborhoods</h2>
        <p>Gràcia and Sarrià-Sant Gervasi sit at Collserola's doorstep, offering immediate trail access while maintaining authentic Barcelona character. For beach-sport enthusiasts, Poblenou combines proximity to water sports with excellent cycling infrastructure. El Raval and Poble Sec provide budget-friendly options near Montjuïc's climbing zones, while Sant Antoni offers balanced access to both mountains and sea with vibrant local markets for post-adventure fuel.</p>
      </section>

      <div className="cta">
        <p>Find your adventure basecamp—search Barcelona apartments with outdoor gear storage and quick transit to trails, beaches, and beyond.</p>
      </div>
    </div>
  );
}
