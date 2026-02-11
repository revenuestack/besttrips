export const metadata = {
  title: "Best Luxury Apartments in Brussels: Premium Serviced Stays in Belgium's Capital",
  description: "Discover Brussels' finest luxury apartments. From European Quarter elegance to Grand Place grandeur, find your perfect high-end serviced stay in the heart of Belgium.",
};

export default function Page() {
  const content = {
    hook: "Brussels' luxury apartment scene combines European sophistication with Belgian charm, offering discerning travelers spacious, design-forward accommodations in the heart of Europe's capital. From penthouse suites overlooking the Grand Place to contemporary lofts in the European Quarter, these premium properties deliver hotel-caliber service with the privacy and flexibility of a private residence.",
    highlights: [
      "Prime locations near Grand Place, Sablon district, and European institutions with walking access to world-class dining and cultural attractions",
      "Spacious layouts with full kitchens, designer furnishings, and luxury amenities like underfloor heating, smart home systems, and premium appliances",
      "Concierge services, daily housekeeping options, and private parking—combining residential comfort with five-star hotel conveniences",
      "Access to Art Nouveau architecture districts, Michelin-starred restaurants, and exclusive chocolate ateliers from your doorstep"
    ],
    considerations: [
      "Brussels' cobblestone streets and historic buildings mean some luxury apartments occupy older structures with charming quirks like narrow staircases, though most feature modern elevators",
      "Peak EU Parliament session weeks (typically monthly) drive higher rates and reduced availability in the European Quarter—book early for those periods"
    ],
    location_context: "Brussels blends medieval grandeur with modern European power, where Gothic spires meet glass EU headquarters. The city's compact center means luxury apartments place you within minutes of UNESCO sites, world-renowned dining, and efficient public transit connecting to Bruges and Antwerp.",
    cta: "Explore Brussels' finest luxury apartments and secure your sophisticated Belgian base today—where European elegance meets modern comfort."
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
