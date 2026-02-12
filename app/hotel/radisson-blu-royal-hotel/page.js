export const metadata = {
  title: "Radisson Blu Royal Hotel Bergen - Historic City Center Accommodation",
  description: "Experience Bergen's charm from Radisson Blu Royal Hotel. Modern comfort meets historic location in Norway's stunning fjord city. Book your stay today."
};

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-6">Radisson Blu Royal Hotel Bergen - Historic City Center Accommodation</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-gray-700 mb-6">Discover the magic of Bergen from the elegant Radisson Blu Royal Hotel, your gateway to Norway\'s most captivating historic city. This welcoming retreat combines contemporary comfort with an unbeatable location in the heart of Bergen\'s cultural district.</p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Why Stay Here</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Prime location in historic Bergen, walking distance to UNESCO-listed Bryggen wharf, the Fish Market, and Fløyen funicular</li>
          <li>Modern, comfortable rooms with Scandinavian design and thoughtful amenities for both leisure and business travelers</li>
          <li>Exceptional dining options, welcoming service, and convenient access to Bergen\'s vibrant restaurant and cultural scene</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">What to Know</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Bergen is known for frequent rain—pack layers and waterproof gear to fully enjoy exploring the charming streets and nearby fjords</li>
          <li>The hotel\'s central location makes it easy to explore on foot, but consider the Bergen Card for free public transport and museum entry</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Location</h2>
        <p>Nestled in Bergen\'s historic center, the hotel places you steps from the city\'s most iconic attractions. The colorful Hanseatic buildings of Bryggen, bustling fish market, and charming cobblestone streets are all within easy walking distance. With mountain trails and fjord cruises nearby, you\'ll experience the perfect blend of urban culture and Norwegian natural beauty.</p>
        
        <div className="mt-8 p-6 bg-blue-50 rounded-lg">
          <p className="text-lg font-medium text-blue-900">Book your Bergen adventure at Radisson Blu Royal Hotel and immerse yourself in Norway\'s historic fjord capital.</p>
        </div>
      </div>
    </div>
  );
}
