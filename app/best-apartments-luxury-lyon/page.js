import GuideLayout from '@/components/GuideLayout'

export const metadata = {
  title: "Best Apartments for Luxury Travelers in Lyon",
  description: "Discover Lyon's finest luxury apartment rentals in prime neighborhoods. Experience France's gastronomic capital with upscale amenities, stunning views, and Renaissance charm."
}

export default function Page() {
  const guide = {
    destination: "Lyon",
    country: "France",
    type: "Apartments",
    audience: "Luxury Travelers",
    hook: "Lyon blends Renaissance elegance with contemporary luxury, offering discerning travelers sophisticated apartment stays in France's culinary heart.",
    why_stay: [
      "Spacious luxury apartments in Presqu'île and Vieux Lyon feature high-end furnishings, chef-worthy kitchens, and often stunning Saône or Rhône river views, providing more privacy and comfort than hotels.",
      "Access Lyon's legendary gastronomic scene from your doorstep—many luxury apartments sit steps from Michelin-starred restaurants, Les Halles de Lyon Paul Bocuse market, and artisan boulangeries.",
      "Premium apartments offer exclusive amenities like private terraces overlooking terracotta rooftops, concierge services, dedicated parking in the historic center, and proximity to silk boutiques and traboules."
    ],
    considerations: [
      "Vieux Lyon's cobblestone streets and Renaissance buildings lack elevators in many historic properties—confirm accessibility and ensure ground-floor or elevator access if needed.",
      "Peak seasons (June-September, December) require booking 3-4 months ahead for premier properties, and luxury apartments command €250-600+ nightly in prime locations."
    ],
    neighborhood_tips: "Presqu'île offers upscale shopping and dining between two rivers. Vieux Lyon provides UNESCO-listed charm with traboules and Renaissance courtyards. Confluence delivers contemporary luxury with modern architecture and waterfront dining.",
    booking_advice: "Prioritize verified luxury platforms with detailed photos, confirm air conditioning for summer stays, and request properties with fully equipped kitchens to maximize Lyon's market-fresh ingredients. Book directly with property managers for potential upgrades."
  }

  return <GuideLayout guide={guide} />
}
