export const metadata = {
  title: "Best Apartments for Adventure Seekers in Barcelona",
  description: "Discover the perfect Barcelona apartments for thrill-seekers. Base yourself near climbing spots, beaches, and mountain trails while exploring Catalonia's adventure capital."
};

export default function GuidePage() {
  return (
    <div className="guide-page">
      <section className="hook">
        <p>Barcelona isn\'t just about Gaudí and tapas—it\'s an adventure playground where Mediterranean beaches meet Montjuïc\'s hiking trails and world-class climbing spots. The right apartment puts you within reach of kitesurfing, mountain biking, and dawn swims before your morning cortado.</p>
      </section>
      
      <section className="why-choose">
        <h2>Why Choose Apartments?</h2>
        <ul>
          <li>Strategic locations near Barceloneta Beach for water sports, Collserola Natural Park for trail running, and climbing gyms like Sharma Climbing BCN—many apartments offer bike storage and gear-drying areas.</li>
          <li>Flexible self-catering options let you fuel early starts and late returns on your schedule, with local markets like La Boqueria providing fresh supplies for packed lunches before day trips to Montserrat.</li>
          <li>Cost-effective bases for multi-day adventures: use Barcelona as your hub for Costa Brava coasteering, Pyrenees hiking, or Via Ferrata routes, returning to comfortable apartments instead of pricey hotels.</li>
        </ul>
      </section>
      
      <section className="considerations">
        <h2>Considerations</h2>
        <ul>
          <li>Book apartments in neighborhoods with easy metro access to adventure zones—Sants for mountain access, Poblenou for beaches—and confirm secure storage for bikes, boards, or climbing gear.</li>
          <li>Summer (June-September) offers perfect water sports conditions but higher prices; spring and fall provide ideal hiking weather and better apartment rates with fewer tourists crowding trails.</li>
        </ul>
      </section>
      
      <section className="neighborhoods">
        <h2>Best Neighborhoods</h2>
        <p>Poblenou blends beach proximity with local vibes and excellent cycling infrastructure. Gràcia offers authentic Barcelona living near Collserola\'s trails. Sants provides direct access to mountain trains and bike routes, while Barceloneta puts you steps from Mediterranean water sports—though it\'s touristy and pricier.</p>
      </section>
      
      <section className="cta">
        <p>Find your adventure base in Barcelona today and start planning epic days exploring Catalonia\'s peaks, seas, and hidden trails.</p>
      </section>
    </div>
  );
}
