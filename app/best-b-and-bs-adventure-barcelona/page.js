export const metadata = {
  title: "Best B&Bs for Adventure Seekers in Barcelona | Mountain & Coast Stays",
  description: "Discover Barcelona's top B&Bs perfectly positioned for adventure. Stay near Montserrat trails, Costa Brava kayaking spots, and mountain biking routes."
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Best B&Bs for Adventure Seekers in Barcelona</h1>
      
      <div className="prose prose-lg">
        <p className="lead text-xl mb-6">
          Barcelona isn't just about Gaudí and tapas—it's an adventure playground where mountains meet the Mediterranean. The best B&Bs for thrill-seekers position you perfectly between Montserrat's rocky peaks, coastal kayaking routes, and mountain biking trails in Collserola Natural Park. These intimate accommodations offer local insider tips, gear storage, and early breakfasts to fuel your adventures.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Why Stay Here</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Prime locations near hiking trails, climbing spots, and water sports centers</li>
          <li>Personalized local advice from hosts who know the best adventure routes and hidden gems</li>
          <li>Secure bike and gear storage with early breakfast options for dawn departures</li>
          <li>Authentic neighborhood experiences in Gràcia, Poblenou, or near Parc de Collserola</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Things to Know</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Book accommodations in outer neighborhoods for easier access to natural parks and coastal activities</li>
          <li>Many B&Bs have stairs and no elevators—confirm accessibility if traveling with heavy adventure gear</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">About the Area</h2>
        <p>
          Barcelona's unique geography offers beach access, mountain trails within 30 minutes, and world-class rock climbing at Montserrat. The city's efficient metro and regional train system makes B&Bs in residential neighborhoods ideal bases for both urban exploration and outdoor adventures.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
          <p className="text-lg font-semibold">
            Find your perfect adventure base—browse Barcelona's best B&Bs for active travelers and start planning your action-packed escape.
          </p>
        </div>
      </div>
    </div>
  );
}
