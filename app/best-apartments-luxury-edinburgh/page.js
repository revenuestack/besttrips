export const metadata = {
  title: "Best Luxury Apartments in Edinburgh: Stay in Style in Scotland's Capital",
  description: "Discover Edinburgh's finest luxury apartments. Spacious elegance in the Old Town, New Town, and West End with modern amenities and historic charm.",
};

export default function Page() {
  const content = {
    hook: "Edinburgh's luxury apartment scene offers discerning travelers the perfect blend of historic grandeur and contemporary comfort. From Georgian townhouses in the New Town to converted warehouses near the Royal Mile, these high-end serviced apartments provide more space, privacy, and authentic local living than traditional hotels—without sacrificing five-star amenities.",
    highlights: [
      "Prime locations in the Old Town, New Town, and West End—steps from Edinburgh Castle, Princes Street, and world-class dining",
      "Spacious layouts with fully-equipped designer kitchens, separate living areas, and often multiple bedrooms for families or groups",
      "High-end amenities including concierge services, premium linens, rainfall showers, and smart home technology",
      "Character-filled properties featuring original Georgian architecture, exposed stone walls, and period features with modern luxuries"
    ],
    considerations: [
      "Edinburgh's historic buildings often lack elevators—confirm accessibility if stairs are a concern, especially in Old Town properties",
      "Peak season (August Festival, Hogmanay) requires booking 6-12 months ahead, with rates doubling during major events"
    ],
    location_context: "Edinburgh's luxury apartments cluster in three prime areas: the UNESCO-listed Old Town offers medieval charm near major attractions; the elegant Georgian New Town provides refined sophistication; and the leafy West End delivers village-like tranquility with easy city access.",
    cta: "Ready to experience Edinburgh like a local? Browse our curated collection of luxury apartments and book your perfect Scottish retreat today."
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
