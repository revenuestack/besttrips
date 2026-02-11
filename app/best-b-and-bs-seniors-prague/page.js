export const metadata = {
  title: "Best B&Bs for Seniors in Prague: Comfortable & Accessible Stays in the Golden City",
  description: "Discover senior-friendly bed and breakfasts in Prague offering accessibility, comfort, and authentic Czech hospitality near historic attractions.",
};

export default function Page() {
  const content = {
    hook: "Prague's enchanting blend of Gothic architecture, rich history, and accessible charm makes it an ideal destination for senior travelers. The city's best bed and breakfasts combine authentic Czech hospitality with comfort-focused amenities, offering personalized service that larger hotels simply can't match. From cozy rooms in quiet neighborhoods to centrally located B&Bs within walking distance of Old Town Square, Prague's accommodations cater beautifully to mature travelers seeking both relaxation and cultural immersion.",
    highlights: [
      "Ground-floor rooms and elevator access available at many properties, ensuring easy mobility throughout your stay",
      "Homemade Czech breakfasts featuring fresh pastries, local cheeses, and accommodating dietary needs",
      "Attentive owners who provide insider tips, arrange transportation, and assist with restaurant reservations",
      "Peaceful locations in historic districts like Malá Strana and Vinohrady, away from crowded tourist zones yet close to tram lines"
    ],
    considerations: [
      "Prague's cobblestone streets can be challenging; choose B&Bs near metro or tram stations to minimize walking on uneven surfaces",
      "Book early for ground-floor or elevator-accessible rooms, as historic buildings may have limited availability"
    ],
    location_context: "Prague's compact historic center is remarkably walkable, with efficient public transportation connecting charming residential neighborhoods to major attractions like Prague Castle, Charles Bridge, and Wenceslas Square.",
    cta: "Browse our curated selection of senior-friendly B&Bs in Prague and book your comfortable Czech adventure today."
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
