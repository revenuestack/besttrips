import SimpleGuide from '@/components/SimpleGuide'

export const metadata = {
  title: 'Best Apartments for Dog Owners in Copenhagen',
  description: 'Copenhagen is a paradise for dog owners seeking apartment rentals, with its abundance of green spaces, dog-friendly culture, and walkable neighborhoods.'
}

export default function Page() {
  const content = {
    "intro": "Copenhagen is a paradise for dog owners seeking apartment rentals, with its abundance of green spaces, dog-friendly culture, and walkable neighborhoods. The city's compact design and welcoming attitude toward pets make it ideal for travelers with four-legged companions. Most apartments offer easy access to parks, waterfront paths, and pet-friendly cafes.",
    "why_stay": [
      "Spacious apartments with balconies or courtyard access provide perfect spaces for your dog to relax comfortably.",
      "Proximity to dog parks like Fælledparken and Amager Strandpark means endless outdoor adventures within walking distance.",
      "Danish landlords typically welcome pets, and many apartments include designated pet washing stations and storage areas."
    ],
    "neighborhoods": [
      "Vesterbro: Trendy area with Søndermarken park nearby, dog-friendly cafes on every corner, and pet supply shops galore.",
      "Østerbro: Family-oriented district featuring Fælledparken, Copenhagen's largest park, perfect for off-leash play and socializing.",
      "Islands Brygge: Waterfront living with harbor baths, green promenades, and a relaxed vibe ideal for morning dog walks."
    ],
    "tips": [
      "Book apartments near parks or waterfront areas to minimize travel time for bathroom breaks and exercise sessions.",
      "Check that your rental includes ground-floor access or elevators, as many Copenhagen buildings feature steep staircases."
    ],
    "cta": "Find your perfect dog-friendly Copenhagen apartment today and experience Scandinavian living with your furry best friend!"
  }
  
  return <SimpleGuide content={content} destination="Copenhagen" slug="best-apartments-dog-owners-copenhagen" title="Best Apartments for Dog Owners in Copenhagen" />
}
