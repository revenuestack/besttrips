import GuideLayout from '@/components/GuideLayout'

export const metadata = {
  title: "Best Apartments for Groups in Lyon: Space, Style & Central Location",
  description: "Discover the best group apartments in Lyon. From Presqu'île to Vieux Lyon, find spacious, well-equipped rentals perfect for families and friends exploring France's gastronomic capital."
}

export default function Page() {
  const guide = {
    destination: "Lyon",
    country: "France",
    type: "Apartments",
    audience: "Groups",
    hook: "Lyon's charm multiplies when experienced with friends or family, and the city's apartment rentals offer the perfect base for group adventures in France's culinary capital.",
    why_stay: [
      "Spacious layouts with multiple bedrooms and common areas give everyone room to spread out while staying together, often at a fraction of hotel costs per person",
      "Full kitchens let you shop at Les Halles de Lyon Paul Bocuse and cook together, or simply store leftovers from the city's incredible bouchons and restaurants",
      "Neighborhoods like Presqu'île, Croix-Rousse, and Confluence offer walkable access to museums, Roman ruins, riverside parks, and Lyon's famous traboules (secret passageways)"
    ],
    considerations: [
      "Many charming buildings lack elevators, so confirm accessibility if mobility is a concern or you're hauling luggage up narrow staircases",
      "Peak seasons (June-September, December) require booking 2-3 months ahead, especially for larger apartments sleeping 6+ people"
    ],
    neighborhood_tips: "Presqu'île offers central access between rivers. Vieux Lyon provides medieval atmosphere near UNESCO sites. Croix-Rousse delivers local vibes with hillside views and artisan markets.",
    booking_advice: "Verify exact occupancy limits, check kitchen equipment inventories, and confirm parking availability if driving. Read reviews mentioning noise levels and WiFi quality for group needs."
  }

  return <GuideLayout guide={guide} />
}
