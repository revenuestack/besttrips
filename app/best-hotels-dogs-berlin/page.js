export const metadata = {
  title: "Best Hotels for Dog Owners in Berlin",
  description: "Discover Berlin's top dog-friendly hotels. From luxury stays to budget options, find perfect accommodations where your furry friend is welcome."
};

export default function Page() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Best Hotels for Dog Owners in Berlin</h1>
      
      <section className="mb-8">
        <p className="text-lg leading-relaxed">
          Berlin's vibrant culture extends to four-legged travelers, with an impressive array of pet-welcoming hotels throughout the city. From boutique properties with dog amenities to international chains offering dedicated pet services, Germany's capital makes traveling with your canine companion effortless and enjoyable.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Hotels in Berlin</h2>
        <ul className="space-y-3">
          <li className="flex gap-3">
            <span className="text-green-600 font-bold">✓</span>
            <span>Berlin hotels offer exceptional pet amenities including dog beds, bowls, treats, and concierge services that can arrange dog-walking or recommend nearby veterinarians</span>
          </li>
          <li className="flex gap-3">
            <span className="text-green-600 font-bold">✓</span>
            <span>The city's extensive green spaces like Tiergarten and Tempelhofer Feld are easily accessible from most hotel districts, providing perfect areas for exercise and play</span>
          </li>
          <li className="flex gap-3">
            <span className="text-green-600 font-bold">✓</span>
            <span>German hospitality culture embraces dogs in public spaces, with many hotel restaurants, cafes, and even some museums welcoming well-behaved pets alongside their owners</span>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Things to Consider</h2>
        <ul className="space-y-3">
          <li className="flex gap-3">
            <span className="text-amber-600 font-bold">⚠</span>
            <span>Always confirm pet policies directly with hotels as size restrictions, additional fees (typically €10-25 per night), and breed limitations may apply</span>
          </li>
          <li className="flex gap-3">
            <span className="text-amber-600 font-bold">⚠</span>
            <span>Book early during peak seasons as pet-friendly rooms are limited and high demand from dog-owning travelers can fill availability quickly</span>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Best Neighborhoods</h2>
        <p className="leading-relaxed">
          Prenzlauer Berg offers tree-lined streets and numerous parks perfect for morning walks, while Charlottenburg provides upscale hotels near Tiergarten's vast green spaces. Kreuzberg and Friedrichshain feature hip, pet-friendly boutique hotels with easy access to canal paths. Mitte places you centrally with proximity to Museum Island while maintaining access to green areas. For quieter stays, consider Grunewald with its forest trails.
        </p>
      </section>

      <section className="mb-8">
        <p className="text-lg font-medium text-blue-600">
          Browse Berlin's best dog-friendly hotels and book your pet-inclusive stay today for an unforgettable German adventure.
        </p>
      </section>
    </article>
  );
}
