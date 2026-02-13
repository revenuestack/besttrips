import SimpleGuide from '@/components/SimpleGuide'

export const metadata = {
  title: 'Best Apartments for Dog Owners in Brussels',
  description: 'Brussels offers exceptional apartment living for dog owners, combining urban convenience with abundant green spaces.'
}

export default function Page() {
  const content = {
    "intro": "Brussels offers exceptional apartment living for dog owners, combining urban convenience with abundant green spaces. The city's pet-friendly culture, extensive park network, and welcoming attitude toward canine companions make it ideal for travelers with four-legged friends. From spacious rentals near forests to cozy urban retreats, Brussels caters perfectly to dogs and their owners.",
    "why_stay": [
      "Brussels boasts over 8,000 hectares of green spaces, including the stunning Sonian Forest for endless dog adventures.",
      "Most Brussels apartments welcome dogs, with many featuring balconies, courtyards, and nearby off-leash dog parks throughout the city.",
      "Excellent public transport allows dogs, making it easy to explore charming neighborhoods and pet-friendly cafes with your companion."
    ],
    "neighborhoods": [
      "Ixelles - Tree-lined streets near Bois de la Cambre park, dog-friendly terraces, and spacious apartments with gardens.",
      "Woluwe-Saint-Pierre - Quiet residential area adjacent to Woluwe Park, perfect for morning walks and family-friendly apartment complexes.",
      "Uccle - Upscale neighborhood with large apartments, proximity to Sonian Forest, and numerous veterinary clinics nearby."
    ],
    "tips": [
      "Book apartments near Parc du Cinquantenaire or Bois de la Cambre for daily exercise, and confirm dog policies including size restrictions.",
      "Download the Brussels Dogs app to locate dog zones, waste stations, and pet supply stores throughout your stay."
    ],
    "cta": "Find your perfect dog-friendly apartment in Brussels today and experience Belgium's capital with your best friend by your side!"
  }
  
  return <SimpleGuide content={content} title="Best Apartments for Dog Owners in Brussels" />
}
