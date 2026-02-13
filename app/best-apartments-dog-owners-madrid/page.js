import SimpleGuide from '@/components/SimpleGuide'

export const metadata = {
  title: 'Best Apartments for Dog Owners in Madrid',
  description: 'Madrid welcomes four-legged travelers with open arms, offering excellent apartment rentals in dog-friendly neighborhoods.'
}

export default function Page() {
  const content = {
    "intro": "Madrid welcomes four-legged travelers with open arms, offering excellent apartment rentals in dog-friendly neighborhoods. The city's abundant parks, outdoor cafés, and pet-welcoming culture make it ideal for extended stays with your canine companion.",
    "why_stay": [
      "Spacious apartments with balconies provide comfortable home bases near Madrid's extensive network of dog parks and green spaces.",
      "Pet-friendly rental policies are common, with many buildings offering ground-floor units and easy access to outdoor areas.",
      "Central locations mean walkable access to veterinary clinics, pet supply stores, and dog-welcoming restaurants with terrace seating."
    ],
    "neighborhoods": [
      "Retiro: Adjacent to Madrid's largest park with dedicated off-leash areas, perfect for morning walks and evening playtime.",
      "Chamberí: Quiet residential streets with local pet shops, tree-lined sidewalks, and proximity to Santander Park's dog zones.",
      "Malasaña: Trendy neighborhood with pet-friendly cafés, urban green spaces, and a welcoming community of local dog owners."
    ],
    "tips": [
      "Book apartments with easy elevator access or ground floors, and confirm pet policies including size restrictions and additional fees upfront.",
      "Visit during spring or fall when temperatures are moderate—Madrid summers can be too hot for extended walks on pavement."
    ],
    "cta": "Discover your perfect dog-friendly apartment in Madrid and experience Spain's vibrant capital with your best friend by your side."
  }
  
  return <SimpleGuide content={content} title="Best Apartments for Dog Owners in Madrid" />
}
