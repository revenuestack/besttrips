export const metadata = {
  title: "Best B&Bs for Adventure Seekers in Reykjavik, Iceland | Cozy Base Camps",
  description: "Discover top-rated B&Bs in Reykjavik perfect for adventure travelers. Close to hiking trails, Northern Lights tours, and Golden Circle expeditions.",
};

export default function Page() {
  const content = {
    hook: "Reykjavik's charming bed and breakfasts offer adventure seekers the perfect blend of Icelandic hospitality and strategic proximity to the country's most thrilling outdoor experiences. These cozy accommodations serve as your base camp between glacier hikes, volcano tours, and Northern Lights chases, with knowledgeable hosts who can point you toward hidden hot springs and lesser-known trails.",
    highlights: [
      "Local hosts with insider knowledge of best hiking trails, secret hot springs, and adventure tour operators",
      "Quick access to Golden Circle attractions, Thingvellir National Park, and departure points for glacier expeditions",
      "Hearty Icelandic breakfasts to fuel your day of exploration, often featuring homemade bread and local specialties",
      "Flexible check-in times accommodating late-night Northern Lights tours and early-morning whale watching departures"
    ],
    considerations: [
      "Book well in advance during peak adventure season (June-August and Northern Lights season September-March)",
      "Many B&Bs are in residential neighborhoods requiring a short drive or bus ride to downtown attractions"
    ],
    location_context: "Reykjavik serves as Iceland's adventure hub, with most major tours departing from the city. The compact capital sits just 45 minutes from Thingvellir National Park, where you can snorkel between tectonic plates, and offers easy access to South Coast waterfalls, black sand beaches, and the famous Golden Circle route.",
    cta: "Ready to experience Iceland's wild side? Book your adventure-ready Reykjavik B&B today and start planning your epic Nordic expedition."
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
