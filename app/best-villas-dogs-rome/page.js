export const metadata = {
  title: "Best Dog-Friendly Villas in Rome: Luxury Stays for You and Your Pup",
  description: "Discover the best dog-friendly villas in Rome. Spacious accommodations with private gardens, near parks and ancient sites. Perfect for traveling with your furry companion.",
};

export default function Page() {
  const content = {
    hook: "Rome's timeless charm extends to your four-legged family members. The city's best dog-friendly villas combine Italian elegance with pet-friendly amenities, offering spacious retreats where your pup can relax after exploring ancient cobblestone streets and sprawling parks.",
    highlights: [
      "Private gardens and outdoor spaces where dogs can play freely and safely",
      "Walking distance to Villa Borghese and other dog-friendly parks perfect for morning strolls",
      "Spacious interiors with tile or hardwood floors, ideal for easy cleanup and comfortable stays",
      "Many properties provide pet beds, bowls, and local vet recommendations"
    ],
    considerations: [
      "Always confirm pet policies and any additional fees when booking, as some villas charge cleaning deposits",
      "Rome's summer heat can be intense—ensure your villa has air conditioning and shaded outdoor areas for your dog's comfort"
    ],
    location_context: "Rome offers exceptional experiences for dog owners, from the vast green spaces of Villa Borghese to dog-friendly trattorias in Trastevere. Many villas are located in residential neighborhoods like Parioli or Aventino, providing quiet retreats while keeping you close to major attractions. The city's relaxed attitude toward well-behaved dogs means your pup can join you at outdoor cafés and piazzas.",
    cta: "Find your perfect dog-friendly villa in Rome and create unforgettable memories with your furry companion in the Eternal City."
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
