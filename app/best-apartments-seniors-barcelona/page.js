export const metadata = {
  title: 'Best Apartments for Seniors in Barcelona: Comfort Meets Culture',
  description: 'Discover senior-friendly apartments in Barcelona offering accessibility, comfort, and proximity to healthcare, dining, and cultural attractions in Spain\'s vibrant Mediterranean city.'
}

export default function Page() {
  const content = {
    "hook": "Barcelona combines Mediterranean charm with modern accessibility, making it an ideal destination for seniors seeking apartment rentals that balance comfort, culture, and convenience.",
    "why_visit": [
      "Barcelona offers excellent public transportation with senior discounts, including accessible metro stations and buses, making it easy to explore neighborhoods like Eixample and Gràcia without a car.",
      "The city boasts world-class healthcare facilities, many English-speaking doctors, and pharmacies on nearly every block, providing peace of mind for extended stays.",
      "Year-round mild climate, pedestrian-friendly promenades along the beach, and numerous parks create ideal conditions for leisurely walks and outdoor activities suited to seniors."
    ],
    "insider_tips": [
      "Book apartments in Eixample or Sarrià neighborhoods for elevator-equipped buildings, wide sidewalks, nearby markets, and quieter streets away from tourist crowds.",
      "Visit during spring (April-May) or fall (September-October) for pleasant temperatures, fewer tourists, and lower apartment rental rates while still enjoying outdoor terraces and festivals."
    ],
    "logistics": "Most senior-friendly apartments are located within walking distance of metro stations. Request ground-floor or elevator-accessible units. Many buildings offer concierge services and have nearby supermarkets like Mercadona or Carrefour. Ensure your apartment has air conditioning for summer months.",
    "cta": "Start your Barcelona apartment search today and experience the perfect blend of Mediterranean lifestyle, cultural richness, and senior-friendly amenities in one of Europe's most welcoming cities."
  }
  
  return <div>{JSON.stringify(content)}</div>
}
