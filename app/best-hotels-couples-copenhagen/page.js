export const metadata = {
  title: "Best Hotels for Couples in Copenhagen: Romantic Stays in Denmark's Capital",
  description: "Discover the most romantic hotels in Copenhagen perfect for couples. From cozy boutique stays to luxury waterfront retreats in the Danish capital."
};

export default function Page() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Best Hotels for Couples in Copenhagen</h1>
      
      <section className="mb-8">
        <p className="text-lg leading-relaxed">
          Copenhagen's enchanting blend of fairy-tale architecture, candlelit hygge, and waterfront romance makes it an unforgettable couples' destination. The city's intimate hotels perfectly complement its charming cobblestone streets, world-class dining, and cozy Nordic atmosphere that invites connection and relaxation.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Hotels in Copenhagen</h2>
        <ul className="space-y-3">
          <li className="flex gap-3">
            <span className="text-green-600 font-bold">✓</span>
            <span>Copenhagen's hotels embrace hygge culture with intimate spaces, soft lighting, and cozy design that creates naturally romantic atmospheres perfect for couples seeking connection</span>
          </li>
          <li className="flex gap-3">
            <span className="text-green-600 font-bold">✓</span>
            <span>Central locations put you within walking distance of romantic canal strolls, Michelin-starred restaurants, and charming neighborhoods ideal for hand-in-hand exploration</span>
          </li>
          <li className="flex gap-3">
            <span className="text-green-600 font-bold">✓</span>
            <span>From historic boutique properties to modern design hotels, Copenhagen offers diverse romantic settings with exceptional Danish hospitality and attention to detail</span>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Things to Consider</h2>
        <ul className="space-y-3">
          <li className="flex gap-3">
            <span className="text-amber-600 font-bold">⚠</span>
            <span>Copenhagen hotels can be pricey, especially during peak summer months and holiday periods, so booking well in advance often secures better rates</span>
          </li>
          <li className="flex gap-3">
            <span className="text-amber-600 font-bold">⚠</span>
            <span>Many charming hotels occupy historic buildings with narrow staircases and no elevators, which adds character but may not suit all travelers</span>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Best Neighborhoods</h2>
        <p className="leading-relaxed">
          Nyhavn offers postcard-perfect canal views and vibrant atmosphere, though it's touristy. Indre By (Inner City) provides central access to attractions and romantic cobblestone streets. Vesterbro blends trendy restaurants with bohemian charm, while Frederiksstaden offers elegant, quiet sophistication near royal palaces. Christianshavn's canals and relaxed vibe create an intimate neighborhood feel perfect for couples seeking authentic local atmosphere.
        </p>
      </section>

      <section className="mb-8">
        <p className="text-lg font-medium text-blue-600">
          Browse our curated selection of romantic Copenhagen hotels and book your unforgettable Danish escape today.
        </p>
      </section>
    </article>
  );
}
