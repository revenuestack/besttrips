export const metadata = {
  title: 'Best Apartments for Seniors in Paris: Safe, Accessible & Central Living',
  description: 'Discover senior-friendly apartments in Paris with elevator access, proximity to healthcare, and easy transport links. Live comfortably in the City of Light.'
}

export default function Page() {
  const content = {
    "hook": "Paris isn't just for the young—it's a city where seniors can thrive in comfort, safety, and style. With the right apartment, you'll enjoy world-class culture, excellent healthcare, and charming neighborhoods designed for gracious living.",
    "why_visit": [
      "Exceptional healthcare system with English-speaking doctors and top hospitals like Hôpital Américain nearby, plus comprehensive senior services and pharmacies on every corner",
      "Senior-friendly neighborhoods like the 7th, 15th, and 16th arrondissements offer ground-level shops, accessible metro stations, and peaceful tree-lined streets with benches and cafés",
      "Rich cultural life with free or discounted museum entry for seniors, daily markets, beautiful parks like Luxembourg Gardens, and a slower, more appreciative pace of Parisian life"
    ],
    "insider_tips": [
      "Prioritize apartments with elevators (ascenseur) in buildings with gardiens (concierges) who provide security and assistance—common in traditional Parisian buildings",
      "Choose locations near Navigo-accessible metro lines with elevator stations (Line 14 is fully accessible) or bus routes, and within walking distance of pharmacies and boulangeries"
    ],
    "logistics": "Most senior-suitable apartments require 3-month minimum stays. Expect €1,500-3,000/month for furnished one-bedrooms in safe areas. Paris offers excellent public transit with senior discounts, and international health insurance is essential for extended stays.",
    "cta": "Start your Parisian chapter today—search apartments in senior-friendly arrondissements and experience the elegance, safety, and culture that make Paris perfect for your next home."
  }
  
  return <div>{JSON.stringify(content)}</div>
}
