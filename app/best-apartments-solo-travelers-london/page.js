export const metadata = {
  title: "Best Apartments for Solo Travelers in London | Self-Catering Studios & Flats",
  description: "Discover the best apartments for solo travelers in London. Safe, central locations with excellent transport links and vibrant neighborhoods perfect for independent explorers."
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Best Apartments for Solo Travelers in London</h1>
      
      <div className="prose prose-lg">
        <p className="lead text-xl mb-6">
          London's apartment scene offers solo travelers the perfect blend of independence and immersion. Whether you're seeking a cozy studio in trendy Shoreditch or a compact flat near Covent Garden, self-catering apartments provide the freedom to explore at your own pace while enjoying genuine neighborhood life. With excellent public transport connecting every corner of the city, you'll have the flexibility to craft your own London adventure.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Why Stay Here</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Complete independence with your own kitchen, saving money on dining out while experiencing local markets and grocery culture</li>
          <li>Strategic locations in safe, well-connected neighborhoods like King's Cross, Camden, and South Kensington with 24/7 transport access</li>
          <li>Cost-effective alternative to hotels, especially for stays longer than a few nights, with weekly discounts often available</li>
          <li>Authentic local experience living among Londoners, discovering neighborhood cafes, pubs, and hidden gems tourists miss</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Things to Know</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Book apartments with self-check-in features for flexible arrival times and contactless entry via keypad or lockbox</li>
          <li>Prioritize locations near Tube stations (within 10-minute walk) for easy late-night returns and maximum exploration range</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">About the Area</h2>
        <p>
          London's compact city center and comprehensive Underground network make apartment-based solo travel exceptionally convenient. Neighborhoods like Bloomsbury, Marylebone, and Southwark offer cultural richness, safety, and excellent connectivity, putting museums, theaters, and markets within easy reach.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
          <p className="text-lg font-semibold">
            Ready to find your perfect London base? Browse our curated selection of solo-friendly apartments and start planning your independent adventure today.
          </p>
        </div>
      </div>
    </div>
  );
}
