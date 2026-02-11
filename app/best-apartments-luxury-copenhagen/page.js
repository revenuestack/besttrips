export const metadata = {
  title: "Best Luxury Apartments in Copenhagen: Premium Stays in Denmark's Capital",
  description: "Discover Copenhagen's finest luxury apartments. Experience Danish design, waterfront views, and world-class amenities in the heart of Scandinavia's most stylish city.",
};

export default function Page() {
  const content = {
    hook: "Copenhagen's luxury apartment scene combines Scandinavian minimalism with five-star sophistication. From converted warehouses overlooking Nyhavn's colorful canal to sleek penthouses in the fashionable Vesterbro district, the Danish capital offers discerning travelers private sanctuaries that blend hygge comfort with contemporary elegance.",
    highlights: [
      "Authentic Danish design featuring organic materials, clean lines, and curated furniture from iconic brands like Fritz Hansen and Hay",
      "Prime locations in historic Indre By, trendy Nørrebro, or waterfront Christianshavn, all within cycling distance of Tivoli Gardens and Strøget shopping",
      "Premium amenities including fully-equipped kitchens, spa-quality bathrooms, smart home technology, and concierge services",
      "Privacy and space that hotels can't match, with separate living areas, laundry facilities, and balconies or terraces"
    ],
    considerations: [
      "Copenhagen's luxury apartments book quickly during summer and December holidays—reserve 2-3 months ahead for best selection",
      "Minimum stays of 3-7 nights are common, and prices reflect Copenhagen's status as one of Europe's most expensive cities"
    ],
    location_context: "Copenhagen seamlessly blends fairy-tale charm with cutting-edge culture. Its compact, bike-friendly layout means luxury apartments in any neighborhood put you minutes from Michelin-starred restaurants, design boutiques, and waterfront promenades. The city's commitment to sustainability and quality of life creates an atmosphere of refined urban living.",
    cta: "Browse Copenhagen's most exclusive apartment rentals and secure your design-forward Danish retreat today."
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
