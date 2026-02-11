export const metadata = {
  title: "Best Guesthouses for Families in Florence: Top Family-Friendly Stays 2026",
  description: "Discover the best family-friendly guesthouses in Florence. Spacious rooms, authentic Italian charm, and perfect locations near top attractions for your family trip.",
};

export default function Page() {
  const content = {
    hook: "Florence's guesthouses offer families an authentic alternative to hotels, combining the warmth of Italian hospitality with the space and flexibility growing families need. These carefully selected accommodations provide home-away-from-home comfort while keeping you connected to the city's Renaissance treasures.",
    highlights: [
      "Spacious multi-room suites and apartments perfect for families with children of all ages",
      "Personalized local recommendations from hosts who know the best family-friendly restaurants and gelaterias",
      "Kitchen facilities in many properties, ideal for preparing snacks and accommodating picky eaters",
      "Prime locations in residential neighborhoods offering authentic Florentine life while staying walkable to major sites like the Duomo and Uffizi Gallery"
    ],
    considerations: [
      "Many historic guesthouses lack elevators, so families with strollers should confirm accessibility before booking",
      "Summer temperatures can soar, so prioritize accommodations with air conditioning for comfortable family stays"
    ],
    location_context: "Florence's guesthouse scene thrives in charming neighborhoods like Santo Spirito and San Frediano, where families can experience local markets, artisan workshops, and neighborhood parks. These areas offer playgrounds, family trattorias, and quieter streets compared to the tourist-heavy center, while remaining within a 15-minute walk of major attractions.",
    cta: "Ready to experience Florence like a local family? Browse our curated selection of family-friendly guesthouses and book your authentic Tuscan adventure today."
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
