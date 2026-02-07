export const metadata = {
  title: 'Best Senior-Friendly Apartments in Amsterdam: Comfort Meets Culture',
  description: 'Discover the best apartments for seniors in Amsterdam. Find accessible, comfortable accommodations near healthcare, public transport, and cultural attractions in this senior-friendly city.'
}

export default function Page() {
  const content = {
    "hook": "Amsterdam welcomes seniors with a perfect blend of accessible living, world-class healthcare, and rich cultural experiences—all within easy reach of thoughtfully designed apartments.",
    "why_visit": [
      "Amsterdam offers exceptional senior-friendly infrastructure with flat terrain, extensive public transportation, and apartments designed for accessibility. Many buildings feature elevators, ground-floor units, and proximity to medical facilities.",
      "The city's compact layout means everything is nearby—museums, parks, shops, and cafes are often within walking distance or a short tram ride. The Dutch healthcare system is among Europe's finest, with English-speaking doctors readily available.",
      "Senior apartments in neighborhoods like De Pijp, Oud-West, and Jordaan provide quiet residential charm while staying connected to Amsterdam's vibrant culture. Many buildings offer community spaces fostering social connections among residents."
    ],
    "insider_tips": [
      "Book apartments near tram lines 2, 5, or 12 for easy access to central attractions without navigating cobblestones. Request ground-floor or elevator-equipped buildings when booking.",
      "Consider apartments with nearby Albert Heijn supermarkets offering delivery services. The OV-chipkaart (public transport card) provides senior discounts—purchase one for significant savings during your stay."
    ],
    "logistics": "Most senior-friendly apartments require minimum week-long stays. Book 2-3 months ahead for spring/summer. Schiphol Airport connects via direct train to Central Station in 15 minutes, with taxis available for door-to-door service.",
    "cta": "Start your Amsterdam adventure today—browse senior-friendly apartments and discover why this accessible, welcoming city is perfect for your next extended stay."
  }
  
  return <div>{JSON.stringify(content)}</div>
}
