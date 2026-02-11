export const metadata = {
  title: "Best Budget Guesthouses in London: Affordable Stays in the Heart of the City",
  description: "Discover London's top budget guesthouses offering comfort, charm, and unbeatable value. Perfect for savvy travelers exploring the capital on a budget.",
};

export default function Page() {
  const content = {
    hook: "London doesn't have to break the bank. The city's budget guesthouses offer a charming alternative to expensive hotels, combining cozy accommodations with authentic local hospitality. From Victorian townhouses in Bloomsbury to family-run establishments near King's Cross, these affordable gems provide clean, comfortable rooms and often include complimentary breakfast—giving you more pounds to spend on experiences rather than just a place to sleep.",
    highlights: [
      "Authentic local experience with personalized service from hosts who know London inside out",
      "Prime locations near major transport links, making attractions easily accessible without expensive cab rides",
      "Complimentary breakfast included at most guesthouses, saving you £8-12 per day",
      "Homey atmosphere with communal spaces perfect for meeting fellow travelers and sharing tips"
    ],
    considerations: [
      "Rooms are typically smaller than standard hotels and may have shared bathroom facilities",
      "Book well in advance during peak season (June-September) as the best budget spots fill up quickly"
    ],
    location_context: "Budget guesthouses cluster in neighborhoods like King's Cross, Paddington, Earl's Court, and Bayswater—areas with excellent Tube connections that put you within 20 minutes of major sights while maintaining lower accommodation costs than central zones.",
    cta: "Ready to experience London without the luxury price tag? Browse our curated selection of budget guesthouses and book your affordable London adventure today."
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
