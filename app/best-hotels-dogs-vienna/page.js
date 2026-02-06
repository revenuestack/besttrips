export const metadata = {
  title: "Best Hotels for Dog Owners in Vienna",
  description: "Discover the best dog-friendly hotels in Vienna. From imperial parks to pet-welcoming accommodations, explore Austria's capital with your furry companion."
};

export default function Page() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Best Hotels for Dog Owners in Vienna</h1>
      
      <section className="mb-8">
        <p className="text-lg leading-relaxed">
          Vienna welcomes four-legged travelers with open arms. The Austrian capital combines imperial elegance with exceptional pet-friendly hospitality, offering dog owners luxurious hotels near sprawling parks, charming cafés that embrace canine guests, and a culture that celebrates pets as family members.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Hotels in Vienna</h2>
        <ul className="space-y-3">
          <li className="flex gap-3">
            <span className="text-green-600 font-bold">✓</span>
            <span>Vienna's hotels offer dedicated pet amenities including dog beds, bowls, treats, and concierge services to recommend dog-friendly attractions and veterinarians</span>
          </li>
          <li className="flex gap-3">
            <span className="text-green-600 font-bold">✓</span>
            <span>Proximity to expansive green spaces like Prater Park and Augarten provides endless walking opportunities, while many hotels arrange dog-sitting services</span>
          </li>
          <li className="flex gap-3">
            <span className="text-green-600 font-bold">✓</span>
            <span>The city's pet-friendly culture means restaurants with outdoor seating welcome dogs, and public transportation allows leashed pets, making exploration effortless</span>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Things to Consider</h2>
        <ul className="space-y-3">
          <li className="flex gap-3">
            <span className="text-amber-600 font-bold">⚠</span>
            <span>Confirm pet policies in advance as some hotels charge daily fees (€10-25) or have size/breed restrictions, and request ground-floor rooms for easier access</span>
          </li>
          <li className="flex gap-3">
            <span className="text-amber-600 font-bold">⚠</span>
            <span>Book early during peak season as pet-friendly rooms are limited, and verify nearby veterinary clinics and pet supply stores for peace of mind</span>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Best Neighborhoods</h2>
        <p className="leading-relaxed">
          The Innere Stadt offers luxury hotels near Stadtpark's dog-friendly paths and historic streets. Leopoldstadt provides direct access to Prater Park, Vienna's largest green space perfect for off-leash play. Neubau and Josefstadt feature boutique hotels amid quieter residential streets with neighborhood parks. Landstraße balances urban convenience with Belvedere Palace gardens, while Döbling offers upscale accommodations near Vienna Woods hiking trails.
        </p>
      </section>

      <section className="mb-8">
        <p className="text-lg font-medium text-blue-600">
          Find your perfect pet-friendly hotel in Vienna and create unforgettable memories with your furry travel companion today.
        </p>
      </section>
    </article>
  );
}
