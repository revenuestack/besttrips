export const metadata = {
  title: "Best Villas for Groups in Dublin: Spacious Accommodations for Your Irish Adventure",
  description: "Discover the best group villas in Dublin. Spacious, central accommodations perfect for families, friends, and celebrations in Ireland's vibrant capital.",
};

export default function Page() {
  const content = {
    hook: "Dublin's charm extends far beyond its famous pubs and historic landmarks—it's a city best experienced together. For groups traveling to Ireland's capital, renting a villa offers the perfect blend of privacy, space, and authentic local living. Whether you're planning a family reunion, celebrating a milestone, or exploring with friends, Dublin's group villas provide a comfortable home base with room for everyone to gather, cook, and create memories.",
    highlights: [
      "Spacious living areas and multiple bedrooms accommodate 8-12+ guests comfortably, with full kitchens for group meals",
      "Prime locations in neighborhoods like Ballsbridge, Rathmines, and Drumcondrum offer easy access to city center attractions",
      "Cost-effective compared to multiple hotel rooms, with shared spaces that encourage quality time together",
      "Authentic Dublin living experience in residential neighborhoods with local markets, cafes, and parks nearby"
    ],
    considerations: [
      "Book well in advance for peak seasons (summer, St. Patrick's Day) as group villas fill quickly",
      "Dublin's compact city center is walkable, but villas in outlying neighborhoods may require taxis or public transport access"
    ],
    location_context: "Dublin seamlessly blends Georgian elegance with modern vibrancy. Most group villas sit in leafy residential areas within 15-30 minutes of Temple Bar, Trinity College, and the Guinness Storehouse, offering peaceful retreats after days exploring cobblestone streets, literary landmarks, and lively music venues.",
    cta: "Ready to gather your group? Browse our curated selection of Dublin villas and secure your Irish home away from home today."
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
