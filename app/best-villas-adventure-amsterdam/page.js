export const metadata = {
  title: "Best Villas for Adventure Seekers in Amsterdam | Unique Vacation Rentals",
  description: "Discover Amsterdam's top villas perfect for adventurers. Explore by bike, kayak canals, and return to your private retreat. Book your adventure base today!",
};

export default function Page() {
  const content = {
    hook: "Amsterdam isn't just canals and museums—it's a playground for adventurers seeking urban thrills and natural escapes. Staying in a private villa gives you the freedom to explore by bike at dawn, kayak historic waterways, and return to your own space to recharge for tomorrow's expedition.",
    highlights: [
      "Prime locations near bike paths, waterfront access, and adventure tour operators",
      "Private outdoor spaces perfect for storing bikes, kayaks, and gear",
      "Easy access to Amsterdamse Bos forest, beach towns, and cycling routes",
      "Spacious accommodations for groups planning multi-day adventure itineraries"
    ],
    considerations: [
      "Summer and spring offer the best weather for outdoor activities; book early for peak season",
      "Most villas are in residential neighborhoods—plan for 15-30 minute bike rides to city center"
    ],
    location_context: "Amsterdam's villa districts blend suburban tranquility with quick access to adventure. Neighborhoods like Amsterdam Noord offer waterfront properties near sailing clubs, while areas bordering Amsterdamse Bos provide instant forest access. The city's famous bike infrastructure means you're never far from urban exploration or countryside trails.",
    cta: "Ready to make Amsterdam your adventure headquarters? Browse our curated villas and start planning your active Dutch escape today!"
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
