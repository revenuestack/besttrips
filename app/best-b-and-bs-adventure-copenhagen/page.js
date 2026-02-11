export const metadata = {
  title: "Best B&Bs for Adventure Seekers in Copenhagen | Cozy Stays Near Top Attractions",
  description: "Discover Copenhagen's best B&Bs perfect for adventure lovers. Stay close to biking routes, harbor kayaking, and urban exploration hotspots in Denmark's capital."
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Best B&Bs for Adventure Seekers in Copenhagen</h1>
      
      <div className="prose prose-lg">
        <p className="lead text-xl mb-6">
          Copenhagen isn't just about cozy hygge—it's an adventure playground waiting to be explored. From cycling the city's 400+ kilometers of bike lanes to kayaking through historic canals and climbing the spiraling towers of centuries-old churches, Denmark's capital offers thrills at every turn. The best B&Bs for adventure seekers combine authentic Danish hospitality with strategic locations near Copenhagen's most exciting outdoor activities, giving you a comfortable home base after days of urban exploration.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Why Stay Here</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Prime locations near bike rental shops and Copenhagen's extensive cycling network, perfect for exploring Freetown Christiania, Amager Beach, and beyond</li>
          <li>Easy access to harbor swimming spots and kayak rental facilities for water-based adventures along the city's picturesque canals</li>
          <li>Knowledgeable local hosts who share insider tips on rock climbing walls, urban hiking routes, and lesser-known adventure spots</li>
          <li>Cozy, budget-friendly accommodations with secure bike storage and hearty Danish breakfasts to fuel your daily explorations</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Things to Know</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Copenhagen is best explored by bike—confirm your B&B offers secure storage and ask hosts about nearby rental options if you're not bringing your own</li>
          <li>Many adventure activities are seasonal; water sports peak in summer (June-August) while indoor climbing and urban exploration work year-round</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">About the Area</h2>
        <p>
          Copenhagen's compact layout makes nearly any neighborhood ideal for adventure seekers. The Vesterbro and Nørrebro districts offer vibrant street life and proximity to parks, while Christianshavn provides direct canal access. Most B&Bs are within cycling distance of major attractions, harbor activities, and the city's excellent public transport network.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
          <p className="text-lg font-semibold">
            Ready to experience Copenhagen like a local adventurer? Book your B&B stay today and start planning your Danish urban expedition!
          </p>
        </div>
      </div>
    </div>
  );
}
