export const metadata = {
  title: "Best Luxury Apartments in Budapest: Premium Stays in Hungary's Capital",
  description: "Discover Budapest's finest luxury apartments. From Danube-view penthouses to historic district gems, find your perfect upscale accommodation in Hungary's capital.",
};

export default function Page() {
  const content = {
    hook: "Budapest's luxury apartment scene offers discerning travelers the perfect blend of space, privacy, and five-star amenities. Unlike traditional hotels, these upscale residences provide a home-away-from-home experience in the heart of one of Europe's most elegant cities, where thermal baths meet Art Nouveau architecture along the majestic Danube.",
    highlights: [
      "Spacious layouts with full kitchens, separate living areas, and designer furnishings that rival boutique hotels",
      "Prime locations in Districts V (Belváros), I (Castle District), and VI (Terézvárosi), steps from iconic landmarks",
      "Panoramic views of the Danube, Parliament Building, and Buda Castle from private terraces and floor-to-ceiling windows",
      "Exclusive amenities including concierge services, private parking, spa facilities, and smart home technology"
    ],
    considerations: [
      "Book well in advance for peak season (May-September) and holiday periods when luxury properties fill quickly",
      "Many historic buildings lack elevators; confirm accessibility if staying in renovated 19th-century apartments"
    ],
    location_context: "Budapest straddles the Danube River, with Buda's hills and Castle District on the west bank and Pest's vibrant urban core on the east. Luxury apartments cluster in the city center, offering walkable access to Michelin-starred restaurants, ruin bars, thermal spas, and cultural attractions.",
    cta: "Ready to experience Budapest like a local aristocrat? Browse our curated selection of luxury apartments and secure your elegant Hungarian escape today."
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
