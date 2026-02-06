export const metadata = {
  title: "Best Pet-Friendly Hotels in Prague for Dog Owners",
  description: "Discover the best dog-friendly hotels in Prague. From riverside walks to pet amenities, find perfect accommodations for you and your furry companion."
};

export default function Page() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Best Hotels for Dog Owners in Prague</h1>
      
      <section className="mb-8">
        <p className="text-lg leading-relaxed">
          Prague's fairy-tale architecture and cobblestone streets aren't just for humans—this enchanting city warmly welcomes four-legged travelers. The Czech capital's growing number of pet-friendly hotels means you and your pup can explore Gothic spires, riverside paths, and charming parks together without compromise.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Hotels in Prague</h2>
        <ul className="space-y-3">
          <li className="flex gap-3">
            <span className="text-green-600 font-bold">✓</span>
            <span>Prague hotels offer dedicated pet amenities including dog beds, bowls, and welcome treats, with many providing pet-sitting services so you can enjoy museums guilt-free</span>
          </li>
          <li className="flex gap-3">
            <span className="text-green-600 font-bold">✓</span>
            <span>The city's extensive green spaces like Petřín Hill, Stromovka Park, and Vltava River embankments are perfect for morning walks before exploring pet-friendly cafés and beer gardens</span>
          </li>
          <li className="flex gap-3">
            <span className="text-green-600 font-bold">✓</span>
            <span>Czech hospitality extends to pets with minimal surcharges compared to Western Europe, and many hotels feature easy access to veterinary services and pet supply stores</span>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Things to Consider</h2>
        <ul className="space-y-3">
          <li className="flex gap-3">
            <span className="text-amber-600 font-bold">⚠</span>
            <span>Always confirm specific dog weight limits and breed restrictions, as some Prague hotels only accommodate small to medium-sized dogs under 15kg</span>
          </li>
          <li className="flex gap-3">
            <span className="text-amber-600 font-bold">⚠</span>
            <span>Book direct with hotels to clarify cleaning fees and pet policies, as third-party sites may not reflect current pet deposit requirements or maximum number of dogs allowed</span>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Best Neighborhoods</h2>
        <p className="leading-relaxed">
          Malá Strana offers historic charm with proximity to Petřín gardens and quieter streets ideal for dog walks. Vinohrady boasts tree-lined boulevards and numerous parks, plus a relaxed, residential vibe. Holešovice provides riverside paths along the Vltava and easy access to sprawling Stromovka Park. For central convenience, Staré Město (Old Town) hotels place you near everything, though cobblestones can be challenging for small paws during peak tourist season.
        </p>
      </section>

      <section className="mb-8">
        <p className="text-lg font-medium text-blue-600">
          Find your perfect Prague pet-friendly hotel today and create unforgettable memories exploring this magical city with your dog.
        </p>
      </section>
    </article>
  );
}
