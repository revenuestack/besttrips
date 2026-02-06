export const metadata = {
  title: "Best Apartments for Adventure Seekers in Madrid",
  description: "Madrid's unique position as a vibrant capital city with immediate access to mountain wilderness makes it the perfect base camp for adventurers who crave both urban energy and outdoor thrills."
};

export default function GuidePage() {
  return (
    <div className="guide-page">
      <h1>Best Apartments for Adventure Seekers in Madrid</h1>
      
      <div className="hook">
        <p>Madrid's unique position as a vibrant capital city with immediate access to mountain wilderness makes it the perfect base camp for adventurers who crave both urban energy and outdoor thrills.</p>
      </div>

      <section className="why-choose">
        <h2>Why Choose Madrid?</h2>
        <ul>
          <li>Within 90 minutes, transition from cycling Madrid's extensive urban bike lanes through historic neighborhoods to hiking alpine trails in Sierra de Guadarrama National Park, where granite peaks reach over 2,400 meters.</li>
          <li>Year-round adventure opportunities include rock climbing at La Pedriza's iconic boulder fields in spring and summer, then skiing at Navacerrada and Valdesquí resorts during winter months, all accessible via public transport from the city.</li>
          <li>Strategic apartment locations near metro lines and Cercanías train stations enable spontaneous dawn mountain missions while returning to world-class tapas, cultural sites, and Madrid's legendary nightlife by evening.</li>
        </ul>
      </section>

      <section className="considerations">
        <h2>Things to Consider</h2>
        <ul>
          <li>Peak summer months (July-August) bring intense heat to the city and dry conditions in the mountains, making spring and fall ideal for balancing urban exploration with mountain activities.</li>
          <li>While Madrid's public transport reaches trailheads and ski areas, having occasional car rental access significantly expands your range to remote climbing crags and lesser-known national park zones.</li>
        </ul>
      </section>

      <section className="neighborhoods">
        <h2>Best Neighborhoods</h2>
        <p>Adventurous travelers should prioritize apartments in Chamberí or Tetuán for quick metro access to Cercanías trains heading north to the mountains, or Malasaña and Chueca for walkable urban exploration combined with excellent bike-share connectivity. Argüelles offers proximity to Casa de Campo's extensive trail network for immediate outdoor fixes between mountain trips.</p>
      </section>

      <div className="cta">
        <p>Book your Madrid adventure apartment today and discover why this mountain-flanked capital is Europe's most underrated outdoor sports hub.</p>
      </div>
    </div>
  );
}
