export const metadata = {
  title: "Best B&Bs for Adventure Seekers in Berlin 2026 | Urban Exploration & Culture",
  description: "Discover Berlin's top B&Bs for adventure seekers. Stay near urban exploration hotspots, street art tours, and nightlife. Authentic local experiences await."
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Best B&Bs for Adventure Seekers in Berlin</h1>
      
      <div className="prose prose-lg">
        <p className="lead text-xl mb-6">
          Berlin isn't just Germany's capital—it's an urban playground for adventurers who crave authentic experiences. From exploring abandoned Cold War sites to cycling through sprawling street art districts, this city pulses with raw energy. The best B&Bs for adventure seekers place you right in the heart of the action, hosted by locals who know every hidden gem, underground club, and secret rooftop viewpoint.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Why Stay Here</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Insider knowledge from hosts who live and breathe Berlin's alternative culture and adventure scene</li>
          <li>Prime locations in neighborhoods like Kreuzberg, Friedrichshain, and Neukölln—epicenters of street art, nightlife, and urban exploration</li>
          <li>Easy access to adventure activities including bike tours through Tempelhof, kayaking the Spree, and exploring abandoned buildings legally</li>
          <li>Authentic communal atmospheres perfect for meeting fellow travelers and getting local tips on underground events</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Things to Know</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Berlin B&Bs tend to have a more alternative, relaxed vibe—expect artistic decor and flexible check-in rather than polished luxury</li>
          <li>Many adventure-focused B&Bs are in lively neighborhoods where street noise and nightlife activity continue late into the night</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">About the Area</h2>
        <p>
          Berlin's adventure-friendly B&Bs cluster in eastern districts where history, counterculture, and creativity collide. These neighborhoods offer immediate access to bike paths, urban beaches along the Spree, climbing gyms, and the city's legendary club scene.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
          <p className="text-lg font-semibold">
            Ready to experience Berlin like a local adventurer? Book your B&B base camp today and unlock the city's hidden thrills.
          </p>
        </div>
      </div>
    </div>
  );
}
