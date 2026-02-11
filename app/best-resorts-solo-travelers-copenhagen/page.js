export const metadata = {
  title: "Best Resorts for Solo Travelers in Copenhagen: Boutique Stays & Social Hubs",
  description: "Discover Copenhagen's top resorts perfect for solo travelers. From design-forward hotels to social spaces, find your ideal Danish retreat with safety and style.",
};

export default function Page() {
  const content = {
    hook: "Copenhagen's resort scene caters exceptionally well to solo travelers, blending Scandinavian design with welcoming atmospheres that make it easy to explore independently or connect with fellow adventurers. From waterfront properties near Nyhavn to modern boutique hotels in Vesterbro, the city's accommodations offer the perfect balance of privacy and social opportunity.",
    highlights: [
      "Safe, walkable neighborhoods with 24/7 concierge services and solo-friendly amenities like bike rentals and guided city tours",
      "Design-forward spaces featuring communal areas, rooftop bars, and co-working lounges that encourage organic connections with other travelers",
      "Central locations near Copenhagen's metro and bike lanes, making independent exploration of Tivoli Gardens, Christiansborg Palace, and food markets effortless",
      "English-speaking staff and digital-first services including mobile check-in and local experience booking platforms"
    ],
    considerations: [
      "Copenhagen ranks among Europe's priciest cities—budget €150-300 per night for quality resort-style accommodations",
      "Summer (June-August) sees peak prices and crowds; consider shoulder seasons for better rates and a more intimate experience"
    ],
    location_context: "Copenhagen combines fairy-tale charm with cutting-edge sustainability, offering solo travelers a safe, bike-friendly city where hygge culture meets modern Scandinavian innovation along the waterfront and historic districts.",
    cta: "Book your Copenhagen solo adventure today and experience Nordic hospitality at its finest."
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
