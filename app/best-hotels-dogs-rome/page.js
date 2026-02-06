export const metadata = {
  title: "Best Pet-Friendly Hotels in Rome for Dog Owners",
  description: "Discover the best dog-friendly hotels in Rome. From boutique stays near ancient ruins to luxury accommodations with pet amenities, find perfect lodging for you and your furry companion."
};

export default function Page() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Best Hotels for Dog Owners in Rome</h1>
      
      <section className="mb-8">
        <p className="text-lg leading-relaxed">
          Rome's timeless charm welcomes both you and your four-legged companion. The Eternal City's growing number of pet-friendly hotels means you don't have to leave your dog behind while exploring cobblestone streets, ancient piazzas, and world-class dining that increasingly caters to canine guests.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Hotels in Rome</h2>
        <ul className="space-y-3">
          <li className="flex gap-3">
            <span className="text-green-600 font-bold">✓</span>
            <span>Professional pet services including dog-sitting, grooming, and veterinary referrals ensure your companion receives excellent care while you explore Rome's attractions</span>
          </li>
          <li className="flex gap-3">
            <span className="text-green-600 font-bold">✓</span>
            <span>Hotels provide prime access to Rome's many dog-friendly parks like Villa Borghese and Villa Ada, plus nearby outdoor dining where dogs are welcomed at sidewalk tables</span>
          </li>
          <li className="flex gap-3">
            <span className="text-green-600 font-bold">✓</span>
            <span>Dedicated pet amenities including dog beds, bowls, treats, and sometimes even room service pet menus make your dog feel as pampered as you are</span>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Things to Consider</h2>
        <ul className="space-y-3">
          <li className="flex gap-3">
            <span className="text-amber-600 font-bold">⚠</span>
            <span>Always confirm specific pet policies including size restrictions, additional fees (typically €15-30 per night), and the number of dogs allowed per room when booking</span>
          </li>
          <li className="flex gap-3">
            <span className="text-amber-600 font-bold">⚠</span>
            <span>Book rooms on ground floors or near elevators for easier access, and request accommodations away from busy common areas if your dog is sensitive to noise</span>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Best Neighborhoods</h2>
        <p className="leading-relaxed">
          Prati offers elegant hotels near Vatican City with easy park access. Trastevere features charming boutique hotels amid cobblestone streets perfect for evening strolls. Monti provides centrally-located options near the Colosseum with neighborhood dog-friendliness. Testaccio appeals to those wanting authentic Roman atmosphere with nearby green spaces, while Tridente near Spanish Steps offers luxury hotels catering to discerning pet owners.
        </p>
      </section>

      <section className="mb-8">
        <p className="text-lg font-medium text-blue-600">
          Browse our curated selection of dog-friendly Rome hotels and book the perfect stay for your pack today.
        </p>
      </section>
    </article>
  );
}
