export const metadata = {
  title: "Best Hotels for Solo Travelers in Lyon: Safe, Social & Central Stays",
  description: "Discover Lyon's top hotels for solo travelers. Find safe, centrally-located accommodations with social spaces perfect for independent explorers in France's culinary capital.",
};

export default function Page() {
  const content = {
    hook: "Lyon welcomes solo travelers with open arms, offering a perfect blend of walkable neighborhoods, world-class cuisine, and friendly locals. The city's compact size makes it ideal for independent exploration, while its vibrant hostel and boutique hotel scene provides plenty of opportunities to meet fellow travelers or enjoy peaceful solitude on your own terms.",
    highlights: [
      "Presqu'île district hotels offer walking access to museums, restaurants, and riverside paths—perfect for solo exploration without transportation worries",
      "Many properties feature communal breakfast areas and co-working spaces where solo travelers naturally connect",
      "Lyon's exceptional public transit system and bike-sharing program make it easy to venture confidently throughout the city",
      "The city's reputation for safety and English-friendly hospitality creates a comfortable environment for first-time solo travelers"
    ],
    considerations: [
      "Book accommodations near metro stops in Presqu'île or Croix-Rousse for easy evening returns after exploring",
      "Summer and September see peak tourism—reserve early and expect higher prices during food festivals"
    ],
    location_context: "Lyon straddles the Rhône and Saône rivers, with the Presqu'île peninsula serving as the beating heart for visitors. The historic Vieux Lyon and hilltop Fourvière basilica lie west, while the trendy Croix-Rousse neighborhood cascades down slopes to the north.",
    cta: "Ready to explore Lyon on your terms? Browse our curated selection of solo-friendly hotels and start planning your French adventure today."
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
