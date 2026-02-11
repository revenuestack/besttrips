export const metadata = {
  title: "Best Apartments for Seniors in Vienna: Accessible & Comfortable Stays in Austria's Capital",
  description: "Discover senior-friendly apartments in Vienna with accessible features, central locations, and excellent transport links. Comfort and convenience in Austria's beautiful capital."
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Best Apartments for Seniors in Vienna</h1>
      
      <div className="prose prose-lg">
        <p className="lead text-xl mb-6">
          Vienna's elegant boulevards, world-class healthcare, and exceptional public transport make it an ideal destination for senior travelers seeking independence and comfort. The city's best apartments for seniors combine accessibility features with prime locations near cultural attractions, medical facilities, and charming cafés where you can savor a leisurely melange.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Why Stay Here</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Elevator access and step-free entries in most modern apartment buildings throughout the city</li>
          <li>Located near excellent public transport with senior discounts on Vienna's efficient U-Bahn and tram network</li>
          <li>Walking distance to pharmacies, medical centers, and grocery stores in safe, well-lit neighborhoods</li>
          <li>Proximity to Vienna's famous parks, museums, and coffee houses with accessible facilities</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Things to Know</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Book ground-floor or elevator-equipped apartments in advance, especially during peak season</li>
          <li>Some historic buildings in the Innere Stadt may have limited accessibility despite renovations</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">About the Area</h2>
        <p>
          Vienna offers excellent senior-friendly neighborhoods like Döbling and Hietzing, known for quiet streets, green spaces, and proximity to quality healthcare. The central districts provide easy access to cultural sites, while outer areas offer peaceful residential settings with modern amenities and reliable public transport connections.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
          <p className="text-lg font-semibold">
            Browse our curated selection of senior-friendly Vienna apartments and book your comfortable Austrian escape today.
          </p>
        </div>
      </div>
    </div>
  );
}
