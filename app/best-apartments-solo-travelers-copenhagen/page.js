export const metadata = {
  title: "Best Apartments for Solo Travelers in Copenhagen: Safe, Central & Social Stays",
  description: "Discover top Copenhagen apartments perfect for solo travelers. Safe neighborhoods, central locations, and social vibes. Book your independent Danish adventure today."
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Best Apartments for Solo Travelers in Copenhagen</h1>
      
      <div className="prose prose-lg">
        <p className="lead text-xl mb-6">
          Copenhagen ranks among the world's safest cities, making it ideal for solo travelers seeking independence without compromising security. The city's compact size, excellent public transport, and English-fluent locals create a welcoming environment for apartment stays. From the vibrant Latin Quarter to the trendy Vesterbro district, solo-friendly apartments offer the perfect base to explore Danish design, cycle along canals, and experience hygge on your own terms.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Why Stay Here</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Safety and walkability—Copenhagen's low crime rate and bike-friendly infrastructure let you explore confidently at any hour</li>
          <li>Social apartment buildings in Nørrebro and Vesterbro often feature communal spaces where solo travelers naturally connect</li>
          <li>Central locations near Nyhavn and Strøget put major attractions, cafes, and nightlife within walking or cycling distance</li>
          <li>Self-catering kitchens help budget-conscious solos save on Denmark's notoriously high restaurant prices</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Things to Know</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Book early during summer months (June-August) when prices spike and availability drops significantly</li>
          <li>Most apartments require full upfront payment and strict cancellation policies—travel insurance is recommended</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">About the Area</h2>
        <p>
          Copenhagen's neighborhoods each offer distinct character. Indre By (city center) provides tourist convenience, while Nørrebro delivers multicultural energy and lower prices. Vesterbro balances nightlife with residential charm, and Christianshavn offers canal-side serenity near the alternative community of Christiania.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
          <p className="text-lg font-semibold">
            Ready for your solo Copenhagen adventure? Browse verified apartments with flexible check-in, solo-traveler reviews, and instant booking to secure your Danish home base today.
          </p>
        </div>
      </div>
    </div>
  );
}
