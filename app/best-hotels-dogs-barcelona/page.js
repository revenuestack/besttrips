export const metadata = {
  title: "Best Pet-Friendly Hotels in Barcelona for Dog Owners",
  description: "Discover the best dog-friendly hotels in Barcelona. From beachside stays to Gothic Quarter charm, find perfect accommodations for you and your furry companion."
};

export default function Page() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Best Hotels for Dog Owners in Barcelona</h1>
      
      <section className="mb-8">
        <p className="text-lg leading-relaxed">
          Barcelona welcomes four-legged travelers with open arms! This vibrant coastal city offers stunning architecture, dog-friendly beaches, and parks alongside exceptional pet-welcoming hotels. Explore Gaudí's masterpieces, stroll Las Ramblas, and enjoy Mediterranean sunshine—all with your loyal companion by your side.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Hotels in Barcelona</h2>
        <ul className="space-y-3">
          <li className="flex gap-3">
            <span className="text-green-600 font-bold">✓</span>
            <span>Barcelona's hotels offer dedicated pet amenities including dog beds, bowls, treats, and concierge services to arrange dog-sitting or grooming during your stay</span>
          </li>
          <li className="flex gap-3">
            <span className="text-green-600 font-bold">✓</span>
            <span>The city boasts numerous dog-friendly beaches like Platja de Llevant, plus expansive parks such as Parc de la Ciutadella where dogs can socialize and exercise</span>
          </li>
          <li className="flex gap-3">
            <span className="text-green-600 font-bold">✓</span>
            <span>Hotels provide prime access to pet-welcoming restaurants with terrace seating, dog-friendly attractions, and veterinary services should you need them</span>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Things to Consider</h2>
        <ul className="space-y-3">
          <li className="flex gap-3">
            <span className="text-amber-600 font-bold">⚠</span>
            <span>Confirm weight restrictions and additional pet fees upfront, as some hotels charge daily supplements or require deposits for canine guests</span>
          </li>
          <li className="flex gap-3">
            <span className="text-amber-600 font-bold">⚠</span>
            <span>Book accommodations near green spaces or beaches to ensure convenient daily walks and exercise for your dog in Barcelona's urban environment</span>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Best Neighborhoods</h2>
        <p className="leading-relaxed">
          Eixample offers elegant boulevards and Modernist architecture with nearby parks. Barceloneta provides beachfront access perfect for morning dog walks. Gràcia features a village atmosphere with plaza cafés welcoming pets. Poblenou combines beach proximity with emerging dog-friendly dining. Gothic Quarter hotels place you near historic sites, though spaces are tighter. Consider Diagonal Mar for modern hotels near extensive waterfront promenades ideal for energetic dogs.
        </p>
      </section>

      <section className="mb-8">
        <p className="text-lg font-medium text-blue-600">
          Find your perfect pet-friendly hotel in Barcelona and start planning an unforgettable Mediterranean adventure with your dog today!
        </p>
      </section>
    </article>
  );
}
