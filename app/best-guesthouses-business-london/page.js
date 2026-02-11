export const metadata = {
  title: "Best Guesthouses for Business Travelers in London | Professional Stays",
  description: "Discover top-rated guesthouses in London perfect for business trips. Comfortable, connected, and convenient accommodations near major business districts.",
};

export default function Page() {
  const content = {
    hook: "London's guesthouses offer business travelers a refreshing alternative to corporate hotels—combining professional amenities with personal service and competitive rates. These carefully selected properties deliver reliable Wi-Fi, quiet workspaces, and proximity to the City, Canary Wharf, and key transport links, all while providing the comfort and character that make extended stays more productive and pleasant.",
    highlights: [
      "Significantly lower rates than business hotels while maintaining professional standards",
      "High-speed Wi-Fi and dedicated work desks in rooms for productivity",
      "Prime locations near Tube stations with direct access to financial districts",
      "Personal service from hosts who understand business traveler needs"
    ],
    considerations: [
      "Book early during peak business seasons (September-November, March-May) as quality guesthouses fill quickly",
      "Verify breakfast timing aligns with your schedule—many serve 7:30-9:30am which may not suit early departures"
    ],
    location_context: "London's best business guesthouses cluster around Bloomsbury, King's Cross, and South Kensington—neighborhoods offering excellent transport connections via Underground and rail. These areas place you within 20-30 minutes of major business centers while providing quieter evening environments than the bustling City or West End.",
    cta: "Ready to find your ideal London guesthouse? Compare verified business-friendly properties and book directly for the best rates and flexible cancellation policies."
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
