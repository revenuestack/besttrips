export const metadata = {
  title: "Best Pet-Friendly Hotels for Dog Owners in Amsterdam",
  description: "Discover Amsterdam's top dog-friendly hotels perfect for traveling with your furry companion. Enjoy canal walks, parks, and welcoming accommodations."
};

export default function Page() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Best Hotels for Dog Owners in Amsterdam</h1>
      
      <section className="mb-8">
        <p className="text-lg leading-relaxed">
          Amsterdam welcomes four-legged travelers with open arms. From canal-side strolls to sprawling parks, this bicycle-friendly city offers countless pet-friendly hotels where your dog isn't just tolerated—they're celebrated. Experience Dutch hospitality that extends to every member of your family.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Hotels in Amsterdam</h2>
        <ul className="space-y-3">
          <li className="flex gap-3">
            <span className="text-green-600 font-bold">✓</span>
            <span>Amsterdam's compact layout and extensive park system (including Vondelpark and Westerpark) make it ideal for daily dog walks, while most hotels provide water bowls, treats, and dog beds as standard amenities</span>
          </li>
          <li className="flex gap-3">
            <span className="text-green-600 font-bold">✓</span>
            <span>Many hotel properties feature canal-view rooms and ground-floor access, perfect for quick bathroom breaks, plus the city's dog-friendly café culture means your pup can join you almost everywhere</span>
          </li>
          <li className="flex gap-3">
            <span className="text-green-600 font-bold">✓</span>
            <span>The Netherlands has excellent veterinary care and pet supply stores throughout the city, ensuring you're never far from professional help or forgotten essentials during your stay</span>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Things to Consider</h2>
        <ul className="space-y-3">
          <li className="flex gap-3">
            <span className="text-amber-600 font-bold">⚠</span>
            <span>Check specific hotel policies on dog size limits and additional cleaning fees, which typically range from €15-35 per night, and confirm if common areas like restaurants and breakfast rooms allow pets</span>
          </li>
          <li className="flex gap-3">
            <span className="text-amber-600 font-bold">⚠</span>
            <span>Book early for peak seasons (spring tulip season and summer) as pet-friendly rooms are limited, and request ground-floor accommodations for easier outdoor access with your dog</span>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Best Neighborhoods</h2>
        <p className="leading-relaxed">
          Oud-West near Vondelpark offers the best combination of green space and pet-friendly hotels with easy park access. Jordaan's charming canals provide scenic walking routes, while De Pijp features dog-welcoming terraces and the spacious Sarphatipark. Oost (East) near Oosterpark offers quieter streets and more affordable options, plus Plantage district provides proximity to nature and the Artis Zoo area with tree-lined paths perfect for morning walks.
        </p>
      </section>

      <section className="mb-8">
        <p className="text-lg font-medium text-blue-600">
          Book your dog-friendly Amsterdam hotel today and discover why the Netherlands is one of Europe's most pet-welcoming destinations.
        </p>
      </section>
    </article>
  );
}
