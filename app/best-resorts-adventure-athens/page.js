export const metadata = {
  title: "Best Resorts for Adventure Seekers in Athens, Greece | 2026 Guide",
  description: "Discover top Athens resorts perfect for adventure travelers. From coastal water sports to mountain hiking bases, find your ideal active getaway in Greece.",
};

export default function Page() {
  const content = {
    hook: "Athens isn't just ancient ruins and museums—it's an adventure playground where history meets adrenaline. The best resorts for adventure seekers position you perfectly between the azure Aegean Sea and rugged mountain trails, offering luxury relaxation after days filled with rock climbing, diving, and coastal exploration.",
    highlights: [
      "Direct access to Athens Riviera water sports including kitesurfing, scuba diving, and sea kayaking to hidden coves",
      "Proximity to Mount Parnitha and Hymettus for hiking, mountain biking, and rock climbing expeditions",
      "Organized adventure packages including day trips to Cape Sounion cliff diving spots and Saronic Gulf island hopping",
      "On-site facilities like climbing walls, bike rentals, and partnerships with local adventure tour operators"
    ],
    considerations: [
      "Summer months (June-August) offer best water conditions but higher prices; shoulder seasons provide ideal hiking temperatures",
      "Resorts in Vouliagmeni and Glyfada areas offer better adventure access than central Athens locations"
    ],
    location_context: "Athens' coastal suburbs stretch along the Apollo Coast, where dramatic cliffs meet crystalline waters. Within 30-60 minutes, you'll reach everything from wreck diving sites to mountain trails with Acropolis views, making resort-based adventure touring incredibly efficient.",
    cta: "Ready to combine ancient exploration with modern adventure? Book your Athens resort base camp today and start planning your action-packed Greek getaway."
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
