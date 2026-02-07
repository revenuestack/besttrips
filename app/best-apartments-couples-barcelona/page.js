export const metadata = {
  title: 'Best Apartments for Couples in Barcelona',
  description: 'Barcelona offers couples an enchanting blend of Mediterranean charm, architectural wonders, and vibrant culture.'
}

export default function Page() {
  const content = {
  "intro": "Barcelona offers couples an enchanting blend of Mediterranean charm, architectural wonders, and vibrant culture. Staying in a private apartment provides intimacy, authentic neighborhood experiences, and the freedom to create your own romantic rhythm in this captivating Catalan capital.",
  "why_stay": [
    "Enjoy complete privacy with fully equipped kitchens perfect for intimate breakfast-in-bed moments and candlelit dinners together.",
    "Experience authentic Barcelona living in residential neighborhoods away from tourist crowds, discovering local markets and hidden cafés.",
    "Save significantly compared to hotels while gaining more space, balconies with views, and flexible check-in times."
  ],
  "neighborhoods": [
    "Eixample: Famous for Gaudí's architecture, tree-lined boulevards, rooftop terraces, and countless tapas bars within walking distance.",
    "Gothic Quarter: Medieval charm with narrow romantic alleys, intimate plazas, cathedral views, and proximity to beaches.",
    "Gràcia: Bohemian village atmosphere with artisan shops, cozy squares, local festivals, and authentic Catalan character."
  ],
  "tips": [
    "Book apartments with air conditioning for summer visits and confirm reliable Wi-Fi if working remotely during your stay.",
    "Choose locations near metro stations for easy exploration and verify building elevator availability if mobility matters."
  ],
  "cta": "Discover your perfect Barcelona apartment today and start planning an unforgettable romantic escape in Spain's most enchanting city."
}

  return <div>{JSON.stringify(content)}</div>
}
