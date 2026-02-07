export const metadata = {
  title: "Best Apartments for Families in Budapest: Spacious Stays in Hungary's Capital",
  description: "Discover family-friendly apartments in Budapest offering space, kitchens, and local living. Find the perfect home base for exploring Hungary's enchanting capital with kids."
};

export default function GuidePage() {
  return (
    <div className="guide-page">
      <section className="hook">
        <p>Budapest's family apartments blend the comfort of home with the excitement of Europe's most beautiful capital, offering spacious accommodations where children can play and parents can unwind after exploring thermal baths, castles, and Danube River views.</p>
      </section>
      
      <section className="why-choose">
        <h2>Why Choose This</h2>
        <ul>
          <li>Full kitchens and separate bedrooms provide flexibility for meal times, nap schedules, and budget-conscious dining with fresh market ingredients from the Great Market Hall.</li>
          <li>Residential neighborhoods offer authentic experiences with playgrounds, local bakeries, and community parks that hotels simply cannot match.</li>
          <li>Generous living spaces with washing machines and multiple bathrooms make extended stays comfortable, especially for families with young children needing room to spread out.</li>
        </ul>
      </section>
      
      <section className="considerations">
        <h2>Considerations</h2>
        <ul>
          <li>Many Budapest apartments are in historic buildings with charming character but no elevators—confirm ground floor availability or stair accessibility with strollers before booking.</li>
          <li>Communication can be challenging as English proficiency varies among local property owners; choose apartments with responsive, English-speaking hosts or managed properties.</li>
        </ul>
      </section>
      
      <section className="neighborhoods">
        <h2>Neighborhoods</h2>
        <p>District V (Belváros-Lipótváros) offers central proximity to attractions, while District XIII (Újlipótváros) provides authentic residential charm with parks. District VI (Terézváros) balances walkability with local cafés, and Buda's Castle District delivers quieter, hillside family retreats.</p>
      </section>
      
      <section className="cta">
        <button>Book your Budapest family apartment today and experience Hungary like a local—where every day ends with stories, not just sightseeing.</button>
      </section>
    </div>
  );
}
