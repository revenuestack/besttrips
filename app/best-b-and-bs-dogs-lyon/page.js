export const metadata = {
  title: "Best Dog-Friendly B&Bs in Lyon: Pet-Friendly Accommodations in France's Culinary Capital",
  description: "Discover Lyon's top dog-friendly B&Bs perfect for travelers with pets. Cozy accommodations, welcoming hosts, and easy access to parks and riverside walks."
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Best Dog-Friendly B&Bs in Lyon</h1>
      
      <div className="prose prose-lg">
        <p className="lead text-xl mb-6">
          Lyon welcomes four-legged travelers with open arms, and its charming bed and breakfasts are no exception. This UNESCO-listed city offers the perfect blend of pet-friendly hospitality, walkable neighborhoods, and outdoor spaces where your dog can explore alongside you. From Renaissance-era Vieux Lyon to the leafy banks of the Rhône and Saône rivers, staying at a dog-friendly B&B means experiencing authentic Lyonnaise warmth while keeping your furry companion by your side.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Why Stay Here</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Personalized service from hosts who genuinely love dogs and often have pets of their own</li>
          <li>Prime locations near Parc de la Tête d'Or and riverside trails perfect for morning walks</li>
          <li>Home-cooked breakfasts featuring local specialties, with many hosts happy to accommodate pet schedules</li>
          <li>Charming historic buildings with gardens or courtyards where dogs can relax</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Things to Know</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Always confirm breed restrictions and size limits when booking, as some B&Bs may have specific policies</li>
          <li>Many accommodations require advance notice and may charge a small pet fee for additional cleaning</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">About the Area</h2>
        <p>
          Lyon's compact layout and extensive pedestrian zones make it ideal for exploring with dogs. The Presqu'île district and Croix-Rousse neighborhoods offer excellent walking routes, while numerous outdoor cafés welcome well-behaved pups at your feet.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
          <p className="text-lg font-semibold">
            Ready to explore Lyon with your loyal companion? Book a dog-friendly B&B today and discover why this city is a tail-wagging success for pet owners.
          </p>
        </div>
      </div>
    </div>
  );
}
