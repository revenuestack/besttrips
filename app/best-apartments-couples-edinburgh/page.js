export const metadata = {
  title: "Best Apartments for Couples in Edinburgh: Romantic Stays in Scotland's Capital",
  description: "Discover the perfect apartment for couples in Edinburgh. From Old Town charm to New Town elegance, find romantic accommodations with castle views, cozy fireplaces, and intimate atmospheres."
};

export default function GuidePage() {
  return (
    <div className="guide-page">
      <section className="hook">
        <p>Edinburgh's enchanting blend of medieval charm and Georgian elegance creates the perfect backdrop for a romantic escape, and choosing the right apartment can transform your couples' getaway into an unforgettable experience.</p>
      </section>
      
      <section className="why-choose">
        <h2>Why Choose This</h2>
        <ul>
          <li>Privacy and intimacy that hotels can't match, with fully-equipped kitchens perfect for romantic dinners in, cozy living spaces for quality time together, and the freedom to create your own schedule without reception hours or breakfast times</li>
          <li>Authentic Edinburgh living in historic buildings with original features like exposed stone walls, wooden beams, and working fireplaces, often with stunning views of Edinburgh Castle, Arthur's Seat, or the charming cobblestone streets</li>
          <li>Better value for money compared to hotel rooms, especially for stays longer than three nights, with more space to relax and the ability to save on dining costs by preparing some meals together</li>
        </ul>
      </section>
      
      <section className="considerations">
        <h2>Considerations</h2>
        <ul>
          <li>Most Edinburgh apartments are in historic buildings without elevators, often requiring climbing several flights of stairs with luggage—factor this in when booking, especially if mobility is a concern</li>
          <li>Peak season (August Festival time) and Hogmanay require booking 6-9 months in advance, with prices doubling or tripling, so plan accordingly for the best selection and rates</li>
        </ul>
      </section>
      
      <section className="neighborhoods">
        <h2>Neighborhoods</h2>
        <p>Old Town offers unbeatable atmosphere with Royal Mile proximity and castle views, though expect narrow staircases and tourist crowds. New Town provides elegant Georgian squares, upscale dining, and easier parking. Stockbridge and Dean Village deliver village-like charm with cafes and riverside walks, while Leith offers waterfront modernity with excellent restaurants at lower prices.</p>
      </section>
      
      <section className="cta">
        <button>Browse our curated selection of romantic Edinburgh apartments and start planning your Scottish escape today—your perfect couples' retreat awaits in this magical city.</button>
      </section>
    </div>
  );
}
