export const metadata = {
  title: "Best B&Bs for Adventure Seekers in Brussels: Your Base for Belgian Thrills",
  description: "Discover adventure-ready B&Bs in Brussels perfectly positioned for cycling, hiking, and urban exploration. Cozy comfort meets adrenaline-fueled discovery."
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Best B&Bs for Adventure Seekers in Brussels</h1>
      
      <div className="prose prose-lg">
        <p className="lead text-xl mb-6">
          Brussels isn't just waffles and EU politics—it's your launchpad for Belgian adventure. The city's unique B&Bs cater to thrill-seekers who want cozy comfort after days spent cycling the Sonian Forest, exploring abandoned industrial sites, or navigating challenging urban bike trails. These carefully selected accommodations understand that adventure travelers need secure bike storage, early breakfast options, and hosts who actually know the best trails.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Why Stay Here</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Prime locations near Sonian Forest trails and the Brussels-Charleroi Canal cycling route</li>
          <li>Secure bike storage, repair stations, and gear-drying facilities standard at adventure-focused properties</li>
          <li>Knowledgeable hosts provide insider tips on rock climbing at Blocry, kayaking the Dyle River, and urban exploration routes</li>
          <li>Easy access to Brussels' extensive Metro system for quick escapes to Ardennes hiking or Flemish countryside cycling</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Things to Know</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Book early during spring and fall—peak adventure seasons when weather favors outdoor activities</li>
          <li>Most adventure-oriented B&Bs are in Uccle, Watermael-Boitsfort, and Ixelles neighborhoods rather than touristy Grand Place area</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">About the Area</h2>
        <p>
          Brussels offers surprising adventure diversity: the 4,400-hectare Sonian Forest provides mountain biking and trail running at the city's edge, while urban exploration reveals Art Nouveau architecture, street art districts, and the challenging cobblestone climbs that feature in professional cycling races.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
          <p className="text-lg font-semibold">
            Ready to combine Belgian hospitality with heart-pumping adventure? Browse our curated B&B selection and start planning your active Brussels escape today.
          </p>
        </div>
      </div>
    </div>
  );
}
