export const metadata = {
  title: "Best Luxury Hotels in Brussels: 5-Star Accommodations in Belgium's Capital",
  description: "Discover Brussels' finest luxury hotels. From historic grand palaces to contemporary design havens, find your perfect 5-star stay in the heart of Europe.",
};

export default function Page() {
  const content = {
    hook: "Brussels seamlessly blends old-world European elegance with contemporary sophistication, and its luxury hotel scene reflects this captivating duality. The Belgian capital's finest accommodations offer discerning travelers impeccable service, Michelin-starred dining, and privileged access to the city's most prestigious neighborhoods.",
    highlights: [
      "Historic grand hotels near the UNESCO-listed Grand Place, featuring Belle Époque architecture and royal heritage",
      "World-class spa facilities and Michelin-starred restaurants helmed by Belgium's celebrated chefs",
      "Prime locations in the European Quarter and chic Sablon district, walking distance to cultural landmarks",
      "Exclusive concierge services offering private chocolate tastings, brewery tours, and Art Nouveau architecture experiences"
    ],
    considerations: [
      "Peak season (April-September) requires booking 3-4 months in advance; summer festivals elevate rates significantly",
      "Many luxury properties occupy historic buildings with charming but occasionally compact room configurations"
    ],
    location_context: "Brussels' luxury hotels cluster around three key areas: the historic center near Grand Place, the elegant Avenue Louise shopping district, and the leafy European Quarter. Each offers distinct character while maintaining proximity to world-class museums, Art Nouveau masterpieces, and Belgium's legendary culinary scene.",
    cta: "Ready to experience Brussels in ultimate style? Compare rates and book your luxury Brussels hotel today to secure the finest rooms and exclusive benefits."
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
