export const metadata = {
  title: "Best Family Resorts in Barcelona: Beachfront Hotels & Kid-Friendly Stays 2026",
  description: "Discover Barcelona's top family resorts with pools, beach access, and kids' clubs. Perfect blend of Catalan culture and Mediterranean relaxation.",
};

export default function Page() {
  const content = {
    hook: "Barcelona brilliantly combines urban culture with Mediterranean beaches, making it an ideal destination for families seeking both adventure and relaxation. The city's family-friendly resorts offer the perfect base to explore Gaudí's architectural wonders, stroll Las Ramblas, and unwind on golden sands—all while keeping young travelers entertained.",
    highlights: [
      "Beachfront locations with direct access to Barcelona's pristine Mediterranean shores and supervised kids' clubs",
      "Proximity to major attractions like Park Güell, Sagrada Familia, and the Gothic Quarter—easily accessible via excellent public transport",
      "Resort amenities designed for families: multiple pools, children's entertainment programs, and spacious family suites",
      "On-site dining with kid-friendly menus featuring both international favorites and authentic Catalan cuisine"
    ],
    considerations: [
      "Summer months (June-August) see peak crowds and prices; consider shoulder seasons (April-May, September-October) for better value and weather",
      "Many resorts are located in beachfront areas like Barceloneta or Diagonal Mar, requiring 20-30 minutes to reach historic city center attractions"
    ],
    location_context: "Barcelona's coastal resorts sit along the Mediterranean, offering stunning sea views while remaining well-connected to the city's cultural heart. The neighborhoods of Barceloneta, Vila Olímpica, and Diagonal Mar provide safe, family-oriented environments with nearby parks, playgrounds, and waterfront promenades perfect for evening strolls.",
    cta: "Start planning your Barcelona family adventure today—compare resort amenities, check availability, and book your Mediterranean escape where culture meets coastal bliss."
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
