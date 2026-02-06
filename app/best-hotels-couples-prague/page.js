export const metadata = {
  title: "Best Hotels for Couples in Prague",
  description: "Discover Prague's most romantic hotels perfect for couples. From historic Old Town luxury to riverside boutiques, find your ideal retreat in the city of spires."
};

export default function Page() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Best Hotels for Couples in Prague</h1>
      
      <section className="mb-8">
        <p className="text-lg leading-relaxed">
          Prague's fairy-tale architecture and cobblestone streets create an irresistibly romantic backdrop for couples seeking enchantment. The city's finest hotels blend historic grandeur with modern luxury, offering intimate settings where you can toast to love with champagne while gazing at medieval spires and the glittering Vltava River.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Hotels in Prague</h2>
        <ul className="space-y-3">
          <li className="flex gap-3">
            <span className="text-green-600 font-bold">✓</span>
            <span>Prague's hotels offer exceptional value compared to other European capitals, with five-star luxury, rooftop terraces, and spa facilities at prices that leave room in your budget for candlelit dinners and castle tours.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-green-600 font-bold">✓</span>
            <span>Many hotels occupy carefully restored historic buildings—baroque palaces, art nouveau mansions, and centuries-old townhouses—adding layers of romance and character that chain properties simply cannot match.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-green-600 font-bold">✓</span>
            <span>Central locations put you steps from Charles Bridge at sunrise, evening concerts in ornate chapels, and cozy wine cellars, letting you maximize time together while minimizing transit hassles.</span>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Things to Consider</h2>
        <ul className="space-y-3">
          <li className="flex gap-3">
            <span className="text-amber-600 font-bold">⚠</span>
            <span>Book well in advance for peak seasons (April-June, September-October and Christmas markets) when the most romantic properties with river or castle views fill quickly.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-amber-600 font-bold">⚠</span>
            <span>Verify room specifics carefully—some historic buildings feature charming but compact rooms, steep staircases without elevators, or variations in modern amenities between different room categories.</span>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Best Neighborhoods</h2>
        <p className="leading-relaxed">
          Malá Strana offers quiet cobbled lanes beneath Prague Castle with boutique hotels in baroque buildings. Old Town (Staré Město) places you at the heart of everything—astronomical clock, romantic squares, endless cafés. Josefov provides intimate Jewish Quarter charm, while Vinohrady delivers trendy, local flavor away from tourist crowds. Riverside hotels along the Vltava offer spectacular views perfect for couples seeking waterfront romance.
        </p>
      </section>

      <section className="mb-8">
        <p className="text-lg font-medium text-blue-600">
          Browse our curated selection of romantic Prague hotels and start planning your unforgettable couples' escape today.
        </p>
      </section>
    </article>
  );
}
