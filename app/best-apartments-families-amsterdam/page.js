export const metadata = {
  title: 'Best Apartments for Families in Amsterdam',
  description: 'Amsterdam\'s family-friendly apartments offer the perfect home base for exploring this enchanting Dutch city with children.'
}

export default function Page() {
  const content = {
    "intro": "Amsterdam's family-friendly apartments offer the perfect home base for exploring this enchanting Dutch city with children. Spacious rentals with full kitchens and living areas provide comfort and flexibility that hotels simply can't match. From canal-side charm to modern conveniences, Amsterdam's apartment options cater perfectly to families seeking memorable European adventures.",
    "why_stay": [
      "Full kitchens let you prepare kid-friendly meals, saving money while accommodating picky eaters and dietary needs effortlessly.",
      "Extra space means children have room to play while parents relax, creating a true home-away-from-home experience.",
      "Washing machines in many apartments make packing light possible, especially helpful for families with young children prone to spills."
    ],
    "neighborhoods": [
      "Jordaan: Charming canals, cozy cafes, and the Anne Frank House nearby. Safe streets perfect for stroller walks.",
      "De Pijp: Vibrant local vibe with the famous Albert Cuyp Market. Excellent playgrounds and family-run eateries throughout.",
      "Oud-West: Residential feel near Vondelpark, Amsterdam's green heart. Quiet evenings, easy tram access to major attractions."
    ],
    "tips": [
      "Book apartments with bike storage and rent family cargo bikes to explore like locals—kids love riding through the city.",
      "Choose ground-floor or elevator-equipped buildings, as many charming canal houses have steep stairs challenging with strollers and luggage."
    ],
    "cta": "Discover your perfect Amsterdam family apartment today and create unforgettable memories in this magical, bike-friendly city!"
  }
  
  return <div>{JSON.stringify(content)}</div>
}
