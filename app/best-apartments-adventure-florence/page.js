export const metadata = {
  title: "Best Apartments for Adventure Seekers in Florence",
  description: "Discover the best apartments in Florence for adventure seekers. Find the perfect base for hiking Tuscan hills, biking scenic routes, and exploring Renaissance treasures on foot."
};

export default function GuidePage() {
  return (
    <div className="guide-page">
      <section className="hook">
        <p>Florence isn\'t just museums and galleries—it\'s your gateway to Tuscan adventures. From dawn hikes in the Apennines to sunset bike rides through Chianti vineyards, the right apartment puts you at the heart of it all.</p>
      </section>
      
      <section className="why-choose">
        <h2>Why Choose Apartments?</h2>
        <ul>
          <li>Prime access to hiking trails in Fiesole and Settignano hills, with apartments near trailheads offering panoramic views of the Arno Valley</li>
          <li>Bike-friendly neighborhoods with secure storage, close to rental shops and the 160km Chianti bike route through olive groves and medieval villages</li>
          <li>Self-catering kitchens perfect for fueling multi-day adventures, plus laundry facilities for gear maintenance between excursions</li>
        </ul>
      </section>
      
      <section className="considerations">
        <h2>Considerations</h2>
        <ul>
          <li>Upper-floor apartments without elevators are common in historic buildings—great leg workouts but challenging with heavy hiking gear</li>
          <li>Book apartments near Porta Romana or San Niccolò for quick access to countryside trails while staying within walking distance of city center attractions</li>
        </ul>
      </section>
      
      <section className="neighborhoods">
        <h2>Best Neighborhoods</h2>
        <p>San Niccolò offers riverside paths and hillside access, Oltrarno provides authentic local vibes near Boboli Gardens\' trails, while Fiesole—just 20 minutes out—delivers mountain village charm with direct trail access and stunning valley views.</p>
      </section>
      
      <section className="cta">
        <p>Ready to base your Tuscan adventure in Florence? Browse apartments with bike storage, trail access, and authentic neighborhood character today.</p>
      </section>
    </div>
  );
}
