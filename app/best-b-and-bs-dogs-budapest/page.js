export const metadata = {
  title: "Best Dog-Friendly B&Bs in Budapest: Cozy Stays for You & Your Pup",
  description: "Discover the top dog-friendly B&Bs in Budapest. Charming accommodations where your four-legged friend is welcome. Book pet-friendly stays near parks & cafes."
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Best Dog-Friendly B&Bs in Budapest</h1>
      
      <div className="prose prose-lg">
        <p className="lead text-xl mb-6">
          Budapest welcomes traveling dog owners with open arms—and open doors. The city's charming bed and breakfasts combine Hungarian hospitality with pet-friendly policies, making them ideal for exploring this magnificent capital without leaving your furry companion behind. From cozy guesthouses near City Park to riverside retreats along the Danube, Budapest's B&Bs offer personalized service and that home-away-from-home comfort both you and your dog will appreciate.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Why Stay Here</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Personalized service with hosts who genuinely love dogs and often provide treats, bowls, and local walking route recommendations</li>
          <li>Prime locations near Budapest's green spaces including City Park, Margaret Island, and Gellért Hill—perfect for morning walks</li>
          <li>More affordable than hotels with intimate atmospheres and homemade breakfasts, often featuring local Hungarian specialties</li>
          <li>Many B&Bs feature gardens or courtyards where dogs can stretch their legs after sightseeing</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Things to Know</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Always confirm specific pet policies when booking—some B&Bs may have size restrictions or require advance notice</li>
          <li>Budapest has strict leash laws in public areas, and not all thermal baths or indoor attractions allow pets</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">About the Area</h2>
        <p>
          Budapest's compact layout and excellent public transportation make it easy to navigate with dogs. The Pest side offers flat, walkable neighborhoods, while Buda's hillier terrain provides scenic trails. Dog-friendly cafes and restaurants are increasingly common throughout the city.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
          <p className="text-lg font-semibold">
            Ready to explore Budapest with your best friend? Browse our curated selection of dog-friendly B&Bs and start planning your Hungarian adventure today.
          </p>
        </div>
      </div>
    </div>
  );
}
