export const metadata = {
  title: "Best Luxury Apartments in Athens: Premium Stays in Greece's Historic Capital",
  description: "Discover Athens' finest luxury apartments. Stay in style near the Acropolis with modern amenities, stunning views, and authentic Greek hospitality.",
};

export default function Page() {
  const content = {
    hook: "Athens seamlessly blends ancient grandeur with contemporary sophistication, and its luxury apartment offerings reflect this captivating duality. From neoclassical buildings in Kolonaki to sleek penthouses overlooking the Acropolis, the city's premium apartments provide discerning travelers with space, privacy, and an authentic Athenian lifestyle that hotels simply cannot match.",
    highlights: [
      "Panoramic Acropolis and Parthenon views from private terraces and floor-to-ceiling windows",
      "Prime locations in Plaka, Kolonaki, and Syntagma—steps from world-class dining, boutiques, and ancient sites",
      "Full kitchens, designer furnishings, and high-end amenities including marble bathrooms and smart home technology",
      "Personalized concierge services, from private chefs to yacht arrangements and archaeological tours"
    ],
    considerations: [
      "Book well in advance for summer season (June-September) when demand peaks and prices increase significantly",
      "Many historic buildings lack elevators; verify accessibility if staying in renovated neoclassical properties"
    ],
    location_context: "Athens' luxury apartments cluster in prestigious neighborhoods like Kolonaki, known for upscale shopping and embassy row elegance, and Plaka, where ancient streets meet boutique charm. The revitalized downtown areas near Syntagma Square offer walkability to museums, rooftop bars, and the Acropolis archaeological site.",
    cta: "Experience Athens like a local aristocrat—browse our curated collection of luxury apartments and secure your exclusive Athenian retreat today."
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
