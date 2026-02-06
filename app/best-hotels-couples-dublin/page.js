export const metadata = {
  title: "Best Hotels for Couples in Dublin: Romantic Stays in Ireland's Capital",
  description: "Discover Dublin's most romantic hotels perfect for couples. From Georgian elegance to modern luxury, find your ideal romantic getaway in Ireland's capital."
};

export default function Page() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Best Hotels for Couples in Dublin</h1>
      
      <section className="mb-8">
        <p className="text-lg leading-relaxed">
          Dublin's cobblestone streets, vibrant culture, and warm hospitality create the perfect backdrop for romance. The city's finest hotels offer couples intimate escapes combining historic charm with contemporary luxury, ensuring unforgettable moments together in Ireland's captivating capital.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Hotels in Dublin</h2>
        <ul className="space-y-3">
          <li className="flex gap-3">
            <span className="text-green-600 font-bold">✓</span>
            <span>Hotels provide full-service amenities including spa treatments, fine dining restaurants, and room service—perfect for romantic evenings without leaving your sanctuary</span>
          </li>
          <li className="flex gap-3">
            <span className="text-green-600 font-bold">✓</span>
            <span>Many Dublin hotels occupy beautifully restored Georgian buildings or historic properties, offering architectural charm and character that enhances the romantic atmosphere</span>
          </li>
          <li className="flex gap-3">
            <span className="text-green-600 font-bold">✓</span>
            <span>Central hotel locations put couples within walking distance of intimate pubs, candlelit restaurants, Trinity College, and scenic walks along the River Liffey</span>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Things to Consider</h2>
        <ul className="space-y-3">
          <li className="flex gap-3">
            <span className="text-amber-600 font-bold">⚠</span>
            <span>Book well in advance during peak seasons (summer and St. Patrick's Day) as romantic hotels with special amenities fill quickly, and consider packages that include champagne or dining credits</span>
          </li>
          <li className="flex gap-3">
            <span className="text-amber-600 font-bold">⚠</span>
            <span>Temple Bar area hotels offer vibrant nightlife but can be noisy—opt for south-side neighborhoods for a quieter, more intimate atmosphere while staying centrally located</span>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Best Neighborhoods</h2>
        <p className="leading-relaxed">
          St. Stephen's Green offers elegant hotels near boutique shopping and leafy parks ideal for romantic strolls. Georgian Merrion Square provides sophisticated charm with proximity to museums and galleries. The Docklands features modern waterfront hotels with stunning views. Ballsbridge offers refined luxury in a quieter residential setting, while still being close to the city center via short taxi rides.
        </p>
      </section>

      <section className="mb-8">
        <p className="text-lg font-medium text-blue-600">
          Browse our curated selection of romantic Dublin hotels and book your perfect couples' retreat in Ireland's enchanting capital today.
        </p>
      </section>
    </article>
  );
}
