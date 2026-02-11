export const metadata = {
  title: "Best Family Hotels in Berlin: Top Accommodations for Kids & Parents (2026)",
  description: "Discover the best family-friendly hotels in Berlin with spacious rooms, kid amenities, and central locations near top attractions. Perfect for your family vacation.",
};

export default function Page() {
  const content = {
    hook: "Berlin's family-friendly hotels combine space, convenience, and charm to make traveling with children effortless. From properties near Museum Island to accommodations steps from Tiergarten's playgrounds, the city offers diverse options where parents can relax while kids stay entertained. Many hotels feature connecting rooms, children's menus, and easy access to Berlin's excellent public transport network.",
    highlights: [
      "Spacious suite options and connecting rooms perfect for families of all sizes",
      "Prime locations near major attractions like the Zoo, Tiergarten, and family museums",
      "Kid-friendly amenities including play areas, children's breakfast buffets, and babysitting services",
      "Excellent public transportation access making it easy to explore with strollers and young children"
    ],
    considerations: [
      "Book early during school holidays and summer months when family-friendly properties fill quickly",
      "Consider hotels in Mitte or Charlottenburg for walkable access to parks and child-friendly restaurants"
    ],
    location_context: "Berlin's family-oriented hotels cluster around neighborhoods with green spaces and cultural attractions. Mitte offers proximity to museums and historic sites, while Charlottenburg provides a quieter atmosphere near the Zoological Garden. The efficient U-Bahn and S-Bahn systems connect all districts, making any central location workable for families.",
    cta: "Ready to find your perfect family base in Berlin? Compare rooms, amenities, and rates to book the ideal hotel for your family's German adventure today."
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
