export const metadata = {
  title: 'Best Apartments for Adventure Seekers in Lisbon',
  description: 'Lisbon offers adventure seekers the perfect base for exploring Portugal\'s dramatic coastline, historic hills, and vibrant outdoor culture.'
}

export default function Page() {
  const content = {
  "intro": "Lisbon offers adventure seekers the perfect base for exploring Portugal's dramatic coastline, historic hills, and vibrant outdoor culture. Staying in an apartment gives you the freedom to start early surf sessions, return from day hikes on your schedule, and experience the city like a local. Choose neighborhoods that balance proximity to adventure with authentic Portuguese charm.",
  "why_stay": [
    "Apartments provide flexible access to early morning surf spots and late-night returns from coastal exploration adventures.",
    "Equipped kitchens let you fuel up properly before climbs, hikes, and water sports without expensive restaurants.",
    "Local neighborhoods offer authentic experiences, bike-friendly streets, and connections to outdoor communities and adventure groups."
  ],
  "neighborhoods": [
    "Alfama: Historic hillside district with cobblestone climbs, stunning viewpoints, and access to riverside cycling paths along the Tagus.",
    "Cais do Sodré: Waterfront hub near ferry terminals for coastal trips, with vibrant nightlife and proximity to surf spots.",
    "Alcântara: Riverside area with modern apartments, bike lanes, climbing gyms, and quick access to Sintra hiking trails."
  ],
  "tips": [
    "Book apartments near metro stations for easy day trips to Cascais beaches, Sintra mountains, and Arrábida Natural Park.",
    "Choose places with bike storage and outdoor gear space; Lisbon's hills are challenging but rewarding for active explorers."
  ],
  "cta": "Find your Lisbon adventure apartment today and unlock Portugal's most thrilling outdoor experiences from your doorstep."
}

  return <div>{JSON.stringify(content)}</div>
}
