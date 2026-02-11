export const metadata = {
  title: "Best Camping for Groups in Madrid: Top Campsites for Large Parties & Team Getaways",
  description: "Discover Madrid's best group camping spots near Sierra de Guadarrama. Spacious sites, shared facilities, and easy access to nature and city attractions.",
};

export default function Page() {
  const content = {
    hook: "Madrid offers an unexpected treasure for group adventurers: exceptional camping just minutes from Spain's vibrant capital. Nestled against the Sierra de Guadarrama mountains, the region's campsites blend accessibility with natural beauty, making them perfect for friend reunions, team-building retreats, or family gatherings seeking both outdoor adventure and cultural exploration.",
    highlights: [
      "Spacious group areas with dedicated zones for large tents, caravans, and shared cooking facilities that foster communal experiences",
      "Prime location between mountain trails and Madrid's world-class museums, tapas bars, and nightlife—adventure by day, culture by night",
      "Year-round mild climate with over 300 sunny days annually, ideal for flexible group scheduling and outdoor activities",
      "Excellent public transport connections allowing car-free exploration of both natural parks and the city center"
    ],
    considerations: [
      "Summer weekends book quickly—reserve group spaces 2-3 months ahead, especially for parties of 8 or more",
      "Daytime temperatures can exceed 35°C in July-August; spring and fall offer more comfortable group hiking conditions"
    ],
    location_context: "Madrid's camping options cluster around the northern Sierra de Guadarrama, 30-60 minutes from the city. These sites offer mountain access while maintaining proximity to Spain's capital, creating a unique dual experience unavailable in most European cities.",
    cta: "Ready to gather your crew? Explore Madrid's group-friendly campsites and start planning your unforgettable Spanish adventure today."
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
