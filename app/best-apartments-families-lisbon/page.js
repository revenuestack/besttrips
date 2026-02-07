export const metadata = {
  title: 'Best Apartments for Families in Lisbon',
  description: 'Lisbon offers families an enchanting blend of history, culture, and coastal charm.'
}

export default function Page() {
  const content = {
    "intro": "Lisbon offers families an enchanting blend of history, culture, and coastal charm. Staying in a family apartment provides space, flexibility, and authentic neighborhood experiences. From cobblestone streets to sunny beaches, Lisbon welcomes families with open arms.",
    "why_stay": [
      "Family apartments offer full kitchens and separate bedrooms, perfect for maintaining routines and preparing kid-friendly meals affordably.",
      "Spacious living areas give children room to play while parents relax, creating a true home-away-from-home experience.",
      "Neighborhood locations provide authentic Portuguese experiences, local markets, playgrounds, and proximity to family-friendly attractions and transportation."
    ],
    "neighborhoods": [
      "Alfama - Historic district with winding streets, colorful tiles, and castle views. Charming but hilly, best for adventurous families.",
      "Parque das Nações - Modern waterfront area with parks, the Oceanarium, cable cars, and flat, stroller-friendly promenades.",
      "Belém - Cultural hub near monuments, gardens, and the famous pastéis de nata bakery. Spacious and family-oriented."
    ],
    "tips": [
      "Book apartments with elevators, as Lisbon's hills and old buildings often mean multiple flights of stairs.",
      "Choose neighborhoods near metro stations for easy access to beaches, attractions, and the iconic yellow trams kids love."
    ],
    "cta": "Discover your perfect family apartment in Lisbon and create unforgettable memories in Portugal's captivating capital!"
  }
  
  return <div>{JSON.stringify(content)}</div>
}
