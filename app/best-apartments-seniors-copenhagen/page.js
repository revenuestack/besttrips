export const metadata = {
  title: 'Best Apartments for Seniors in Copenhagen: Comfort Meets Scandinavian Charm',
  description: 'Discover the best senior-friendly apartments in Copenhagen. Find accessible, centrally-located accommodations perfect for exploring Denmark\'s vibrant capital in comfort and style.'
}

export default function Page() {
  const content = {
    "hook": "Copenhagen's senior-friendly apartments combine modern accessibility with cozy Danish hygge, making it effortless to experience one of Europe's most walkable and welcoming capitals.",
    "why_visit": [
      "Copenhagen ranks among the world's most accessible cities, with flat terrain, excellent public transport, and pedestrian-friendly neighborhoods perfect for seniors seeking independence and ease of movement.",
      "Senior-focused apartments often feature elevators, ground-floor access, and proximity to healthcare facilities, while neighborhoods like Frederiksberg and Østerbro offer peaceful charm with nearby cafes and parks.",
      "The city's compact size means cultural attractions like Tivoli Gardens, Nyhavn harbor, and world-class museums are never far from your doorstep, with most offering senior discounts and rest areas."
    ],
    "insider_tips": [
      "Book apartments near metro or S-train stations for effortless city exploration—Copenhagen's public transport includes elevators and accessibility features at most stops.",
      "Visit during May through September for the best weather, and consider apartments with southern exposure for natural warmth and light during the shorter shoulder seasons."
    ],
    "logistics": "Most senior-friendly apartments require advance booking (2-3 months recommended). Look for properties with 24-hour contact services and nearby grocery stores. The Copenhagen Card offers unlimited transport and museum access with senior discounts available.",
    "cta": "Ready to experience Danish living at its finest? Browse our curated selection of senior-friendly Copenhagen apartments and start planning your Scandinavian adventure today."
  }
  
  return <div>{JSON.stringify(content)}</div>
}
