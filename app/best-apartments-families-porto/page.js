export const metadata = {
  title: 'Best Apartments for Families in Porto',
  description: 'Porto offers an exceptional blend of historic charm and modern comfort for families seeking apartment accommodations.'
}

export default function Page() {
  const content = {
    "intro": "Porto offers an exceptional blend of historic charm and modern comfort for families seeking apartment accommodations. Family-friendly apartments provide spacious living areas, full kitchens, and proximity to Porto's stunning riverfront, colorful neighborhoods, and world-class attractions. Choosing an apartment gives families the flexibility and space they need for a memorable Portuguese adventure.",
    "why_stay": [
      "Spacious apartments offer multiple bedrooms and living areas, giving families room to spread out and relax comfortably together.",
      "Full kitchens allow you to prepare meals with fresh local ingredients, accommodating picky eaters and saving money on dining.",
      "Many family apartments feature terraces or balconies with stunning Douro River views, perfect for morning coffee or evening relaxation."
    ],
    "neighborhoods": [
      "Ribeira - Historic riverside district with colorful buildings, waterfront promenades, and easy walking access to attractions and restaurants.",
      "Boavista - Modern, residential area with parks, shopping centers, and the iconic Casa da Música, ideal for families wanting local atmosphere.",
      "Foz do Douro - Coastal neighborhood where the river meets the Atlantic, offering beaches, seafood restaurants, and peaceful residential streets."
    ],
    "tips": [
      "Book apartments with elevators if available, as Porto's hilly terrain and older buildings often feature steep stairs challenging with strollers or luggage.",
      "Consider apartments near metro stations or tram lines for easy access to beaches, attractions, and day trips throughout the region."
    ],
    "cta": "Discover your perfect family apartment in Porto today and create unforgettable memories exploring Portugal's captivating second city together!"
  }
  
  return <div>{JSON.stringify(content)}</div>
}
