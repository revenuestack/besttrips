export const metadata = {
  title: "Best Apartments for Seniors in Munich: Accessible, Comfortable Stays in Bavaria's Capital",
  description: "Discover senior-friendly apartments in Munich with accessible features, central locations, and easy access to healthcare, public transport, and Bavarian charm.",
};

export default function Page() {
  const content = {
    hook: "Munich offers an ideal blend of old-world charm and modern convenience for senior travelers seeking comfortable, accessible apartments. The city's excellent public transportation, world-class healthcare facilities, and walkable neighborhoods make it particularly welcoming for older visitors. From quiet residential districts to centrally-located apartments near museums and parks, Munich provides safe, comfortable accommodations tailored to senior needs.",
    highlights: [
      "Excellent public transit with senior-friendly U-Bahn and tram systems featuring elevators and step-free access",
      "Proximity to top-rated healthcare facilities and English-speaking medical services",
      "Ground-floor and elevator-equipped apartments in safe, well-lit neighborhoods",
      "Easy access to cultural attractions, beautiful parks like the English Garden, and traditional beer gardens with accessible seating"
    ],
    considerations: [
      "Book apartments in central districts like Altstadt-Lehel or Schwabing for minimal walking distances to amenities",
      "Summer months (June-August) offer the best weather but higher prices; shoulder seasons provide comfortable temperatures and better value"
    ],
    location_context: "Munich's compact city center and efficient public transportation make it easy to explore without extensive walking. The Altstadt (Old Town), Maxvorstadt museum quarter, and leafy Schwabing district offer senior-friendly apartments near restaurants, pharmacies, and cultural sites. Most neighborhoods feature wide sidewalks, pedestrian zones, and accessible facilities.",
    cta: "Browse our curated selection of senior-friendly Munich apartments and start planning your comfortable Bavarian adventure today."
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
