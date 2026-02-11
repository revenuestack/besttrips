export const metadata = {
  title: "Best Guesthouses for Couples in London: Romantic Boutique Stays & Cozy Retreats",
  description: "Discover intimate guesthouses perfect for couples in London. Charming rooms, personalized service, and romantic neighborhoods for your perfect city escape."
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Best Guesthouses for Couples in London</h1>
      
      <div className="prose prose-lg">
        <p className="lead text-xl mb-6">
          London's guesthouses offer couples something hotels can't match: intimate charm, personalized attention, and that home-away-from-home warmth. Tucked into historic townhouses across Notting Hill, Bloomsbury, and South Kensington, these boutique stays combine period features with modern comforts, creating the perfect romantic backdrop for your London adventure.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Why Stay Here</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Intimate settings with just 5-10 rooms ensure privacy and quiet for couples</li>
          <li>Personal touches like homemade breakfasts, local recommendations, and welcoming hosts who remember your names</li>
          <li>Prime locations in romantic neighborhoods within walking distance of parks, cafes, and cultural attractions</li>
          <li>Better value than hotels with character-filled rooms featuring vintage furnishings, exposed beams, and cozy fireplaces</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Things to Know</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Book well in advance, especially for weekends and Valentine's season, as the best guesthouses fill quickly</li>
          <li>Many are located in period buildings with stairs and no lifts—confirm accessibility if needed</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">About the Area</h2>
        <p>
          London's most romantic guesthouses cluster in tree-lined neighborhoods like Notting Hill with its pastel houses and antique markets, literary Bloomsbury near the British Museum, and elegant South Kensington steps from Hyde Park. These areas offer village-like charm within the bustling capital.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
          <p className="text-lg font-semibold">
            Ready for an intimate London escape? Browse our curated selection of couple-friendly guesthouses and book your romantic retreat today.
          </p>
        </div>
      </div>
    </div>
  );
}
