export const metadata = {
  title: 'Best Apartments for Seniors in Budapest: Comfort, Culture & Accessibility',
  description: 'Discover the best senior-friendly apartments in Budapest. From thermal baths to accessible neighborhoods, find your perfect Hungarian home with safety, comfort, and charm.'
}

export default function Page() {
  const content = {
    "hook": "Budapest offers seniors the perfect blend of Old World charm and modern comfort, with affordable apartments in accessible neighborhoods that put thermal baths, historic sites, and excellent healthcare within easy reach.",
    "why_visit": [
      "Affordable luxury living with senior-friendly apartments featuring elevators, handrails, and ground-floor options in safe neighborhoods like District V (Belváros) and District II (Rózsadomb)",
      "World-renowned thermal baths with therapeutic benefits just minutes from residential areas, plus excellent healthcare facilities and English-speaking medical professionals",
      "Rich cultural life with accessible museums, opera houses, and riverside promenades, all connected by an efficient public transport system with senior discounts"
    ],
    "insider_tips": [
      "Choose apartments near metro Line 1 (the yellow line) for easiest access—stations have elevators and it connects major senior-friendly neighborhoods to attractions",
      "Look for properties in Buda rather than Pest for quieter streets, hillside views, and proximity to nature while staying close to city amenities"
    ],
    "logistics": "Budapest Ferenc Liszt Airport is 16km from the city center, accessible via 100E bus or taxi. Most senior-friendly apartments are in Districts I, II, V, and XII. Long-term rentals average €600-1200 monthly. Hungary offers a residency permit for retirees. Best months to visit are April-June and September-October.",
    "cta": "Start your Budapest apartment search today and discover why thousands of seniors have chosen Hungary's stunning capital for comfortable, cultured retirement living."
  }
  
  return <div>{JSON.stringify(content)}</div>
}
