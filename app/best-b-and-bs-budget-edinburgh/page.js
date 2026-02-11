export const metadata = {
  title: "Best Budget B&Bs in Edinburgh: Affordable Stays Near Historic Attractions",
  description: "Discover charming budget B&Bs in Edinburgh offering authentic Scottish hospitality, hearty breakfasts, and easy access to the Royal Mile and Arthur's Seat.",
};

export default function Page() {
  const content = {
    hook: "Edinburgh's budget B&Bs deliver authentic Scottish hospitality without the premium price tag. These family-run accommodations offer more than just a place to sleep—expect hearty traditional breakfasts, insider tips from local hosts, and that warm welcome that makes Scotland famous. Staying in a B&B means experiencing Edinburgh like a local while keeping your travel budget intact for exploring castles, sampling whisky, and climbing Arthur's Seat.",
    highlights: [
      "Traditional Scottish breakfasts included, often featuring haggis, black pudding, and fresh-baked goods that fuel a full day of sightseeing",
      "Personal recommendations from knowledgeable hosts who share hidden gems, best pub routes, and money-saving tips tourists typically miss",
      "Prime locations in residential neighborhoods like Newington and Marchmont offer quieter stays while remaining within walking distance or a short bus ride to the Royal Mile",
      "Significant savings compared to hotels—budget B&Bs typically cost £40-70 per night with breakfast included, leaving more funds for attractions and experiences"
    ],
    considerations: [
      "Many budget B&Bs are in traditional tenement buildings with steep stairs and no elevator access—confirm ground-floor availability if needed",
      "Shared bathroom facilities are common at lower price points, though rooms are typically clean and well-maintained with Victorian or Edwardian charm"
    ],
    location_context: "Edinburgh's budget B&Bs cluster in walkable neighborhoods south of the city center, particularly around Newington, Bruntsfield, and Leith. These areas offer excellent bus connections to Old Town attractions while providing access to local cafes, supermarkets, and parks where residents actually live.",
    cta: "Book your Edinburgh B&B early, especially during Festival season (August) when these popular budget options fill quickly. Compare locations based on your must-see attractions and don't hesitate to contact hosts directly for the best rates."
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
