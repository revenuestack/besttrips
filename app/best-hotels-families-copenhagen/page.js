export const metadata = {
  title: "Best Hotels for Families in Copenhagen: Top Family-Friendly Accommodation",
  description: "Discover the best family hotels in Copenhagen with spacious rooms, kid-friendly amenities, and prime locations near Tivoli Gardens and top attractions."
};

export default function Page() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Best Hotels for Families in Copenhagen</h1>
      
      <section className="mb-8">
        <p className="text-lg leading-relaxed">
          Copenhagen's fairy-tale charm extends to its exceptional family hotels, where Scandinavian design meets child-friendly hospitality. From cozy boutique properties to full-service resorts, Denmark's capital offers accommodations that delight both parents and children with thoughtful amenities and convenient locations.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Hotels in Copenhagen</h2>
        <ul className="space-y-3">
          <li className="flex gap-3">
            <span className="text-green-600 font-bold">✓</span>
            <span>Hotels in Copenhagen offer reliable child-friendly services including cribs, high chairs, and kids' menus, with many providing family suites and connecting rooms for comfortable stays</span>
          </li>
          <li className="flex gap-3">
            <span className="text-green-600 font-bold">✓</span>
            <span>Prime locations near Tivoli Gardens, the National Aquarium, and Nyhavn mean less travel time and more exploration, with many hotels offering bike rentals perfect for family adventures</span>
          </li>
          <li className="flex gap-3">
            <span className="text-green-600 font-bold">✓</span>
            <span>Professional concierge services can arrange babysitting, book family tours, and recommend age-appropriate activities, while daily housekeeping and on-site restaurants simplify family travel logistics</span>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Things to Consider</h2>
        <ul className="space-y-3">
          <li className="flex gap-3">
            <span className="text-amber-600 font-bold">⚠</span>
            <span>Copenhagen hotels can be pricey, especially during summer peak season; booking well in advance and considering weekday stays can yield better rates and family package deals</span>
          </li>
          <li className="flex gap-3">
            <span className="text-amber-600 font-bold">⚠</span>
            <span>Some historic Copenhagen hotels feature charming but compact rooms; verify room dimensions and request family-specific accommodations to ensure adequate space for children and luggage</span>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Best Neighborhoods</h2>
        <p className="leading-relaxed">
          Vesterbro offers trendy, family-friendly vibes near Central Station and Tivoli Gardens with excellent restaurants. Nyhavn and Indre By provide postcard-perfect harbourfront locations within walking distance of attractions. Østerbro presents a residential, parks-filled atmosphere near beaches and the aquarium. Frederiksberg combines green spaces with proximity to Copenhagen Zoo, ideal for families seeking quieter, spacious surroundings while remaining well-connected to downtown.
        </p>
      </section>

      <section className="mb-8">
        <p className="text-lg font-medium text-blue-600">
          Find your perfect Copenhagen family hotel today and start planning an unforgettable Danish adventure for all ages.
        </p>
      </section>
    </article>
  );
}
