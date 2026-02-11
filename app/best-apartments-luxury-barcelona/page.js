export const metadata = {
  title: "Best Luxury Apartments in Barcelona 2026 | Designer Stays in Gothic Quarter & Eixample",
  description: "Discover Barcelona's finest luxury apartments. Spacious designer accommodations in prime locations with rooftop terraces, concierge service, and authentic Catalan charm.",
};

export default function Page() {
  const content = {
    hook: "Barcelona's luxury apartment scene offers discerning travelers an intimate alternative to five-star hotels, combining the space and privacy of a private residence with world-class amenities. From Gothic Quarter penthouses with medieval stone walls to modernist Eixample flats featuring Gaudí-era details, these handpicked properties deliver authentic Catalan sophistication with contemporary comfort.",
    highlights: [
      "Spacious living areas with full kitchens, designer furnishings, and private terraces overlooking iconic Barcelona landmarks",
      "Prime locations in Eixample, Born, and Gothic Quarter—walk to Sagrada Família, La Rambla, and beach clubs in minutes",
      "Dedicated concierge service arranging private chefs, wine tours, yacht charters, and skip-the-line museum access",
      "Authentic architectural character: exposed brick, hydraulic tile floors, and original 19th-century features"
    ],
    considerations: [
      "Elevator access varies in historic buildings—confirm accessibility needs when booking older Gothic Quarter properties",
      "Minimum stay requirements (typically 3-7 nights) are common for luxury apartments, especially during peak season"
    ],
    location_context: "Barcelona's luxury apartments cluster in three prime zones: the elegant Eixample district with its wide boulevards and modernist architecture, the atmospheric Gothic Quarter where medieval charm meets boutique shopping, and the trendy Born neighborhood offering proximity to beaches and cutting-edge restaurants.",
    cta: "Ready to experience Barcelona like a local? Browse our curated collection of luxury apartments and secure your perfect home base in Catalunya's captivating capital."
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
