export const metadata = {
  title: "Best Luxury Apartments in Dublin: Elegant Serviced Rentals & Premium Stays 2026",
  description: "Discover Dublin's finest luxury apartments. From Georgian elegance to modern penthouses, find your perfect serviced apartment in Ireland's vibrant capital.",
};

export default function Page() {
  const content = {
    hook: "Dublin's luxury apartment scene combines historic Georgian charm with contemporary sophistication, offering discerning travelers an intimate alternative to traditional hotels. From the cobblestoned elegance of Temple Bar to the refined calm of Ballsbridge, the city's premium serviced apartments provide spacious living, full kitchens, and the privacy of your own Dublin residence—perfect for extended stays or those seeking a home-away-from-home experience in Ireland's captivating capital.",
    highlights: [
      "Spacious layouts with full kitchens, separate living areas, and often multiple bedrooms—ideal for families or extended stays",
      "Prime locations in prestigious neighborhoods like Ballsbridge, Grand Canal Dock, and Dublin 2, with easy access to cultural attractions",
      "High-end amenities including concierge services, housekeeping, premium furnishings, and often gyms or parking facilities",
      "Cost-effective for longer stays compared to luxury hotels, with the added comfort and flexibility of apartment living"
    ],
    considerations: [
      "Book well in advance during peak seasons (summer and major festivals) as premium apartments fill quickly",
      "Minimum stay requirements often apply, typically 3-7 nights for luxury serviced apartments"
    ],
    location_context: "Dublin's luxury apartments cluster in coveted areas: Georgian Ballsbridge offers leafy elegance near embassies and RDS, while Grand Canal Dock provides waterfront modernity with tech-hub energy. Dublin 2's city center puts you steps from Trinity College and Grafton Street's shopping.",
    cta: "Ready to experience Dublin like a local? Browse our curated selection of luxury apartments and secure your sophisticated Irish base today."
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
