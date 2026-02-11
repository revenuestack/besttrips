export const metadata = {
  title: "Best B&Bs for Adventure Seekers in Budapest | Unique Stays Near Top Activities",
  description: "Discover Budapest's best B&Bs perfect for adventure seekers. Stay near hiking trails, thermal caves, and Danube water sports. Cozy accommodations for thrill-seekers."
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Best B&Bs for Adventure Seekers in Budapest</h1>
      
      <div className="prose prose-lg">
        <p className="lead text-xl mb-6">
          Budapest isn't just about thermal baths and architecture—it's an adventure playground where the Danube River meets the Buda Hills. The city's best B&Bs for adventure seekers combine cozy Hungarian hospitality with prime access to rock climbing, cave exploring, kayaking, and mountain biking. These handpicked accommodations put you minutes away from adrenaline-pumping activities while offering the personal touch and local insights that only family-run B&Bs can provide.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Why Stay Here</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Walking distance to Buda Hills trails for hiking, mountain biking, and rock climbing at János Hill and Normafa</li>
          <li>Easy access to Danube water sports including kayaking, paddleboarding, and river tours from Margaret Island</li>
          <li>Proximity to unique adventures like spelunking in Szemlő-hegyi Cave and the underground Hospital in the Rock</li>
          <li>Knowledgeable hosts who provide insider tips on adventure routes, equipment rentals, and hidden outdoor spots locals love</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Things to Know</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Many B&Bs are located in hillside Buda neighborhoods, requiring uphill walks or public transport to reach—comfortable shoes essential</li>
          <li>Book early during spring and fall when hiking and outdoor conditions are optimal and adventure-focused accommodations fill quickly</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">About the Area</h2>
        <p>
          Budapest straddles the Danube with flat Pest on one side and hilly Buda on the other. Adventure-focused B&Bs cluster near Buda's green zones and the river corridor, offering quick access to nature while remaining connected to the city center via efficient metro and bus lines.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
          <p className="text-lg font-semibold">
            Ready to experience Budapest beyond the tourist trail? Browse our curated selection of adventure-friendly B&Bs and book your base camp for exploring Hungary's most dynamic city.
          </p>
        </div>
      </div>
    </div>
  );
}
