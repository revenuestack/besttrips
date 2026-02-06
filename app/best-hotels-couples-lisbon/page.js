export const metadata = {
  title: "Best Hotels for Couples in Lisbon: Romantic Stays in Portugal's Capital",
  description: "Discover the most romantic hotels in Lisbon for couples. From boutique hideaways to luxury waterfront stays, find your perfect romantic escape in Portugal."
};

export default function Page() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Best Hotels for Couples in Lisbon</h1>
      
      <section className="mb-8">
        <p className="text-lg leading-relaxed">
          Lisbon's golden light, cobblestone streets, and sweeping Tagus River views create an irresistibly romantic backdrop. The city's finest hotels blend historic Portuguese charm with modern luxury, offering couples intimate retreats where tile-adorned walls meet rooftop terraces overlooking terracotta rooftops.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Hotels in Lisbon</h2>
        <ul className="space-y-3">
          <li className="flex gap-3">
            <span className="text-green-600 font-bold">✓</span>
            <span>Hotels in Lisbon offer full-service amenities perfect for romance—think rooftop bars for sunset cocktails, spa treatments for two, and concierge services to arrange private fado performances or wine tastings in your room.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-green-600 font-bold">✓</span>
            <span>Many historic hotels occupy renovated palaces and convents, providing architectural grandeur and unique character that creates memorable experiences you won't find in standard accommodations.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-green-600 font-bold">✓</span>
            <span>Central hotel locations put you within walking distance of romantic activities: candlelit dinners in Bairro Alto, sunset viewpoints at Miradouros, and moonlit strolls along the waterfront.</span>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Things to Consider</h2>
        <ul className="space-y-3">
          <li className="flex gap-3">
            <span className="text-amber-600 font-bold">⚠</span>
            <span>Lisbon's hilly terrain means some hotels require climbing steep streets—check accessibility if you prefer easy flat access, or embrace the charm and book near tram lines.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-amber-600 font-bold">⚠</span>
            <span>Peak season (May-September) brings higher prices and crowds; consider visiting in spring or fall for better rates and a more intimate atmosphere while still enjoying pleasant weather.</span>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Best Neighborhoods</h2>
        <p className="leading-relaxed">
          Chiado and Baixa offer central luxury with proximity to top restaurants and cultural sites. Alfama provides historic romance with narrow alleys and traditional fado houses. Principe Real attracts couples seeking boutique sophistication with garden squares and design hotels. For waterfront views, consider Belém or the revitalized Cais do Sodré docklands, blending maritime heritage with contemporary cool.
        </p>
      </section>

      <section className="mb-8">
        <p className="text-lg font-medium text-blue-600">
          Browse our curated selection of romantic Lisbon hotels and book your perfect couples' getaway today.
        </p>
      </section>
    </article>
  );
}
