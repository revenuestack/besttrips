export const metadata = {
  title: "Best Hotels for Adventure Seekers in Edinburgh, Scotland | Your Highland Base",
  description: "Discover Edinburgh's top adventure hotels near hiking trails, climbing spots, and outdoor activities. Perfect basecamp for exploring Scotland's rugged landscapes.",
};

export default function Page() {
  const content = {
    hook: "Edinburgh isn't just cobblestone streets and castles—it's your gateway to Scotland's wildest adventures. The city's best hotels for thrill-seekers put you within striking distance of Arthur's Seat volcano hikes, coastal cliff walks, mountain biking trails in the Pentland Hills, and rock climbing at Salisbury Crags. Whether you're summiting peaks at dawn or exploring hidden gorges, these accommodations understand that adventurers need more than just a bed—they need gear storage, hearty breakfasts, and staff who know the best trails.",
    highlights: [
      "Prime access to Arthur's Seat, Pentland Hills, and coastal trails within 15-30 minutes",
      "Properties offering bike storage, drying rooms, and early breakfast for sunrise expeditions",
      "Knowledgeable staff providing trail maps, weather updates, and local adventure recommendations",
      "Central locations balancing outdoor access with evening entertainment in Edinburgh's vibrant neighborhoods"
    ],
    considerations: [
      "Summer (June-August) books fast—reserve adventure-focused hotels 2-3 months ahead for best availability",
      "Weather changes rapidly in Scottish highlands—choose hotels with flexible check-in for delayed returns from trails"
    ],
    location_context: "Edinburgh uniquely combines urban culture with immediate wilderness access. Arthur's Seat, an extinct volcano, rises 823 feet right in the city center, while the Pentland Hills Regional Park offers 90 square kilometers of hiking and biking just 30 minutes away. The city serves as an ideal basecamp for day trips to Highland glens and coastal adventures.",
    cta: "Book your Edinburgh adventure hotel now and wake up ready to conquer Scotland's legendary landscapes."
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
