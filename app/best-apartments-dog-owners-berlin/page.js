export const metadata = {
  title: 'Best Apartments for Dog Owners in Berlin',
  description: 'Berlin stands out as one of Europe\'s most dog-friendly cities, making it ideal for travelers seeking pet-welcoming apartments.'
}

export default function Page() {
  const content = {
    "intro": "Berlin stands out as one of Europe's most dog-friendly cities, making it ideal for travelers seeking pet-welcoming apartments. With over 2,500 parks, extensive green spaces, and a culture that embraces canine companions, you'll find countless apartment options designed with dog owners in mind.",
    "why_stay": [
      "Access spacious apartments with nearby parks like Tiergarten and Tempelhofer Feld for daily walks and playtime.",
      "Enjoy Berlin's remarkably dog-friendly culture where pets are welcome in cafes, restaurants, and public transportation.",
      "Find affordable apartment rentals compared to other major European cities while maintaining excellent pet amenities."
    ],
    "neighborhoods": [
      "Prenzlauer Berg: Family-friendly area with tree-lined streets, numerous dog parks, and pet-welcoming cafes on every corner.",
      "Kreuzberg: Vibrant neighborhood featuring the sprawling Görlitzer Park and a relaxed attitude toward four-legged residents.",
      "Charlottenburg: Upscale district adjacent to massive Tiergarten park, offering elegant apartments with easy green space access."
    ],
    "tips": [
      "Book apartments near U-Bahn or S-Bahn stations—Berlin's public transport welcomes dogs without carriers or muzzles required.",
      "Visit local pet stores like Fressnapf for supplies and ask landlords about nearby Hundewiese (off-leash dog areas)."
    ],
    "cta": "Discover your perfect dog-friendly Berlin apartment today and experience the city's unmatched pet-welcoming hospitality!"
  }
  
  return <div>{JSON.stringify(content)}</div>
}
