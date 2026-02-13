import SimpleGuide from '@/components/SimpleGuide'

export const metadata = {
  title: 'Best Apartments for Dog Owners in Copenhagen',
  description: 'Copenhagen stands out as one of Europe\'s most dog-friendly cities, where apartments welcome four-legged residents with open arms.'
}

export default function Page() {
  const content = {
  "intro": "Copenhagen stands out as one of Europe's most dog-friendly cities, where apartments welcome four-legged residents with open arms. The Danish capital combines modern pet-friendly housing with abundant green spaces, making it ideal for dog owners seeking urban convenience without sacrificing their pet's quality of life.",
  "why_stay": [
    "Copenhagen apartments often feature nearby dog parks, with Amager Fælled and Fælledparken offering endless off-leash adventures.",
    "Danish landlords embrace pet ownership, with most rentals allowing dogs and buildings providing dedicated waste stations.",
    "Walkable neighborhoods mean your dog enjoys daily stimulation exploring canals, pedestrian streets, and waterfront promenades effortlessly."
  ],
  "neighborhoods": [
    "Vesterbro - Trendy area with dog-friendly cafes, proximity to Søndermarken park, and modern pet-welcoming apartment complexes",
    "Østerbro - Family-oriented district bordering Fælledparken, featuring spacious apartments and dedicated dog beaches along the harbor",
    "Islands Brygge - Waterfront living with harbor baths, excellent walking paths, and contemporary apartments with balconies for dogs"
  ],
  "tips": [
    "Register your dog with Danish authorities within two weeks and ensure microchipping and rabies vaccinations are current.",
    "Download the DejligeDage app to find dog-friendly restaurants, shops, and services throughout your Copenhagen neighborhood."
  ],
  "cta": "Book your dog-friendly Copenhagen apartment today and discover why Danish living puts tails wagging across the city!"
}

  return <SimpleGuide content={content} destination="Copenhagen" slug="best-apartments-dogs-copenhagen" title="Best Apartments for Dog Owners in Copenhagen" />
}
