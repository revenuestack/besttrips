export const metadata = {
  title: "Best Apartments for Seniors in Rome: Comfortable & Accessible Stays in Italy's Capital",
  description: "Discover senior-friendly apartments in Rome with elevator access, central locations, and easy walking distance to attractions, restaurants, and healthcare."
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Best Apartments for Seniors in Rome</h1>
      
      <div className="prose prose-lg">
        <p className="lead text-xl mb-6">
          Rome welcomes seniors with a growing selection of thoughtfully designed apartments that balance authentic Italian living with modern accessibility. These accommodations prioritize ground-floor or elevator access, proximity to public transport, and neighborhoods known for their walkability and safety, making the Eternal City comfortable to explore at your own pace.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Why Stay Here</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Elevator-equipped buildings and accessible layouts designed for mobility considerations</li>
          <li>Prime locations in Prati, Trastevere, and Monti with flat terrain and nearby amenities</li>
          <li>Walking distance to pharmacies, grocery stores, cafes, and medical facilities</li>
          <li>Quiet residential neighborhoods with authentic Roman atmosphere and friendly locals</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Things to Know</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Many historic buildings lack elevators—always confirm accessibility features before booking</li>
          <li>Summer heat can be intense; apartments with air conditioning are essential from June through September</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">About the Area</h2>
        <p>
          The best senior-friendly neighborhoods include Prati (near Vatican City) with its wide, flat streets and excellent shopping; Trastevere's charming cobblestone lanes with abundant dining; and residential Monti, offering authentic Roman life near major sites. These areas provide convenient access to Metro stations, bus routes, and taxi stands while maintaining a peaceful, local atmosphere away from overcrowded tourist zones.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
          <p className="text-lg font-semibold">
            Browse senior-friendly Rome apartments with verified accessibility features and book your comfortable Italian getaway today.
          </p>
        </div>
      </div>
    </div>
  );
}
