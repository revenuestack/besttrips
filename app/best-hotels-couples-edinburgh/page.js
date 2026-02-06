export const metadata = {
  title: "Best Hotels for Couples in Edinburgh - Romantic Stays in Scotland's Capital",
  description: "Discover the most romantic hotels in Edinburgh for couples. From historic Old Town charm to elegant New Town retreats, find your perfect romantic getaway."
};

export default function Page() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Best Hotels for Couples in Edinburgh</h1>
      
      <section className="mb-8">
        <p className="text-lg leading-relaxed">
          Edinburgh's enchanting blend of medieval architecture, cobblestone streets, and dramatic castle views creates an unforgettable backdrop for romance. The city's finest hotels offer couples luxurious sanctuaries where Scottish heritage meets contemporary comfort, perfect for celebrating love in one of Europe's most captivating capitals.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Hotels in Edinburgh</h2>
        <ul className="space-y-3">
          <li className="flex gap-3">
            <span className="text-green-600 font-bold">✓</span>
            <span>Edinburgh's hotels range from historic boutiques in converted Georgian townhouses to luxury properties with castle views, offering intimate settings with Scottish character and world-class amenities designed for romantic escapes</span>
          </li>
          <li className="flex gap-3">
            <span className="text-green-600 font-bold">✓</span>
            <span>Central hotel locations put couples within walking distance of candlelit restaurants, cozy whisky bars, sunset strolls along the Royal Mile, and scenic viewpoints like Calton Hill and Arthur's Seat for unforgettable moments together</span>
          </li>
          <li className="flex gap-3">
            <span className="text-green-600 font-bold">✓</span>
            <span>Many Edinburgh hotels feature couples-focused packages including spa treatments, champagne on arrival, four-poster beds, and in-room dining, while concierge services can arrange private tours, theater tickets, and special celebrations</span>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Things to Consider</h2>
        <ul className="space-y-3">
          <li className="flex gap-3">
            <span className="text-amber-600 font-bold">⚠</span>
            <span>Edinburgh's peak seasons (August Festival, Hogmanay) see hotel prices surge and availability shrink, so book well ahead or visit during shoulder seasons for better value and a more intimate experience</span>
          </li>
          <li className="flex gap-3">
            <span className="text-amber-600 font-bold">⚠</span>
            <span>Historic buildings in Old Town offer character but may have stairs and smaller rooms, while New Town properties typically provide more space and modern facilities—consider your priorities when choosing</span>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Best Neighborhoods</h2>
        <p className="leading-relaxed">
          Old Town places couples amid medieval charm steps from Edinburgh Castle and atmospheric closes, ideal for history lovers. New Town's Georgian elegance along Princes Street offers upscale shopping and dining. Stockbridge provides village-like tranquility with boutiques and riverside walks. Leith's waterfront brings contemporary hotels near Michelin-starred restaurants. Dean Village offers romantic seclusion just minutes from the center.
        </p>
      </section>

      <section className="mb-8">
        <p className="text-lg font-medium text-blue-600">
          Browse our curated selection of romantic Edinburgh hotels and book your couples' retreat in Scotland's most enchanting city today.
        </p>
      </section>
    </article>
  );
}
