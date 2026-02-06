export const metadata = {
  title: "Best Hotels for Dog Owners in Lisbon",
  description: "Discover the best pet-friendly hotels in Lisbon for you and your furry companion. From Alfama to Príncipe Real, find the perfect dog-welcoming stay."
};

export default function Page() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Best Hotels for Dog Owners in Lisbon</h1>
      
      <section className="mb-8">
        <p className="text-lg leading-relaxed">
          Lisbon's sun-soaked streets, historic neighborhoods, and welcoming café culture make it a dream destination for travelers with dogs. The city's pet-friendly hotels combine Portuguese hospitality with thoughtful amenities, ensuring both you and your four-legged companion enjoy an unforgettable stay.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Hotels in Lisbon</h2>
        <ul className="space-y-3">
          <li className="flex gap-3">
            <span className="text-green-600 font-bold">✓</span>
            <span>Lisbon hotels often provide dedicated pet amenities like dog beds, bowls, and treats, with many offering concierge services to recommend nearby dog parks and pet-friendly restaurants</span>
          </li>
          <li className="flex gap-3">
            <span className="text-green-600 font-bold">✓</span>
            <span>The city's walkable neighborhoods and mild climate mean you can explore cobblestone streets, miradouros, and riverside promenades with your dog year-round</span>
          </li>
          <li className="flex gap-3">
            <span className="text-green-600 font-bold">✓</span>
            <span>Many hotels are located near green spaces like Parque Eduardo VII and Jardim da Estrela, giving your pup plenty of outdoor time between sightseeing adventures</span>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Things to Consider</h2>
        <ul className="space-y-3">
          <li className="flex gap-3">
            <span className="text-amber-600 font-bold">⚠</span>
            <span>Always confirm pet policies in advance, as some hotels charge additional fees or have size/breed restrictions that may affect your booking</span>
          </li>
          <li className="flex gap-3">
            <span className="text-amber-600 font-bold">⚠</span>
            <span>Lisbon's historic districts feature steep hills and narrow streets with challenging terrain, so consider your dog's mobility and stamina when choosing accommodation locations</span>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Best Neighborhoods</h2>
        <p className="leading-relaxed">
          Príncipe Real offers boutique hotels near dog-friendly parks and cafés. Alfama's historic charm comes with steep climbs but proximity to the riverfront. Santos and Cais do Sodré provide modern hotels near the Tagus River promenade, perfect for morning walks. Parque das Nações features contemporary properties with easy access to expansive waterfront trails and open spaces ideal for energetic dogs.
        </p>
      </section>

      <section className="mb-8">
        <p className="text-lg font-medium text-blue-600">
          Browse our curated selection of dog-friendly hotels in Lisbon and book your pet-inclusive Portuguese adventure today.
        </p>
      </section>
    </article>
  );
}
