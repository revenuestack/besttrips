export const metadata = {
  title: "Best Hotels for Couples in Amsterdam | Romantic Stays & Canal Views",
  description: "Discover Amsterdam's most romantic hotels perfect for couples. From canal-side boutiques to luxury hideaways with intimate ambiance and stunning views.",
};

export default function Page() {
  const content = {
    hook: "Amsterdam's enchanting canals, cobblestone streets, and intimate atmosphere make it one of Europe's most romantic destinations. The city's boutique hotels cater perfectly to couples seeking charm, privacy, and unforgettable experiences. Whether you're celebrating an anniversary or planning a romantic getaway, Amsterdam's accommodation scene offers everything from historic canal houses with waterfront views to contemporary design hotels with rooftop terraces and couples' spa facilities.",
    highlights: [
      "Canal-side boutique hotels offering private balconies overlooking Amsterdam's iconic waterways and historic architecture",
      "Luxury suites with in-room jacuzzis, four-poster beds, and romantic amenities designed specifically for couples",
      "Intimate locations in charming neighborhoods like Jordaan and Nine Streets, steps from cozy cafes and cultural attractions",
      "Hotels featuring couples' spa services, champagne breakfast packages, and romantic dining experiences"
    ],
    considerations: [
      "Book well in advance for peak seasons (spring tulip season and summer) as romantic hotels fill quickly",
      "Many historic canal houses have steep, narrow stairs and no elevators—request ground floor rooms if needed"
    ],
    location_context: "Amsterdam's best couple-friendly hotels cluster around the Canal Belt (Grachtengordel), a UNESCO World Heritage site offering postcard-perfect views, and the artsy Jordaan neighborhood with intimate restaurants and galleries. The Museum Quarter and De Pijp also feature excellent romantic accommodations near cultural landmarks.",
    cta: "Ready to plan your romantic Amsterdam escape? Compare couples' hotel packages and book your perfect canal-side retreat today."
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
