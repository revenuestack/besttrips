export const metadata = {
  title: "Best Villas for Seniors in Lyon, France | Comfortable & Accessible Stays",
  description: "Discover senior-friendly villas in Lyon offering accessibility, comfort, and proximity to healthcare. Enjoy France's gastronomic capital at your own pace.",
};

export default function Page() {
  const content = {
    hook: "Lyon offers the perfect blend of French elegance and accessible comfort for senior travelers seeking a villa retreat. This historic city combines world-class gastronomy, rich Renaissance architecture, and a more relaxed pace than Paris, making it ideal for those who want to savor France without the hustle. Private villas provide the space, privacy, and amenities that make extended stays truly comfortable.",
    highlights: [
      "Single-level villas with accessible layouts, grab bars, and walk-in showers designed for mobility and safety",
      "Proximity to excellent healthcare facilities including modern hospitals and English-speaking medical services",
      "Easy access to Lyon's UNESCO-listed Old Town, riverside walks, and cultural sites without overwhelming tourist crowds",
      "Full kitchens allowing dietary control, plus proximity to fresh markets and world-renowned local cuisine"
    ],
    considerations: [
      "Lyon's historic Vieux Lyon has charming cobblestone streets that may be challenging for those with limited mobility; opt for villas in flatter neighborhoods like Confluence or Part-Dieu",
      "Summer temperatures can reach 30°C (86°F); ensure your villa has air conditioning and book spring or fall for milder weather"
    ],
    location_context: "Lyon sits at the confluence of the Rhône and Saône rivers in east-central France. The third-largest city offers excellent public transport, walkable neighborhoods, and a culinary scene that rivals Paris without the stress.",
    cta: "Browse our curated selection of senior-friendly villas in Lyon and start planning your comfortable French getaway today."
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
