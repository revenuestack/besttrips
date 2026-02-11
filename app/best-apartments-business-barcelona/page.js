export const metadata = {
  title: "Best Apartments for Business in Barcelona | Executive Stays & Corporate Housing",
  description: "Find top-rated business apartments in Barcelona with high-speed WiFi, workspaces, and prime locations near Diagonal, Passeig de Gràcia, and 22@.",
};

export default function Page() {
  const content = {
    hook: "Barcelona's business apartments combine the convenience of central locations with the space and amenities corporate travelers need. Whether you're closing deals in the 22@ tech district, attending conferences near Fira Barcelona, or meeting clients along Passeig de Gràcia, these serviced apartments offer fully equipped workspaces, reliable high-speed internet, and the flexibility to maintain your productivity routine while enjoying Catalan hospitality.",
    highlights: [
      "Prime business districts: Stay near 22@ innovation district, Diagonal financial hub, or Eixample's corporate corridors",
      "Work-ready amenities: Dedicated desks, ergonomic chairs, video conferencing capabilities, and fiber-optic WiFi up to 600 Mbps",
      "Flexible stays: Weekly and monthly rates with housekeeping, laundry, and 24/7 concierge support",
      "Connected mobility: Walking distance to metro stations, 20 minutes to El Prat Airport, and easy access to AVE high-speed rail"
    ],
    considerations: [
      "Book early during Mobile World Congress (February-March) and other major trade shows when business accommodation fills quickly",
      "Properties in Eixample and Sant Martí offer the best balance of professional amenities and restaurant options for client dinners"
    ],
    location_context: "Barcelona's business hubs span from the modernist architecture of Eixample to the innovative 22@ district. Most corporate apartments cluster near Diagonal Avenue and Gran Via, offering seamless access to coworking spaces, international cuisine, and evening networking venues.",
    cta: "Browse Barcelona's best business apartments and secure your executive stay today with instant booking and flexible cancellation policies."
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
