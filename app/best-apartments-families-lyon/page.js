export const metadata = {
  title: 'Best Apartments for Families in Lyon',
  description: 'Lyon offers family-friendly apartments in safe, charming neighborhoods perfect for exploring France\'s culinary capital.'
}

export default function Page() {
  const content = {
    "intro": "Lyon offers family-friendly apartments in safe, charming neighborhoods perfect for exploring France's culinary capital. From spacious Presqu'île flats to residential Croix-Rousse homes, families find excellent value and authentic French living. Well-connected public transport makes sightseeing with children effortless.",
    "why_stay": [
      "Apartments provide kitchen facilities, perfect for preparing meals for picky eaters and saving on dining costs.",
      "More space than hotels means children can play comfortably while parents relax after exploring Lyon's attractions.",
      "Living like locals in residential neighborhoods offers authentic cultural immersion and access to markets and parks."
    ],
    "neighborhoods": [
      "Presqu'île: Central peninsula between rivers with shops, museums, and Bellecour Square—walkable and family-friendly.",
      "Croix-Rousse: Historic hilltop district with village atmosphere, playgrounds, and the famous traboules (secret passageways) kids love.",
      "Confluence: Modern riverside area with science museum, shopping center, and contemporary architecture near peaceful waterfront paths."
    ],
    "tips": [
      "Book apartments near metro or funicular stations for easy access to Parc de la Tête d'Or, Europe's largest urban park.",
      "Choose accommodations with washing machines for longer stays, and verify elevator availability if traveling with strollers or young children."
    ],
    "cta": "Discover your perfect family apartment in Lyon and create unforgettable memories in this enchanting French city."
  }
  
  return <div>{JSON.stringify(content)}</div>
}
