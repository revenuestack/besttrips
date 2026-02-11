export const metadata = {
  title: "Best Apartments for Solo Travelers in Madrid | Your Independent Base",
  description: "Discover the best apartments for solo travelers in Madrid. Safe, social, and centrally located options perfect for exploring Spain's vibrant capital independently."
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Best Apartments for Solo Travelers in Madrid</h1>
      
      <div className="prose prose-lg">
        <p className="lead text-xl mb-6">
          Madrid welcomes solo adventurers with open arms, and choosing the right apartment can transform your experience from ordinary to extraordinary. The city's apartment options cater perfectly to independent travelers seeking freedom, comfort, and authentic local living.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Why Stay Here</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Self-catering kitchens save money and let you shop at local markets like Mercado de San Miguel</li>
          <li>Neighborhoods like Malasaña and Chueca offer walkable access to cafes, museums, and nightlife perfect for solo exploration</li>
          <li>Many apartments feature secure entry systems and 24/7 host communication for peace of mind</li>
          <li>Flexible check-in times and private spaces give you complete control over your schedule</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Things to Know</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Book well in advance during peak seasons (May-September) as the best solo-friendly apartments fill quickly</li>
          <li>Basic Spanish phrases help significantly, especially in residential buildings where neighbors may not speak English</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">About the Area</h2>
        <p>
          Madrid's compact center makes most neighborhoods excellent for solo travelers. Gran Vía and Sol offer maximum convenience, while Lavapiés and La Latina provide authentic character. Metro connections are excellent throughout, with stations every few blocks making the entire city accessible from any apartment base.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
          <p className="text-lg font-semibold">
            Ready to find your perfect Madrid apartment? Compare verified listings with instant booking and host reviews to secure your solo adventure today.
          </p>
        </div>
      </div>
    </div>
  );
}
