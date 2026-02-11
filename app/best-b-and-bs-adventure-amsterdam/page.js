export const metadata = {
  title: "Best B&Bs for Adventure Seekers in Amsterdam | Boutique Stays Near Outdoor Activities",
  description: "Discover Amsterdam's top B&Bs perfect for adventure travelers. Stay near cycling routes, water sports, and urban exploration hotspots in authentic neighborhoods."
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Best B&Bs for Adventure Seekers in Amsterdam</h1>
      
      <div className="prose prose-lg">
        <p className="lead text-xl mb-6">
          Amsterdam isn't just canals and museums—it's a playground for adventure seekers who crave authentic experiences. The city's best B&Bs cater to active travelers who want to cycle 20+ kilometers daily, kayak through waterways at dawn, or explore hidden urban gems between adrenaline rushes. These carefully selected accommodations offer more than comfort—they provide strategic bases in neighborhoods where locals live, bike repair stations, early breakfast options for sunrise adventures, and hosts who know every trail, climbing wall, and secret swimming spot within cycling distance.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Why Stay Here</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Located in vibrant neighborhoods like De Pijp, Oud-West, and Noord—perfect for authentic Amsterdam exploration beyond tourist zones</li>
          <li>Complimentary bike rentals or partnerships with adventure tour operators for kayaking, standup paddleboarding, and cycling excursions</li>
          <li>Flexible meal times and packed lunch options for early-morning departures to Waterland cycling routes or Amsterdamse Bos adventures</li>
          <li>Insider knowledge from hosts about climbing gyms, beach volleyball spots in Vondelpark, and weekend mountain biking in nearby dunes</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Things to Know</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Amsterdam B&Bs book quickly during spring and summer—reserve 2-3 months ahead for peak adventure season</li>
          <li>Many B&Bs are in historic canal houses with steep stairs and no elevators—pack light for active exploration</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">About the Area</h2>
        <p>
          Amsterdam's compact layout makes it ideal for adventure-based B&B stays. Most accommodations are within 15 minutes cycling of Vondelpark, the IJ waterfront, or Amsterdamse Bos forest. The city's extensive bike infrastructure connects you to countryside trails, coastal routes, and urban climbing facilities.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
          <p className="text-lg font-semibold">
            Book your adventure-ready Amsterdam B&B today and wake up ready to explore the Netherlands' most dynamic city on two wheels and by water.
          </p>
        </div>
      </div>
    </div>
  );
}
