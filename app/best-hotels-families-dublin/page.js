export const metadata = {
  title: "Best Hotels for Families in Dublin: Where Comfort Meets Irish Charm",
  description: "Discover family-friendly hotels in Dublin offering spacious rooms, kid-friendly amenities, and easy access to attractions. Book your perfect Irish getaway today."
};

export default function Page() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Best Hotels for Families in Dublin</h1>
      
      <section className="mb-8">
        <p className="text-lg leading-relaxed">
          Dublin welcomes families with open arms and exceptional hotels that blend Irish hospitality with modern comforts. From castle-like properties to contemporary stays near Phoenix Park, Ireland's capital offers accommodations where children are celebrated guests and parents can truly relax.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Hotels in Dublin</h2>
        <ul className="space-y-3">
          <li className="flex gap-3">
            <span className="text-green-600 font-bold">✓</span>
            <span>Dublin hotels excel at family amenities, offering interconnecting rooms, children's menus, and concierge services that arrange everything from babysitting to kid-friendly walking tours of Trinity College and Dublin Castle</span>
          </li>
          <li className="flex gap-3">
            <span className="text-green-600 font-bold">✓</span>
            <span>Central locations mean you're walking distance to major attractions like the Dublin Zoo, EPIC Emigration Museum, and the River Liffey, reducing travel stress with young children</span>
          </li>
          <li className="flex gap-3">
            <span className="text-green-600 font-bold">✓</span>
            <span>Many properties feature family suites with kitchenettes, swimming pools, and play areas, plus staff who genuinely understand the needs of traveling families</span>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Things to Consider</h2>
        <ul className="space-y-3">
          <li className="flex gap-3">
            <span className="text-amber-600 font-bold">⚠</span>
            <span>Book early during summer months and school holidays when family-friendly rooms fill quickly, and confirm specific bed configurations for your children's ages</span>
          </li>
          <li className="flex gap-3">
            <span className="text-amber-600 font-bold">⚠</span>
            <span>Check proximity to public transport and supermarkets, as Dublin's compact size makes neighborhood choice crucial for convenience with strollers and tired little ones</span>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Best Neighborhoods</h2>
        <p className="leading-relaxed">
          The Docklands offers modern hotels near the Convention Centre with spacious family rooms and waterfront walks. St. Stephen's Green combines central shopping access with park proximity. Ballsbridge provides quieter, residential charm near the RDS and Aviva Stadium. Smithfield blends historic character with family attractions like the Jameson Distillery tour (parents only!) and nearby Phoenix Park, Europe's largest enclosed park with playgrounds and deer.
        </p>
      </section>

      <section className="mb-8">
        <p className="text-lg font-medium text-blue-600">
          Start planning your Dublin family adventure—compare hotels, read reviews, and book the perfect base for your Irish memories today.
        </p>
      </section>
    </article>
  );
}
