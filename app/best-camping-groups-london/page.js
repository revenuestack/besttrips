export const metadata = {
  title: "Best Camping for Groups in London: Top Sites for Group Adventures",
  description: "Discover the best group camping sites in London. From Lee Valley to Abbey Wood, find spacious pitches perfect for friends, families, and team getaways.",
};

export default function Page() {
  const content = {
    hook: "London might be famous for its urban sprawl, but the capital and its surroundings offer surprisingly excellent camping options for groups seeking outdoor adventure without leaving the city behind. Whether you're planning a family reunion, friends' weekend, or team-building retreat, London's group-friendly campsites combine natural settings with easy access to world-class attractions.",
    highlights: [
      "Lee Valley Campsite offers large group areas with facilities just minutes from central London, perfect for combining camping with sightseeing",
      "Abbey Wood Campsite provides spacious pitches for groups with excellent transport links to Greenwich and the city center",
      "Crystal Palace Caravan Club Site features group booking options in a park setting with stunning city views",
      "Most sites offer group discounts, shared facilities, and nearby pubs for evening gatherings"
    ],
    considerations: [
      "Book well in advance during peak season (May-September) as group spaces fill quickly, especially for weekends and school holidays",
      "Many London sites have minimum and maximum group sizes, typically accommodating 6-30 people, so confirm your numbers when booking"
    ],
    location_context: "London's camping scene clusters around green belt areas and parks on the city's edges, offering surprisingly peaceful settings while maintaining Zone 3-4 transport access. The Lee Valley Regional Park stretches north through Hackney and Waltham Forest, while southeastern options near Abbey Wood provide river and woodland settings.",
    cta: "Ready to pitch your tents? Check availability and book your group camping adventure in London today."
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
