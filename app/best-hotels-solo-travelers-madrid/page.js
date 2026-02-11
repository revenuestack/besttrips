export const metadata = {
  title: "Best Hotels for Solo Travelers in Madrid: Safe, Social & Central Stays",
  description: "Discover Madrid's best hotels for solo travelers. Safe neighborhoods, social atmospheres, and prime locations near top attractions. Book your solo adventure.",
};

export default function Page() {
  const content = {
    hook: "Madrid welcomes solo travelers with open arms, offering a perfect blend of safety, vibrant culture, and walkable neighborhoods. The city's best hotels for independent explorers combine strategic locations in districts like Malasaña, Chueca, and Sol with social common areas where you'll easily connect with fellow travelers. Whether you're drawn to boutique hostels with private rooms, design hotels near Gran Vía, or cozy stays in La Latina's tapas district, Madrid's accommodation scene caters specifically to those exploring alone.",
    highlights: [
      "Central locations in safe, walkable neighborhoods with 24/7 activity and excellent public transport connections",
      "Social common areas, organized tours, and communal dining spaces perfect for meeting other travelers",
      "Solo-friendly amenities including secure luggage storage, concierge assistance, and local insider tips",
      "Easy access to Madrid's tapas bars, museums, and nightlife—designed for exploring independently"
    ],
    considerations: [
      "Book accommodations in central districts like Sol, Malasaña, or Chueca for the best solo travel experience and safety",
      "Summer months (July-August) see higher prices and crowds; consider visiting in spring or fall for better rates"
    ],
    location_context: "Madrid's compact city center makes it ideal for solo exploration. The metro system connects all major neighborhoods efficiently, and most attractions are within walking distance of central hotels. Areas like Chueca offer LGBTQ+ friendly vibes, while Malasaña pulses with artistic energy and café culture.",
    cta: "Ready to explore Madrid solo? Compare hotel rates and book your independent Spanish adventure today."
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
