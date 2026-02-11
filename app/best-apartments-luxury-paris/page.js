export const metadata = {
  title: "Best Luxury Apartments in Paris: Exclusive Stays in the City of Light",
  description: "Discover Paris's finest luxury apartments. From Marais penthouses to Saint-Germain elegance, experience the City of Light like a true Parisian insider.",
};

export default function Page() {
  const content = {
    hook: "Paris reveals its most enchanting secrets when you live like a local—but with five-star refinement. The city's luxury apartments offer something grand hotels cannot: authentic Parisian life wrapped in opulence. Picture yourself sipping morning espresso on a private terrace overlooking the Seine, or returning after a day at the Louvre to your own marble-clad sanctuary with Eiffel Tower views.",
    highlights: [
      "Authentic Parisian living with hotel-level amenities and concierge services",
      "Prime locations in prestigious arrondissements: Le Marais, Saint-Germain, and the Golden Triangle",
      "Spacious layouts with full kitchens, multiple bedrooms, and private terraces—ideal for extended stays",
      "Historic Haussmannian architecture meets modern luxury: herringbone floors, chandeliers, and smart home technology"
    ],
    considerations: [
      "Book 3-6 months ahead for peak season (April-October) and premium properties in top neighborhoods",
      "Most luxury apartments require minimum 3-7 night stays; weekly rates offer better value than nightly"
    ],
    location_context: "Paris's luxury apartment scene centers on the Right Bank's 1st, 8th, and 16th arrondissements, plus the Left Bank's 6th and 7th. The Marais blends medieval charm with contemporary cool, Saint-Germain-des-Prés offers literary café culture, while the 16th provides residential elegance near the Trocadéro. Each neighborhood delivers that coveted Parisian blend of history, haute cuisine, and high fashion.",
    cta: "Browse our curated collection of Paris luxury apartments and secure your private Parisian address today."
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
