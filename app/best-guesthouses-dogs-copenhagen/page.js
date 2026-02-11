export const metadata = {
  title: "Best Dog-Friendly Guesthouses in Copenhagen: Stay with Your Furry Friend",
  description: "Discover the top dog-friendly guesthouses in Copenhagen. Cozy accommodations perfect for travelers with dogs, near parks, cafes, and pet-friendly attractions.",
};

export default function Page() {
  const content = {
    hook: "Copenhagen welcomes four-legged travelers with open arms, and its charming guesthouses offer the perfect base for exploring this bicycle-friendly city with your canine companion. From cozy rooms in historic neighborhoods to modern stays near sprawling parks, Copenhagen's dog-friendly guesthouses combine Danish hygge with pet-conscious amenities, ensuring both you and your pup feel right at home.",
    highlights: [
      "Prime locations near Frederiksberg Gardens, Amager Strandpark, and other dog-friendly green spaces where your pup can run and play",
      "Authentic Danish hospitality with hosts who genuinely love dogs and provide water bowls, treats, and local pet care recommendations",
      "Easy walking access to dog-welcoming cafes, restaurants with outdoor seating, and the city's excellent public transport system that allows dogs",
      "Affordable alternative to hotels with personalized service and insider tips on Copenhagen's best dog beaches and off-leash areas"
    ],
    considerations: [
      "Book well in advance during summer months as dog-friendly rooms fill quickly, and always confirm specific pet policies and any additional fees",
      "Copenhagen winters can be harsh, so pack appropriate gear for your dog and ask hosts about nearby indoor pet-friendly attractions"
    ],
    location_context: "Copenhagen's compact size makes it ideal for exploring on foot or bike with your dog. The city boasts numerous parks, dog beaches along the harbor, and a welcoming attitude toward pets in public spaces.",
    cta: "Ready to explore Copenhagen with your best friend? Browse our curated selection of dog-friendly guesthouses and start planning your Danish adventure today."
  };

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <p className="text-lg mb-6">{content.hook}</p>
      
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Highlights</h2>
        <ul className="space-y-3">
          {content.highlights.map((item, i) => (
            <li key={i} className="flex gap-3">
              <span className="text-green-600 font-bold">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Things to Know</h2>
        <ul className="space-y-3">
          {content.considerations.map((item, i) => (
            <li key={i} className="flex gap-3">
              <span className="text-amber-600 font-bold">⚠</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Location Context</h2>
        <p className="text-gray-700">{content.location_context}</p>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg">
        <p className="text-lg font-semibold text-center">{content.cta}</p>
      </section>
    </article>
  );
}
