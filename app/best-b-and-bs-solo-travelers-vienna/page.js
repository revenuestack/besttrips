export const metadata = {
  title: "Best B&Bs for Solo Travelers in Vienna: Charming Stays in Austria's Capital",
  description: "Discover Vienna's top B&Bs perfect for solo travelers. Cozy accommodations, social atmospheres, and authentic local experiences in the heart of Austria.",
};

export default function Page() {
  const content = {
    hook: "Vienna's bed and breakfast scene offers solo travelers the perfect blend of independence and community. These intimate guesthouses provide comfortable private rooms while fostering connections through shared breakfast tables and insider local knowledge from passionate hosts who know every hidden café and concert hall in the city.",
    highlights: [
      "Social breakfast settings where solo travelers naturally connect with fellow guests and exchange Vienna tips",
      "Personalized local recommendations from Austrian hosts who share neighborhood secrets and cultural insights",
      "Charming historic buildings in central districts like Neubau and Josefstadt, within walking distance of major attractions",
      "Budget-friendly rates compared to hotels, often including homemade Austrian breakfast with fresh pastries and coffee"
    ],
    considerations: [
      "Book well in advance during peak season (April-October) and during ball season (January-February) when Vienna fills quickly",
      "Most B&Bs require cash payment or bank transfer rather than credit cards, so plan accordingly"
    ],
    location_context: "Vienna's B&Bs cluster in walkable neighborhoods near the Ringstrasse boulevard, offering easy access to imperial palaces, coffeehouse culture, and efficient public transit. The U-Bahn metro system connects you to everything from Schönbrunn Palace to the vibrant Naschmarkt.",
    cta: "Ready to experience Vienna like a local? Browse our curated selection of solo-friendly B&Bs and book your authentic Austrian adventure today."
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
