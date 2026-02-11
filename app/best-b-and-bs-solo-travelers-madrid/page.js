export const metadata = {
  title: "Best B&Bs for Solo Travelers in Madrid: Cozy Stays in Spain's Capital",
  description: "Discover Madrid's top B&Bs perfect for solo travelers. Affordable, social, and authentic accommodations in vibrant neighborhoods near major attractions.",
};

export default function Page() {
  const content = {
    hook: "Madrid's bed and breakfasts offer solo travelers the perfect blend of affordability, local charm, and built-in social opportunities. Unlike impersonal hotels, these intimate guesthouses provide genuine connections with hosts who know the city inside out, plus fellow travelers eager to explore together. Wake up to homemade Spanish breakfasts, get insider tips on hidden tapas bars, and enjoy the comfort of a home away from home while maintaining your independence.",
    highlights: [
      "Personal attention from local hosts who share authentic Madrid recommendations and neighborhood secrets",
      "Social breakfast settings that naturally facilitate connections with other solo adventurers",
      "Prime locations in walkable neighborhoods like Malasaña, Chueca, and La Latina with excellent public transport",
      "Significantly lower costs than hotels while offering more character and cultural immersion"
    ],
    considerations: [
      "Book early during peak season (May-October) as the best B&Bs fill quickly with limited rooms",
      "Confirm English proficiency if needed, though most hosts in central areas speak conversational English"
    ],
    location_context: "Madrid's best B&Bs cluster in bohemian Malasaña and LGBTQ-friendly Chueca, both brimming with cafés, vintage shops, and nightlife. La Latina offers traditional charm near the Rastro flea market, while Lavapiés provides multicultural vibes and budget-friendly options.",
    cta: "Ready to experience Madrid like a local? Browse our curated B&B selections and book your solo adventure today."
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
