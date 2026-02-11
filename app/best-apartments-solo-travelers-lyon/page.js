export const metadata = {
  title: "Best Apartments for Solo Travelers in Lyon: Central, Safe & Affordable Stays",
  description: "Discover the best apartments for solo travelers in Lyon. Safe neighborhoods, walkable locations, and budget-friendly options in France's culinary capital."
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Best Apartments for Solo Travelers in Lyon</h1>
      
      <div className="prose prose-lg">
        <p className="lead text-xl mb-6">
          Lyon offers solo travelers the perfect blend of urban energy and intimate charm. Staying in a self-catered apartment gives you the freedom to explore at your own pace while enjoying authentic Lyonnais life in neighborhoods like Presqu'île, Vieux Lyon, and Croix-Rousse.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Why Stay Here</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Independence and flexibility with your own space, kitchen, and schedule—ideal for solo explorers who value privacy</li>
          <li>Walkable neighborhoods near metro stations, making it easy to navigate the city safely, even after evening riverside strolls</li>
          <li>Cost-effective alternative to hotels, especially for week-long stays, with local markets perfect for budget-conscious travelers</li>
          <li>Immersive local experience in residential buildings where you'll live like a Lyonnais, not a tourist</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Things to Know</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Check-in procedures vary widely—some require meeting hosts, others use lockboxes. Confirm details before arrival to avoid confusion</li>
          <li>Apartments in historic Vieux Lyon may have steep stairs and no elevators. If mobility is a concern, prioritize modern buildings in Part-Dieu or Confluence</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">About the Area</h2>
        <p>
          Lyon's compact layout makes it ideal for solo apartment stays. The Presqu'île peninsula between two rivers offers central access to museums, restaurants, and nightlife. Croix-Rousse provides bohemian vibes and hilltop views, while Vieux Lyon delivers medieval charm. All neighborhoods are well-connected by the efficient TCL metro system.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
          <p className="text-lg font-semibold">
            Browse verified apartments in Lyon's safest, most connected neighborhoods and book your solo adventure today.
          </p>
        </div>
      </div>
    </div>
  );
}
