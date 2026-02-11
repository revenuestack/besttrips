export const metadata = {
  title: "Best Family Villas in Florence: Spacious Tuscan Retreats Near Top Attractions",
  description: "Discover the best family villas in Florence with gardens, pools, and space for everyone. Stay near the Duomo while enjoying authentic Tuscan comfort."
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Best Family Villas in Florence</h1>
      
      <div className="prose prose-lg">
        <p className="lead text-xl mb-6">
          Florence's family villas offer the perfect blend of Renaissance charm and modern comfort. These spacious accommodations provide room for everyone to spread out after days exploring the Uffizi and Ponte Vecchio, with private gardens and pools that give children space to play while parents sip Chianti on sun-drenched terraces.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Why Stay Here</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Private pools and gardens perfect for kids to play safely between museum visits</li>
          <li>Full kitchens let families save money and accommodate picky eaters with home-cooked meals</li>
          <li>Multiple bedrooms and living spaces give everyone privacy and room to recharge</li>
          <li>Authentic Tuscan architecture creates memorable experiences in historic neighborhoods</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Things to Know</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Many villas sit in hillside locations requiring rental cars and confidence navigating narrow Italian roads</li>
          <li>Book well in advance for summer stays—the best family properties fill up 6-9 months early</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">About the Area</h2>
        <p>
          Florence's best family villas cluster in quieter neighborhoods like Fiesole and Oltrarno, offering hillside views and local trattorias while staying within 15-20 minutes of the Duomo. These areas provide authentic neighborhood experiences where kids can visit local gelaterias and families can shop at morning markets.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
          <p className="text-lg font-semibold">
            Start planning your Florentine family adventure today—browse our curated selection of verified family villas with instant booking.
          </p>
        </div>
      </div>
    </div>
  );
}
