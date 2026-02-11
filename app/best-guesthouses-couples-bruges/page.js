export const metadata = {
  title: "Best Guesthouses for Couples in Bruges: Romantic Stays in Belgium's Fairytale City",
  description: "Discover intimate guesthouses perfect for couples in Bruges. Charming canal-side retreats, historic architecture, and romantic ambiance await in Belgium's most enchanting city.",
};

export default function Page() {
  const content = {
    hook: "Bruges weaves its medieval magic through cobblestone lanes and dreamlike canals, making it one of Europe's most romantic destinations. For couples seeking intimate accommodations beyond cookie-cutter hotels, the city's guesthouses offer personalized charm, historic character, and that cozy atmosphere perfect for romantic escapes. These carefully restored homes blend Flemish authenticity with modern comfort, often featuring period furnishings, canal views, and hosts who share insider tips you won't find in guidebooks.",
    highlights: [
      "Intimate settings with typically 3-6 rooms ensure privacy and personalized attention from dedicated hosts",
      "Prime locations in the historic center put you steps from candlelit restaurants, chocolate shops, and scenic canal walks",
      "Unique character with exposed beams, original fireplaces, and antique furnishings creating authentic medieval ambiance",
      "Better value than luxury hotels while offering homemade breakfasts and local recommendations that enhance your romantic experience"
    ],
    considerations: [
      "Most guesthouses occupy historic buildings with steep staircases and no elevators—pack light and confirm room location when booking",
      "Advance reservations essential during peak season (April-October) and weekends, as the best romantic spots fill quickly"
    ],
    location_context: "Bruges' compact historic center is a UNESCO World Heritage site where every guesthouse puts you within walking distance of the Markt square, Belfry tower, and romantic canal-boat launches. The quieter eastern neighborhoods offer tranquil canal views while remaining just 10 minutes from the action.",
    cta: "Ready to experience Bruges' romantic magic? Browse our curated selection of couple-friendly guesthouses and start planning your fairytale escape to Belgium's most enchanting city."
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
