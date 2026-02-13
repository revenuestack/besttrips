import SimpleGuide from '@/components/SimpleGuide'

export const metadata = {
  title: 'Best Apartments for Adventure Seekers in Paris',
  description: 'Paris isn\'t just museums and cafés—it\'s an adventure playground for thrill-seekers.'
}

export default function Page() {
  const content = {
  "intro": "Paris isn't just museums and cafés—it's an adventure playground for thrill-seekers. Staying in apartments gives you the freedom to start early, return late, and live like a local explorer. Choose neighborhoods with quick access to climbing gyms, riverside trails, and day-trip departure points.",
  "why_stay": [
    "Apartments offer flexible schedules perfect for sunrise Seine kayaking sessions and late-night returns from climbing gyms.",
    "Self-catering kitchens let you fuel up properly before biking Bois de Vincennes or hiking Fontainebleau's boulder fields.",
    "Local neighborhoods provide authentic bases near hidden skateparks, parkour spots, and adventure community hubs throughout Paris."
  ],
  "neighborhoods": [
    "Belleville: Edgy hillside district with stunning city views, street art, and proximity to Buttes-Chaumont's cliff-climbing park.",
    "Canal Saint-Martin: Waterside location perfect for morning runs, bike paths, and easy access to climbing gyms in northeastern Paris.",
    "13th Arrondissement: Modern area near Seine docks for kayaking, close to Fontainebleau forest access via quick train connections."
  ],
  "tips": [
    "Rent bikes through Vélib' stations to explore Bois de Boulogne, Vincennes forest, and riverside paths extending 50+ kilometers.",
    "Book apartments near Gare de Lyon or Gare du Nord for weekend escapes to Fontainebleau climbing or Normandy coasteering adventures."
  ],
  "cta": "Find your Paris adventure base today and unlock the city's wild side from your own apartment!"
}

  return <SimpleGuide content={content} destination="Paris" slug="best-apartments-adventure-paris" title="Best Apartments for Adventure Seekers in Paris" />
}
