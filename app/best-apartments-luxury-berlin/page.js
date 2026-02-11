export const metadata = {
  title: "Best Luxury Apartments in Berlin: Premium Serviced Rentals & Designer Stays 2026",
  description: "Discover Berlin's finest luxury apartments. Curated serviced rentals in Mitte, Charlottenburg & Prenzlauer Berg with designer interiors and concierge service.",
};

export default function Page() {
  const content = {
    hook: "Berlin's luxury apartment scene offers discerning travelers an elevated alternative to traditional hotels. From converted historic townhouses in Charlottenburg to sleek penthouses overlooking Museum Island, the city's premium serviced apartments blend Berlin's creative edge with five-star amenities, spacious layouts, and the privacy of your own residence.",
    highlights: [
      "Designer interiors by renowned German architects featuring floor-to-ceiling windows, premium appliances, and curated art collections",
      "Prime locations in Mitte, Charlottenburg, and Prenzlauer Berg—walking distance to cultural landmarks, Michelin-starred dining, and boutique shopping",
      "Full-service amenities including 24/7 concierge, in-apartment spa treatments, private chefs, and dedicated housekeeping",
      "Spacious living areas (80-250+ sqm) with fully equipped kitchens, work spaces, and often private terraces or balconies"
    ],
    considerations: [
      "Minimum stay requirements typically range from 3-7 nights, particularly during high season and major events like Berlin Art Week",
      "Book 2-3 months ahead for peak periods (September-October, Christmas markets); many properties require advance wire transfers for reservations"
    ],
    location_context: "Berlin's luxury apartments cluster in historic Charlottenburg near Kurfürstendamm's shopping district, central Mitte for museum access, and trendy Prenzlauer Berg for its village atmosphere. Each neighborhood offers distinct character while maintaining excellent public transport connections.",
    cta: "Browse our curated selection of Berlin's most exclusive apartments and secure your designer sanctuary in Germany's dynamic capital."
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
