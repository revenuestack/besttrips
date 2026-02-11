export const metadata = {
  title: "Best Apartments for Solo Travelers in Venice: Your Independent Adventure Awaits",
  description: "Discover top-rated apartments perfect for solo travelers in Venice. Safe, centrally located, and affordable—explore the floating city on your own terms."
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Best Apartments for Solo Travelers in Venice</h1>
      
      <div className="prose prose-lg">
        <p className="lead text-xl mb-6">
          Venice beckons solo adventurers with its labyrinthine canals, hidden piazzas, and timeless charm. Finding the right apartment transforms your solo journey from merely manageable to truly memorable. The best apartments for solo travelers in Venice blend safety, strategic location, and authentic Venetian character—giving you a home base to explore independently while connecting with the city's soul.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Why Stay Here</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Central locations in Cannaregio and Dorsoduro put you within walking distance of major attractions while avoiding the San Marco tourist crush</li>
          <li>Studio and one-bedroom apartments with secure entry systems and 24/7 host communication provide peace of mind for independent travelers</li>
          <li>Self-catering kitchens help stretch your budget and let you shop like a local at Rialto Market</li>
          <li>Proximity to vaporetto stops means easy solo exploration across Venice's six sestieri and the outer islands</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Things to Know</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Venice has no cars—prepare to navigate bridges and stairs with your luggage, so pack light</li>
          <li>Many historic buildings lack elevators; confirm accessibility details if mobility is a concern</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">About the Area</h2>
        <p>
          Venice's compact layout makes most neighborhoods walkable within 30 minutes. Cannaregio offers authentic residential vibes with fewer crowds, while Dorsoduro balances culture and nightlife. San Polo provides market access and central connectivity.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
          <p className="text-lg font-semibold">
            Ready to claim your Venetian sanctuary? Browse verified solo-friendly apartments with instant booking and flexible cancellation—your independent Italian adventure starts here.
          </p>
        </div>
      </div>
    </div>
  );
}
