export const metadata = {
  title: "Best Hotels for Dog Owners in Paris",
  description: "Discover the best pet-friendly hotels in Paris for you and your furry companion. From luxury stays to boutique gems, find perfect dog-welcoming accommodations."
};

export default function Page() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Best Hotels for Dog Owners in Paris</h1>
      
      <section className="mb-8">
        <p className="text-lg leading-relaxed">
          Paris isn't just the City of Light—it's a paradise for four-legged travelers. With its dog-friendly cafés, sprawling parks, and welcoming culture, finding the perfect pet-friendly hotel ensures both you and your pup experience Parisian charm to the fullest.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Hotels in Paris</h2>
        <ul className="space-y-3">
          <li className="flex gap-3">
            <span className="text-green-600 font-bold">✓</span>
            <span>Full-service amenities like concierge assistance, pet beds, bowls, and treats ensure your dog receives VIP treatment throughout your stay</span>
          </li>
          <li className="flex gap-3">
            <span className="text-green-600 font-bold">✓</span>
            <span>Central locations near parks like Jardin du Luxembourg and Bois de Boulogne offer convenient access to green spaces for daily walks</span>
          </li>
          <li className="flex gap-3">
            <span className="text-green-600 font-bold">✓</span>
            <span>Many hotels provide pet-sitting services and recommendations for nearby veterinarians, groomers, and dog-friendly restaurants</span>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Things to Consider</h2>
        <ul className="space-y-3">
          <li className="flex gap-3">
            <span className="text-amber-600 font-bold">⚠</span>
            <span>Check size and breed restrictions as some hotels limit weight or prohibit certain breeds, and confirm additional pet fees upfront</span>
          </li>
          <li className="flex gap-3">
            <span className="text-amber-600 font-bold">⚠</span>
            <span>Review noise policies and nearby green spaces to ensure your dog's comfort and exercise needs are met during your stay</span>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Best Neighborhoods</h2>
        <p className="leading-relaxed">
          The Marais offers charming streets and proximity to parks, while Saint-Germain-des-Prés provides elegant boulevards perfect for leisurely strolls. The 7th arrondissement near the Eiffel Tower features spacious sidewalks and Champ de Mars for playtime. Montmartre's bohemian vibe includes quiet squares, while the Latin Quarter offers riverfront paths along the Seine ideal for morning walks with your canine companion.
        </p>
      </section>

      <section className="mb-8">
        <p className="text-lg font-medium text-blue-600">
          Find your perfect dog-friendly hotel in Paris and start planning an unforgettable adventure together today!
        </p>
      </section>
    </article>
  );
}
