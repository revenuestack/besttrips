export const metadata = {
  title: "Best B&Bs for Adventure Seekers in Athens, Greece | Active Travel Guide",
  description: "Discover the top bed and breakfasts in Athens perfect for adventure seekers. Stay near hiking trails, climbing spots, and coastal adventures in Greece's capital."
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Best B&Bs for Adventure Seekers in Athens</h1>
      
      <div className="prose prose-lg">
        <p className="lead text-xl mb-6">
          Athens isn't just ancient ruins and museums—it's an adventure playground where mountains meet the Mediterranean. The best B&Bs for adventure seekers position you perfectly between urban exploration and wild terrain, offering cozy retreats after days spent hiking Mount Hymettus, rock climbing at Varasova, or kayaking the Athenian Riviera. These locally-run guesthouses combine authentic Greek hospitality with strategic locations that put trailheads, dive centers, and cycling routes within easy reach.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Why Stay Here</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Direct access to hiking trails on Mount Lycabettus and Parnitha National Park, with hosts who share local route knowledge</li>
          <li>Walking distance to adventure tour operators offering rock climbing, canyoning, and coastal kayaking experiences</li>
          <li>Personalized breakfast fuel for active days, often featuring homemade Greek specialties and packed lunch options</li>
          <li>Insider tips from local hosts on hidden adventure spots tourists miss, from secret swimming coves to mountain bike trails</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Things to Know</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Book B&Bs in Plaka or Kolonaki for quick access to both Acropolis trails and nearby mountains via public transport</li>
          <li>Summer temperatures exceed 35°C (95°F)—spring and fall offer ideal adventure conditions with comfortable B&B stays</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">About the Area</h2>
        <p>
          Athens combines urban energy with surprising wilderness access. The city is flanked by mountains ideal for hiking and climbing, while the Saronic Gulf coastline offers water sports just 30 minutes away. Most adventure-friendly B&Bs cluster in neighborhoods with metro access to trailheads and coastal routes.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
          <p className="text-lg font-semibold">
            Ready to experience Athens beyond the guidebook? Book an adventure-ready B&B and discover Greece's wild side with local hosts who know every trail and hidden gem.
          </p>
        </div>
      </div>
    </div>
  );
}
