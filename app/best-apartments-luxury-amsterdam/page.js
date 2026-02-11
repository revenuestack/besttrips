export const metadata = {
  title: "Best Luxury Apartments in Amsterdam: Premium Serviced Stays in the Canal District",
  description: "Discover Amsterdam's finest luxury apartments. Canal-view penthouses, designer interiors, and prime locations in Jordaan, De Pijp, and Museum Quarter.",
};

export default function Page() {
  const content = {
    hook: "Amsterdam's luxury apartment scene offers discerning travelers the perfect blend of Dutch elegance and modern sophistication. From historic canal houses converted into opulent penthouses to cutting-edge design lofts overlooking the IJ waterfront, the city's premium serviced apartments provide an intimate alternative to traditional five-star hotels. Imagine waking to sunrise over the Herengracht, enjoying your morning coffee on a private terrace with views of the Rijksmuseum, or hosting drinks in a minimalist living space designed by Dutch masters of contemporary architecture.",
    highlights: [
      "Authentic canal house living with restored 17th-century features, herringbone floors, and monumental windows overlooking UNESCO heritage waterways",
      "Prime locations in Jordaan, Nine Streets, De Pijp, and Museum Quarter—steps from world-class dining, galleries, and boutique shopping",
      "Full-service amenities including private chefs, concierge services, in-apartment spa treatments, and curated local experiences",
      "Space and privacy with designer kitchens, multiple bedrooms, and living areas—ideal for extended stays or traveling with family"
    ],
    considerations: [
      "Steep staircases are common in historic canal houses—confirm elevator availability if mobility is a concern",
      "Book 3-6 months ahead for peak season (April-September) as premier properties fill quickly"
    ],
    location_context: "Amsterdam's luxury apartments cluster in the Canal Belt's most prestigious postcodes, particularly the elegant Grachtengordel and artistic Jordaan neighborhood. The Museum Quarter offers grand 19th-century buildings near cultural landmarks, while the emerging Eastern Docklands provides ultra-modern waterfront living with harbor views.",
    cta: "Ready to experience Amsterdam like a local? Browse our curated collection of luxury apartments and secure your perfect canal-side sanctuary today."
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
