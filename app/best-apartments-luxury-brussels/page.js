export const metadata = {
  title: 'Best Apartments for Luxury in Brussels',
  description: 'Brussels combines European sophistication with Belgian charm, making it ideal for discerning travelers seeking luxury apartment accommodations.'
}

export default function Page() {
  const content = {
    "intro": "Brussels combines European sophistication with Belgian charm, making it ideal for discerning travelers seeking luxury apartment accommodations. The city's elegant neighborhoods offer spacious, well-appointed rentals with modern amenities and classic architecture. Experience authentic Brussels living while enjoying five-star comfort and privacy.",
    "why_stay": [
      "Luxury apartments provide more space, privacy, and authentic local experiences than traditional hotels in Brussels.",
      "Many feature designer interiors, gourmet kitchens, and premium locations near Grand Place and European Quarter.",
      "Enjoy concierge services, rooftop terraces, and easy access to Michelin-starred dining and world-class museums."
    ],
    "neighborhoods": [
      "Sablon: Upscale district with antique shops, chocolatiers, and elegant squares. Perfect for art lovers and gourmands.",
      "Louise/Ixelles: Chic area featuring designer boutiques, Art Nouveau architecture, and trendy restaurants along Avenue Louise.",
      "European Quarter: Modern, cosmopolitan neighborhood with excellent connectivity, fine dining, and proximity to Cinquantenaire Park."
    ],
    "tips": [
      "Book apartments near Metro stations for easy access to attractions. The Brussels Card offers unlimited transport and museum entry.",
      "Visit during spring or fall for pleasant weather. Reserve luxury rentals 2-3 months ahead for major events and EU summits."
    ],
    "cta": "Discover your perfect Brussels luxury apartment today and immerse yourself in Europe's most underrated capital city."
  }
  
  return <div>{JSON.stringify(content)}</div>
}
