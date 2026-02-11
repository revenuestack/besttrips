export const metadata = {
  title: "Best Guesthouses for Adventure Seekers in Florence, Italy | Authentic Stays Near Hiking & Outdoor Activities",
  description: "Discover top-rated guesthouses in Florence perfect for adventure travelers. Close to Tuscan trails, cycling routes, and outdoor activities with local charm.",
};

export default function Page() {
  const content = {
    hook: "Florence isn't just about Renaissance art and architecture—it's a gateway to Tuscan adventures. The best guesthouses for adventure seekers combine authentic Italian hospitality with prime access to hiking trails in the Apennines, cycling routes through Chianti vineyards, and rock climbing spots just outside the city. Stay in family-run establishments where hosts share insider tips on hidden gorges, mountain bike paths, and sunrise hikes to Fiesole, all while enjoying home-cooked meals and genuine local connections that hotels simply can't match.",
    highlights: [
      "Strategic locations near trailheads and outdoor activity hubs while staying close to Florence's historic center",
      "Local hosts who provide detailed maps, route suggestions, and equipment storage for bikes and hiking gear",
      "Authentic Tuscan experience with home-cooked breakfasts fueling your adventures, often featuring local ingredients",
      "Budget-friendly rates leaving more euros for guided climbing trips, bike rentals, and adventure excursions"
    ],
    considerations: [
      "Many guesthouses are in historic buildings with stairs and no elevators—pack light for easy mobility",
      "Book early during peak seasons (April-June, September-October) when adventure tourism and weather align perfectly"
    ],
    location_context: "Florence sits in a valley surrounded by hills and mountains, offering immediate access to outdoor adventures. The Mugello region north of the city features mountain biking and motorsports, while the Chianti hills to the south provide endless hiking and cycling through vineyards and medieval villages.",
    cta: "Ready to explore Florence beyond the museums? Book your adventure-friendly guesthouse today and discover Tuscany's wild side with local hosts who know every trail, climb, and hidden outdoor gem."
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
