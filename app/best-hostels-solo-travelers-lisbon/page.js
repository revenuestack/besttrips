export const metadata = {
  title: "Best Hostels for Solo Travelers in Lisbon: Social Stays & Budget-Friendly Gems",
  description: "Discover Lisbon's top hostels for solo travelers. From social vibes in Bairro Alto to beachside beds in Carcavelos, find your perfect base for exploring Portugal's capital.",
};

export default function Page() {
  const content = {
    hook: "Lisbon has become a magnet for solo travelers, and its hostel scene delivers exactly what independent explorers need: vibrant social atmospheres, walkable locations, and prices that leave room for pastel de nata splurges. Whether you're seeking rooftop sunset sessions in Bairro Alto, cultural immersion in Alfama, or coastal vibes near Carcavelos beach, Lisbon's hostels blend Portuguese warmth with global backpacker energy.",
    highlights: [
      "Social common areas with organized pub crawls, walking tours, and group dinners that make meeting fellow travelers effortless",
      "Prime locations in Bairro Alto, Chiado, and near metro lines for easy access to São Jorge Castle, Belém Tower, and Sintra day trips",
      "Budget-friendly rates starting around €15-30/night with free breakfast, Wi-Fi, and often communal kitchens",
      "Authentic Portuguese character in renovated azulejo-tiled buildings mixed with modern amenities and 24/7 reception"
    ],
    considerations: [
      "Book early for summer (June-August) when hostels fill quickly with festival-goers and beach enthusiasts",
      "Bairro Alto hostels offer nightlife access but expect street noise; choose Graça or Estrela for quieter evenings"
    ],
    location_context: "Most hostels cluster in central neighborhoods like Bairro Alto and Baixa, putting you within walking distance of tram 28, historic elevadores, and the riverfront Time Out Market. The metro connects you to airports, beaches, and day-trip destinations.",
    cta: "Ready to explore Lisbon solo? Browse hostels with high social ratings and book your bed before Portugal's summer rush begins."
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
