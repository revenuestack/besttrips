export const metadata = {
  title: 'Best Apartments for Families in Venice',
  description: 'Venice offers families a magical experience with apartment stays that provide space, comfort, and authentic local living.'
}

export default function Page() {
  const content = {
    "intro": "Venice offers families a magical experience with apartment stays that provide space, comfort, and authentic local living. Choosing the right apartment in this enchanting city means balancing proximity to attractions with peaceful residential charm. Family-friendly apartments often feature kitchens, multiple bedrooms, and easy access to supermarkets and playgrounds.",
    "why_stay": [
      "Apartments provide spacious accommodations with kitchens, saving money on dining while accommodating picky eaters and dietary needs.",
      "Enjoy flexible schedules without hotel checkout times, allowing leisurely mornings and naptime without rushing tired children around.",
      "Experience authentic Venetian neighborhoods where kids can observe local life, visit neighborhood bakeries, and practice Italian greetings."
    ],
    "neighborhoods": [
      "Cannaregio - Quieter residential area with supermarkets, local parks, and excellent vaporetto connections to major attractions without crowds.",
      "Dorsoduro - Family-friendly district featuring open squares like Campo Santa Margherita, gelaterias, and proximity to the Accademia.",
      "Castello - Authentic neighborhood with gardens, playgrounds near Via Garibaldi, and fewer tourists while maintaining walkable access to landmarks."
    ],
    "tips": [
      "Book ground-floor apartments or buildings with elevators, as Venice's historic buildings often have steep stairs challenging with strollers and luggage.",
      "Choose accommodations near vaporetto stops for easy transportation, and purchase family travel passes for unlimited water bus access throughout your stay."
    ],
    "cta": "Discover your perfect Venetian family apartment today and create unforgettable memories in Italy's floating city!"
  }
  
  return <div>{JSON.stringify(content)}</div>
}
