export const metadata = {
  title: "Best B&Bs for Groups in Madrid: Cozy Stays for Friends & Families",
  description: "Discover the best bed and breakfasts in Madrid perfect for groups. Spacious rooms, authentic Spanish hospitality, and central locations near top attractions.",
};

export default function Page() {
  const content = {
    hook: "Planning a group trip to Madrid? Bed and breakfasts offer the perfect blend of affordability, authentic local charm, and communal spaces that hotels can't match. Madrid's B&Bs welcome groups with spacious multi-bed rooms, homemade breakfasts featuring Spanish tortilla and fresh pastries, and hosts who share insider tips about the city's hidden gems.",
    highlights: [
      "Multi-room suites and connecting rooms ideal for keeping groups together while maintaining privacy",
      "Homemade Spanish breakfasts with local specialties, often included in affordable nightly rates",
      "Personal recommendations from local hosts on tapas bars, flamenco shows, and off-the-beaten-path neighborhoods",
      "Central locations in Malasaña, La Latina, and Chueca with easy metro access to major attractions"
    ],
    considerations: [
      "Book well in advance during peak season (April-June, September-October) as group-friendly B&Bs fill quickly",
      "Some historic buildings lack elevators—confirm accessibility needs when booking for larger or mobility-limited groups"
    ],
    location_context: "Madrid's best group B&Bs cluster in walkable neighborhoods like artsy Malasaña, tapas-rich La Latina, and vibrant Chueca. Most sit within 15 minutes of Puerta del Sol, offering authentic residential experiences while keeping you close to the Prado, Retiro Park, and legendary food markets.",
    cta: "Ready to experience Madrid like a local? Browse our curated selection of group-friendly B&Bs and book your perfect home base for exploring Spain's captivating capital."
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
