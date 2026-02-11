export const metadata = {
  title: "Best Adventure Hostels in Dublin: Top Budget Stays for Thrill Seekers 2026",
  description: "Discover Dublin's best hostels for adventure travelers. Budget-friendly stays near coastal hikes, nightlife, and outdoor activities. Book your base camp today!",
};

export default function Page() {
  const content = {
    hook: "Dublin isn't just about Guinness and literary history—it's a launchpad for adventure seekers craving coastal trails, mountain hikes, and vibrant nightlife. The city's top hostels cater to backpackers and thrill-seekers with social atmospheres, organized tours, and prime locations near both urban excitement and wild Irish landscapes.",
    highlights: [
      "Strategic locations near Howth Cliff Walk, Wicklow Mountains, and Phoenix Park for easy access to hiking and outdoor activities",
      "Social common areas and organized pub crawls, day trips, and adventure tours connecting you with fellow travelers",
      "Budget-friendly rates with free breakfast, bike rentals, and walking tour deals to maximize your adventure fund",
      "Central Temple Bar and O'Connell Street locations putting you steps from Dublin's legendary nightlife and live music scene"
    ],
    considerations: [
      "Book early during summer months (June-August) and St. Patrick's weekend when adventure-focused hostels fill up quickly",
      "Many hostels have age restrictions (18-35 or 18-40) to maintain the energetic, social vibe adventure travelers seek"
    ],
    location_context: "Dublin's hostel scene clusters around Temple Bar for nightlife enthusiasts and near Connolly Station for quick DART access to coastal adventures. The city sits between the Irish Sea and Wicklow Mountains, offering urban exploration by day and mountain or seaside escapes within 30-60 minutes by public transport.",
    cta: "Ready to make Dublin your adventure base camp? Browse top-rated hostels now and start planning your Irish expedition today!"
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
