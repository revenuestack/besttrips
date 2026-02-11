export const metadata = {
  title: "Best Luxury Apartments in Florence: Premium Rentals in the Heart of Tuscany",
  description: "Discover Florence's finest luxury apartments. Stay in historic palazzos with modern amenities, rooftop terraces, and unbeatable locations near iconic landmarks.",
};

export default function Page() {
  const content = {
    hook: "Florence's luxury apartment scene offers discerning travelers an intimate alternative to hotels, combining Renaissance grandeur with contemporary comfort. These carefully curated properties place you in the heart of Tuscan elegance, where frescoed ceilings meet designer kitchens and private terraces overlook terracotta rooftops.",
    highlights: [
      "Restored historic palazzos with original architectural details including exposed beams, marble floors, and antique furnishings",
      "Prime locations within walking distance of the Duomo, Uffizi Gallery, Ponte Vecchio, and artisan workshops",
      "Premium amenities including fully equipped gourmet kitchens, air conditioning, high-speed WiFi, and concierge services",
      "Exclusive features like private terraces, rooftop access, wine cellars, and panoramic views of Florence's iconic skyline"
    ],
    considerations: [
      "Many luxury apartments are in historic buildings without elevators—confirm accessibility needs before booking",
      "Peak season (April-October) requires booking 3-6 months in advance, with minimum stays often required during high demand"
    ],
    location_context: "Florence's luxury apartments concentrate in Centro Storico, particularly around Santo Spirito, Santa Croce, and near Piazza della Signoria. These neighborhoods offer authentic Florentine living with immediate access to world-class museums, Michelin-starred dining, and centuries-old markets.",
    cta: "Book your Florence luxury apartment today and experience la dolce vita in unparalleled Renaissance surroundings."
  };

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <p className="text-lg mb-6">{content.hook}</p>
      
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Highlights</h2>
        <ul className="space-y-3">
          {content.highlights.map((item, i) => (
            <li key={i} className="flex gap-3">
              <span className="text-green-600 font-bold">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Things to Know</h2>
        <ul className="space-y-3">
          {content.considerations.map((item, i) => (
            <li key={i} className="flex gap-3">
              <span className="text-amber-600 font-bold">⚠</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Location Context</h2>
        <p className="text-gray-700">{content.location_context}</p>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg">
        <p className="text-lg font-semibold text-center">{content.cta}</p>
      </section>
    </article>
  );
}
