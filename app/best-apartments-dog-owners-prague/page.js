import SimpleGuide from '@/components/SimpleGuide'

export const metadata = {
  title: 'Best Apartments for Dog Owners in Prague',
  description: 'Prague welcomes four-legged travelers with open arms, offering spacious apartments perfect for dog owners.'
}

export default function Page() {
  const content = {
    "intro": "Prague welcomes four-legged travelers with open arms, offering spacious apartments perfect for dog owners. The city's abundance of parks, pet-friendly cafés, and walkable neighborhoods make it an ideal destination for extended stays with your furry companion.",
    "why_stay": [
      "Apartment rentals often include private courtyards or balconies where dogs can relax safely between city adventures.",
      "Prague's extensive green spaces like Letná Park and Stromovka provide endless off-leash areas for exercise and socialization.",
      "Many apartments feature ground-floor access and proximity to veterinary clinics, ensuring convenience and peace of mind."
    ],
    "neighborhoods": [
      "Vinohrady: Tree-lined streets with numerous parks including Riegrovy Sady, plus dog-friendly restaurants and spacious apartment options.",
      "Karlín: Modern district with Vítkov Park nearby, featuring renovated apartments with contemporary amenities and pet services.",
      "Holešovice: Artistic neighborhood adjacent to Stromovka Park, offering affordable apartments and a relaxed, dog-welcoming atmosphere."
    ],
    "tips": [
      "Purchase a public transport ticket for your dog (16 CZK) and carry vaccination records, as some landlords require proof.",
      "Download the DogGo app to locate Prague's designated dog zones, water stations, and waste disposal points throughout the city."
    ],
    "cta": "Book your Prague apartment today and discover why this enchanting city is Central Europe's most dog-friendly destination for extended stays."
  }
  
  return <SimpleGuide content={content} title="Best Apartments for Dog Owners in Prague" />
}
