import GuideLayout from '@/components/GuideLayout'

export const metadata = {
  title: "Best Apartments for Groups in Vienna: Space, Style & Central Locations",
  description: "Discover the best group apartments in Vienna. Spacious accommodations near top attractions, perfect for families and friends exploring Austria's imperial capital together."
}

export default function Page() {
  const guide = {
    destination: "Vienna",
    country: "Austria",
    type: "Apartments",
    audience: "Groups",
    hook: "Vienna's grand boulevards and imperial palaces are best enjoyed with your favorite people, and group apartments offer the perfect home base for exploring this elegant city together.",
    why_stay: [
      "Cost-effective luxury: Split the cost of spacious apartments with full kitchens, multiple bedrooms, and living areas—often cheaper per person than hotels while offering far more space and privacy.",
      "Live like locals: Cook Viennese pastries in your own kitchen, gather around dining tables for evening wine, and enjoy the freedom of a true home base in the heart of Europe's cultural capital.",
      "Prime locations: Many group apartments occupy historic buildings near Stephansplatz, the Museum Quarter, or charming Neubau, putting coffeehouses, concert halls, and Christmas markets at your doorstep."
    ],
    considerations: [
      "Elevator availability: Many beautiful historic buildings lack elevators—confirm before booking if mobility is a concern, especially for apartments on upper floors.",
      "Minimum stay requirements: Popular group apartments often require 3-4 night minimums, particularly during peak seasons and holiday periods."
    ],
    neighborhood_tips: "Innere Stadt offers unbeatable walkability to attractions, while Neubau and Josefstadt provide authentic residential vibes with excellent cafés. Leopoldstadt combines space with proximity to Prater park.",
    booking_advice: "Book 3-4 months ahead for summer and Christmas market season. Verify exact guest capacity, as Vienna has strict occupancy regulations. Request keyless entry options for flexible arrival times."
  }

  return <GuideLayout guide={guide} />
}
