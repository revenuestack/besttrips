export const metadata = {
  title: 'Best Apartments for Families in Prague',
  description: 'Prague offers exceptional apartment rentals perfect for families seeking space, comfort, and authentic local experiences.'
}

export default function Page() {
  const content = {
    "intro": "Prague offers exceptional apartment rentals perfect for families seeking space, comfort, and authentic local experiences. These self-catering accommodations provide the flexibility and amenities busy families need while exploring this enchanting European capital.",
    "why_stay": [
      "Apartments offer full kitchens and living spaces, letting families maintain routines and save money on dining out.",
      "Many family apartments feature multiple bedrooms and bathrooms, providing privacy and comfort for everyone in your group.",
      "Self-catering accommodations in residential neighborhoods give children authentic cultural experiences beyond typical tourist hotels."
    ],
    "neighborhoods": [
      "Vinohrady - Leafy residential district with parks, playgrounds, farmers markets, and excellent public transport to Old Town.",
      "Malá Strana - Charming Lesser Town below Prague Castle, offering cobblestone streets, gardens, and walking distance to attractions.",
      "Karlín - Trendy up-and-coming neighborhood with modern amenities, riverside parks, cafes, and metro access to city center."
    ],
    "tips": [
      "Book apartments with elevators if traveling with strollers, as many historic buildings have steep stairs without lifts.",
      "Purchase Prague transport passes for unlimited tram and metro rides - children under 6 travel free with adults."
    ],
    "cta": "Discover your perfect family apartment in Prague and create unforgettable memories in one of Europe's most magical cities."
  }
  
  return <div>{JSON.stringify(content)}</div>
}
