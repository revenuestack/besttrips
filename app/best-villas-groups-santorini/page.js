export const metadata = {
  title: "Best Villas for Groups in Santorini: Luxury Stays with Caldera Views",
  description: "Discover the best group villas in Santorini with private pools, stunning caldera views, and spacious accommodations perfect for unforgettable Greek getaways.",
};

export default function Page() {
  const content = {
    hook: "Santorini's dramatic cliffside setting and legendary sunsets create the perfect backdrop for group getaways. The island's luxury villas offer expansive terraces, private infinity pools, and panoramic caldera views that transform any celebration into an extraordinary experience. Whether you're planning a friends' reunion, family vacation, or special celebration, Santorini's group villas combine traditional Cycladic architecture with modern amenities to accommodate your entire party in style.",
    highlights: [
      "Private infinity pools with unobstructed caldera and Aegean Sea views",
      "Spacious layouts with multiple bedrooms, living areas, and outdoor entertaining spaces",
      "Prime locations in Oia, Imerovigli, and Fira for easy access to restaurants and attractions",
      "Concierge services, private chefs, and customized experiences for your group"
    ],
    considerations: [
      "Book 6-12 months in advance for peak season (June-September) as premium villas fill quickly",
      "Many properties require steep stair access due to cliffside locations; confirm accessibility for all guests"
    ],
    location_context: "Santorini's volcanic caldera creates one of the world's most photographed landscapes. The western villages of Oia, Fira, and Imerovigli perch dramatically on cliffs 300 meters above the sea, offering iconic sunset views. Most group villas occupy these prime positions, providing privacy while keeping you minutes from cosmopolitan dining, boutique shopping, and the island's famous blue-domed churches.",
    cta: "Browse our curated selection of Santorini group villas and start planning your dream Greek island escape today."
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
