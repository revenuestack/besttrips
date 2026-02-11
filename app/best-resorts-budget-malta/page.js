export const metadata = {
  title: "Best Budget Resorts in Malta: Affordable Mediterranean Getaways 2026",
  description: "Discover Malta's best budget resorts offering stunning Mediterranean views, pools, and amenities without breaking the bank. Perfect for value-conscious travelers.",
};

export default function Page() {
  const content = {
    hook: "Malta proves you don't need a luxury budget to enjoy resort-style living in the Mediterranean. The island's budget-friendly resorts deliver swimming pools, sea views, and comfortable accommodations at prices that leave room for exploring ancient temples, diving crystal-clear waters, and savoring fresh seafood. Many properties cluster around Bugibba, Qawra, and Mellieħa, offering easy beach access and local charm without the premium price tags of five-star competitors.",
    highlights: [
      "Pools and sea views at half the cost of luxury resorts, with many properties offering all-inclusive or half-board options",
      "Prime locations in Bugibba, Qawra, and Mellieħa Bay provide walking access to beaches, restaurants, and nightlife",
      "Family-friendly amenities including kids' clubs, entertainment programs, and spacious apartment-style units",
      "Easy access to Malta's historic sites, diving spots, and island-hopping ferries to Gozo and Comino"
    ],
    considerations: [
      "Budget resorts may have older furnishings and smaller rooms compared to luxury properties, though cleanliness and service remain good",
      "Peak summer season (July-August) sees significant price increases; visit May-June or September-October for the best deals"
    ],
    location_context: "Malta's northern coastline hosts the majority of budget resorts, particularly around the twin towns of Bugibba and Qawra. These lively areas offer rocky beaches, waterfront promenades, and abundant dining options, while Mellieħa Bay features Malta's longest sandy beach.",
    cta: "Browse budget resorts in Malta and lock in early booking discounts for your Mediterranean escape."
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
