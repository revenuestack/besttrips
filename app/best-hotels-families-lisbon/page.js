export const metadata = {
  title: "Best Hotels for Families in Lisbon",
  description: "Discover the best family hotels in Lisbon, from spacious suites near historic sites to properties with pools and kid-friendly amenities in safe neighborhoods."
};

export default function Page() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Best Hotels for Families in Lisbon</h1>
      
      <section className="mb-8">
        <p className="text-lg leading-relaxed">
          Lisbon's sun-drenched hills, colorful tiled facades, and welcoming atmosphere make it a magical destination for families. The city's family-friendly hotels blend Portuguese hospitality with modern amenities, offering the perfect base to explore castles, beaches, and cobblestone neighborhoods together.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Hotels in Lisbon</h2>
        <ul className="space-y-3">
          <li className="flex gap-3">
            <span className="text-green-600 font-bold">✓</span>
            <span>Hotels provide reliable amenities like pools, kids' clubs, and family suites that make traveling with children stress-free and comfortable</span>
          </li>
          <li className="flex gap-3">
            <span className="text-green-600 font-bold">✓</span>
            <span>Many Lisbon hotels offer strategic locations near tram lines and major attractions, reducing travel time and keeping little legs fresh for exploration</span>
          </li>
          <li className="flex gap-3">
            <span className="text-green-600 font-bold">✓</span>
            <span>On-site restaurants with children's menus and 24-hour reception provide convenience and peace of mind for parents navigating a new city</span>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Things to Consider</h2>
        <ul className="space-y-3">
          <li className="flex gap-3">
            <span className="text-amber-600 font-bold">⚠</span>
            <span>Book rooms with air conditioning as Lisbon summers can be hot, and request ground floor or elevator access to avoid hauling luggage and strollers up stairs</span>
          </li>
          <li className="flex gap-3">
            <span className="text-amber-600 font-bold">⚠</span>
            <span>Check if the hotel offers cribs, high chairs, and babysitting services in advance, as availability varies and some charge additional fees</span>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Best Neighborhoods</h2>
        <p className="leading-relaxed">
          Belém offers spacious hotels near parks, museums, and the waterfront, ideal for families seeking room to roam. Parque das Nações features modern properties with nearby attractions like the Oceanarium and cable cars. Baixa-Chiado provides central access to major sites, though hotels here tend to be smaller. Avenida da Liberdade combines elegance with family-friendly parks and wide sidewalks perfect for strollers.
        </p>
      </section>

      <section className="mb-8">
        <p className="text-lg font-medium text-blue-600">
          Browse family hotels in Lisbon and book your perfect base for discovering Portugal's captivating capital with your loved ones.
        </p>
      </section>
    </article>
  );
}
