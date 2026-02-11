export const metadata = {
  title: "Best Hotels for Groups in Budapest: Top Accommodations for Group Travel 2026",
  description: "Discover the best group hotels in Budapest with spacious rooms, central locations, and group-friendly amenities. Perfect for families, friends, and tours.",
};

export default function Page() {
  const content = {
    hook: "Budapest's hospitality scene caters exceptionally well to group travelers, offering everything from boutique properties with interconnected suites to large-scale hotels with conference facilities and group dining options. Whether you're coordinating a family reunion, friends' getaway, or organized tour, the city's accommodation options combine affordability with prime locations near major attractions like the Chain Bridge, Parliament, and thermal baths.",
    highlights: [
      "Spacious multi-room suites and adjoining accommodations perfect for keeping groups together",
      "Central locations in Districts V, VI, and VII with easy access to public transport and walking distance to attractions",
      "Group-friendly amenities including breakfast buffets, meeting spaces, and on-site restaurants for coordinated dining",
      "Competitive group rates and booking flexibility for parties of 8+ guests"
    ],
    considerations: [
      "Book at least 3-4 months in advance for the best group rates and room availability, especially during peak summer months and holiday periods",
      "Many hotels require group deposits and have strict cancellation policies—clarify terms before booking and consider travel insurance"
    ],
    location_context: "Budapest's best group hotels cluster around Pest's central districts, offering proximity to Váci Street shopping, the Jewish Quarter's ruin bars, and easy metro access to Buda's Castle District and thermal baths.",
    cta: "Ready to book your Budapest group stay? Compare hotels, check availability, and secure group rates today for an unforgettable Hungarian experience."
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
