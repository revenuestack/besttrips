export const metadata = {
  title: "Best Dog-Friendly Hotels in Prague: Pet-Welcoming Stays in the Czech Capital",
  description: "Discover Prague's top dog-friendly hotels offering premium pet amenities, central locations, and tail-wagging service. Book your perfect stay with your furry companion.",
};

export default function Page() {
  const content = {
    hook: "Prague welcomes four-legged travelers with open arms, offering a growing selection of hotels that treat your dog like royalty. From baroque palaces to modern boutiques, the Czech capital's pet-friendly accommodations blend historic charm with thoughtful amenities designed specifically for canine guests.",
    highlights: [
      "Premium pet services including dog beds, bowls, treats, and dedicated concierge assistance",
      "Central locations near dog-friendly parks like Letná and Petřín Hill for easy morning walks",
      "Many hotels offer dog-sitting services and partnerships with local veterinarians",
      "Generous breed and size policies with minimal or no additional pet fees"
    ],
    considerations: [
      "Always confirm specific pet policies when booking, as weight limits and breed restrictions vary by property",
      "Prague requires dogs to be leashed in public spaces and cleaned up after; carry waste bags at all times"
    ],
    location_context: "Prague's compact city center makes it ideal for exploring with dogs. The historic districts of Malá Strana and Vinohrady feature cobblestone streets perfect for leisurely strolls, while the Vltava River embankment offers scenic walking paths. Most hotels cluster near Old Town and lesser-known neighborhoods where locals walk their pets daily.",
    cta: "Ready to explore Prague with your pup? Browse our curated selection of dog-friendly hotels and book your pet-perfect Czech adventure today."
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
