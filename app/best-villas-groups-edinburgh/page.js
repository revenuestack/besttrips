export const metadata = {
  title: "Best Villas for Groups in Edinburgh: Spacious Stays for Your Scottish Getaway",
  description: "Discover the best villas for groups in Edinburgh. From Old Town charm to New Town elegance, find spacious accommodations perfect for families and friends.",
};

export default function Page() {
  const content = {
    hook: "Edinburgh's stunning architecture and rich history make it an ideal destination for group travel, and nothing beats the comfort and privacy of a villa. Whether you're planning a family reunion, friends' getaway, or celebration, Edinburgh's villas offer spacious living areas, multiple bedrooms, and fully-equipped kitchens that hotels simply can't match. Stay together under one roof while exploring the Scottish capital's castles, festivals, and dramatic landscapes.",
    highlights: [
      "Space and privacy for 6-12+ guests with multiple bedrooms and shared living areas perfect for group bonding",
      "Cost-effective accommodation when split among travelers, often cheaper per person than hotels",
      "Self-catering kitchens allow flexible dining schedules and accommodate dietary needs easily",
      "Prime locations from historic Old Town to elegant Georgian New Town, many with views of Arthur's Seat or Edinburgh Castle"
    ],
    considerations: [
      "Book well in advance during Edinburgh Festival season (August) when demand peaks and prices rise significantly",
      "Many historic villas feature stairs and period features; confirm accessibility needs and parking availability before booking"
    ],
    location_context: "Edinburgh offers diverse neighborhoods for villa stays. The cobbled Old Town places you near the Royal Mile and castle, while the New Town provides Georgian elegance and upscale dining. Leith offers waterfront character, and Stockbridge combines village charm with proximity to botanic gardens and city center attractions.",
    cta: "Browse our curated selection of group villas in Edinburgh and start planning your unforgettable Scottish adventure today."
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
