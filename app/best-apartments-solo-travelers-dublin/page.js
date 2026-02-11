export const metadata = {
  title: "Best Apartments for Solo Travelers in Dublin - Independent Stays in Ireland's Capital",
  description: "Discover top-rated apartments perfect for solo travelers in Dublin. Safe, central locations with flexible stays and local charm in Ireland's vibrant capital."
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Best Apartments for Solo Travelers in Dublin</h1>
      
      <div className="prose prose-lg">
        <p className="lead text-xl mb-6">
          Dublin welcomes solo adventurers with open arms, and choosing an apartment over traditional accommodation gives you the freedom to explore Ireland's capital at your own pace. From Georgian townhouses in the city center to modern studios near Temple Bar, Dublin's apartment scene caters perfectly to independent travelers seeking authentic local experiences.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Why Stay Here</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Complete independence with self-catering facilities and flexible check-in times perfect for solo schedules</li>
          <li>Central locations in walkable neighborhoods like Smithfield, Liberties, and Georgian Quarter put attractions within easy reach</li>
          <li>Cost-effective stays with kitchen access to balance splurges at traditional pubs and Michelin-starred restaurants</li>
          <li>Safe, well-lit areas with excellent public transport connections and proximity to Dublin's famously friendly local communities</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Things to Know</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Most apartments require minimum 2-3 night stays, especially during peak summer months and festival periods</li>
          <li>Self-check-in systems are common but ensure you have reliable mobile data or note WiFi passwords in advance</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">About the Area</h2>
        <p>
          Dublin's compact size makes most neighborhoods accessible on foot or via the efficient LUAS tram system. The Northside offers character and value, while Southside neighborhoods provide classic Georgian elegance. Temple Bar buzzes with nightlife, but quieter areas like Stoneybatter give authentic local flavor.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
          <p className="text-lg font-semibold">
            Browse verified apartments with solo traveler reviews and book your independent Dublin base today.
          </p>
        </div>
      </div>
    </div>
  );
}
