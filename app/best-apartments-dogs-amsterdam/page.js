export const metadata = {
  title: "Best Dog-Friendly Apartments in Amsterdam: Your Pet's Perfect Stay",
  description: "Discover the best dog-friendly apartments in Amsterdam. From canal-side stays to park-adjacent homes, find the perfect accommodation for you and your furry companion."
};

export default function GuidePage() {
  return (
    <div className="guide-page">
      <section className="hook">
        <p>Amsterdam's charming canals and abundant green spaces make it a paradise for travelers with dogs, and choosing the right apartment can transform your visit into an unforgettable adventure for both you and your four-legged friend.</p>
      </section>
      
      <section className="why-choose">
        <h2>Why Choose This</h2>
        <ul>
          <li>Amsterdam's compact size and walkable neighborhoods mean your dog can explore cobblestone streets, waterfront paths, and numerous parks like Vondelpark and Westerpark within minutes of most apartments</li>
          <li>Many Amsterdam apartments feature ground-floor access, private gardens, or nearby dog relief areas, eliminating the hassle of navigating narrow staircases with your pet</li>
          <li>Dog-friendly cafes and restaurants dot every neighborhood, allowing you to enjoy Dutch culture without leaving your pup behind</li>
        </ul>
      </section>
      
      <section className="considerations">
        <h2>Considerations</h2>
        <ul>
          <li>Check apartment policies carefully as some limit dog size or breed, and always inquire about additional pet fees or deposits before booking</li>
          <li>Amsterdam's bikes are everywhere—ensure your dog is comfortable with cycling traffic and consider apartments in quieter residential areas if your pet is nervous</li>
        </ul>
      </section>
      
      <section className="neighborhoods">
        <h2>Neighborhoods</h2>
        <p>De Pijp offers dog-friendly terraces and Sarphatipark nearby, while Jordaan provides quieter canals and boutique charm. For maximum green space, consider apartments near Westerpark or Oosterpark, where your dog can run freely in designated off-leash areas.</p>
      </section>
      
      <section className="cta">
        <button>Book your dog-friendly Amsterdam apartment today and discover why the Dutch capital is one of Europe's most welcoming cities for traveling with pets.</button>
      </section>
    </div>
  );
}
