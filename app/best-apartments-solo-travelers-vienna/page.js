export const metadata = {
  title: "Best Apartments for Solo Travelers in Vienna: Safe, Central & Affordable Stays",
  description: "Discover top-rated apartments perfect for solo travelers in Vienna. Safe neighborhoods, central locations, and budget-friendly options near cafés and culture."
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Best Apartments for Solo Travelers in Vienna</h1>
      
      <div className="prose prose-lg">
        <p className="lead text-xl mb-6">
          Vienna's elegant streets and vibrant café culture make it a dream destination for solo travelers. Choosing the right apartment means finding a safe, well-connected base that puts you close to the city's imperial palaces, cozy coffee houses, and thriving cultural scene. The best apartments for solo travelers combine security, convenience, and authentic Viennese charm.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Why Stay Here</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Prime locations in walkable districts like Innere Stadt, Neubau, and Leopoldstadt with easy public transport access</li>
          <li>Safe, well-lit neighborhoods with 24/7 convenience stores, cafés, and friendly local communities</li>
          <li>Compact studios and one-bedroom apartments with full kitchens to save money on dining out</li>
          <li>Close proximity to solo-friendly spots: coffee houses, museums, parks, and social venues where meeting fellow travelers is easy</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Things to Know</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Book apartments with verified reviews and secure entry systems for peace of mind</li>
          <li>Summer and holiday periods fill quickly—reserve at least 2-3 months in advance for best selection</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">About the Area</h2>
        <p>
          Vienna's public transport is exceptional, making even outer districts like Mariahilf or Josefstadt highly accessible. The Ringstrasse circles the historic center, connecting you to museums, opera houses, and imperial gardens within minutes. Solo travelers love the city's safe, pedestrian-friendly layout and abundance of welcoming third spaces.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
          <p className="text-lg font-semibold">
            Find your perfect Vienna apartment today and experience the city like a local—independent, inspired, and immersed in culture.
          </p>
        </div>
      </div>
    </div>
  );
}
