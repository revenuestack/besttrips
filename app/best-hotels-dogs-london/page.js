export const metadata = {
  title: "Best Pet-Friendly Hotels in London for Dog Owners",
  description: "Discover London's top dog-friendly hotels where your four-legged companion is warmly welcomed. From luxury stays to boutique gems with pet amenities."
};

export default function Page() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Best Hotels for Dog Owners in London</h1>
      
      <section className="mb-8">
        <p className="text-lg leading-relaxed">
          London's hospitality extends beyond humans to your four-legged friends. The city's best pet-friendly hotels offer tail-wagging amenities, from dog beds and treats to concierge services that arrange park walks, ensuring both you and your pup experience British charm together.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Hotels in London</h2>
        <ul className="space-y-3">
          <li className="flex gap-3">
            <span className="text-green-600 font-bold">✓</span>
            <span>London hotels provide dedicated pet amenities including dog beds, bowls, treats, and walking services, making travel stress-free for you and your companion</span>
          </li>
          <li className="flex gap-3">
            <span className="text-green-600 font-bold">✓</span>
            <span>Stay near iconic dog-friendly parks like Hyde Park, Regent's Park, and Hampstead Heath where your pup can explore acres of green space</span>
          </li>
          <li className="flex gap-3">
            <span className="text-green-600 font-bold">✓</span>
            <span>Many hotels partner with local pet services offering grooming, sitting, and veterinary care, ensuring your dog's needs are fully covered during your stay</span>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Things to Consider</h2>
        <ul className="space-y-3">
          <li className="flex gap-3">
            <span className="text-amber-600 font-bold">⚠</span>
            <span>Check each hotel's pet policy carefully—some charge daily fees (£20-50), have weight restrictions, or limit the number of dogs per room</span>
          </li>
          <li className="flex gap-3">
            <span className="text-amber-600 font-bold">⚠</span>
            <span>Book directly with hotels to confirm pet amenities and request ground-floor rooms for easier access to outdoor spaces for your dog</span>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Best Neighborhoods</h2>
        <p className="leading-relaxed">
          Mayfair and Belgravia offer luxury hotels near Hyde Park's expansive dog-walking trails. South Kensington provides elegant stays close to Kensington Gardens. Shoreditch and Hoxton feature trendy boutique hotels with relaxed pet policies. Marylebone combines central convenience with proximity to Regent's Park, while Notting Hill's charming streets and Primrose Hill's village atmosphere make them ideal bases for dog-loving travelers.
        </p>
      </section>

      <section className="mb-8">
        <p className="text-lg font-medium text-blue-600">
          Find your perfect dog-friendly London hotel and book a tail-wagging adventure your pup will never forget.
        </p>
      </section>
    </article>
  );
}
