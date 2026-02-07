export const metadata = {
  title: "Best Apartments for Couples in Prague: Romantic Stays in the City of a Hundred Spires",
  description: "Discover the best apartments for couples in Prague. From cozy Old Town lofts to riverside retreats, find your perfect romantic base in this enchanting Czech capital."
};

export default function GuidePage() {
  return (
    <div className="guide-page">
      <section className="hook">
        <p>Prague's cobblestone streets, Gothic spires, and riverside charm create the perfect backdrop for romance, and choosing the right apartment can transform your couple's getaway into an unforgettable experience.</p>
      </section>
      
      <section className="why-choose">
        <h2>Why Choose This</h2>
        <ul>
          <li>Privacy and intimacy that hotels can't match, with fully-equipped kitchens perfect for romantic breakfasts and intimate dinners featuring local Czech ingredients from nearby markets</li>
          <li>Better value for money with spacious accommodations often featuring separate living areas, balconies with castle views, and authentic architectural details like exposed beams and original parquet floors</li>
          <li>Local neighborhood experiences in charming residential areas where you'll discover hidden cafés, traditional wine bars, and quiet parks away from tourist crowds</li>
        </ul>
      </section>
      
      <section className="considerations">
        <h2>Considerations</h2>
        <ul>
          <li>Book accommodations near tram lines for easy access to attractions, as Prague's hills can be challenging to navigate on foot, especially in winter</li>
          <li>Verify elevator availability if booking upper-floor apartments in historic buildings, as many beautiful Art Nouveau and medieval structures lack modern conveniences</li>
        </ul>
      </section>
      
      <section className="neighborhoods">
        <h2>Neighborhoods</h2>
        <p>Malá Strana offers fairy-tale charm beneath the castle, Vinohrady provides trendy local vibes with excellent restaurants, Old Town places you steps from iconic landmarks, and Karlín combines riverside views with emerging cultural scenes and craft breweries.</p>
      </section>
      
      <section className="cta">
        <button>Start planning your romantic Prague escape today and discover apartments that combine historic charm with modern comfort for an unforgettable couples' retreat.</button>
      </section>
    </div>
  );
}
