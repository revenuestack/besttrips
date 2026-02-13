import SimpleGuide from '@/components/SimpleGuide'

export const metadata = {
  title: 'Best Apartments for Adventure Seekers in Lyon',
  description: 'Discover top Lyon apartments perfectly positioned for adventure seekers, with easy access to Alps skiing, cycling trails, and outdoor activities.'
}

export default function Page() {
  const content = {
  "intro": "Lyon is an adventure seeker's dream base, offering immediate access to urban cycling trails, river sports, and proximity to the French Alps for skiing and hiking. Staying in a well-located apartment gives you the perfect launching pad for both city explorations and mountain expeditions. Choose accommodations that balance comfort with quick access to Lyon's outdoor playground and surrounding alpine adventures.",
  "why_stay": [
    "Lyon's strategic location puts you just 90 minutes from world-class Alps skiing, hiking, and paragliding while offering urban adventures like hillside cycling and river kayaking.",
    "Apartment rentals provide secure gear storage, early-start flexibility, and space to plan multi-day expeditions without hotel checkout constraints.",
    "Neighborhoods like Croix-Rousse and Confluence offer immediate access to cycling paths, climbing spots, and trail networks that connect directly to wilderness areas."
  ],
  "neighborhoods": [
    "Croix-Rousse: This hillside district features steep cycling climbs, direct access to the Monts d'Or trails, and a vibrant local market scene perfect for stocking up before dawn alpine departures.",
    "Confluence: Modern waterfront neighborhood with immediate Rhône and Saône river access for kayaking, plus bike paths leading south to Pilat Regional Park's hiking trails.",
    "Vieux Lyon: Historic quarter positioned at the base of Fourvière Hill's climbing routes and trail running paths, with metro connections to regional adventure destinations."
  ],
  "tips": [
    "Book apartments with secure bike storage and early check-in options, as most alpine adventures require 5-6 AM departures to beat crowds and afternoon weather.",
    "Choose locations near TCL metro stations for quick access to Gare de Lyon-Part-Dieu, where trains depart hourly to Chamonix, Annecy, and Grenoble adventure hubs."
  ],
  "cta": "Book your Lyon adventure apartment today and unlock access to both urban thrills and Alpine expeditions from France's ultimate outdoor basecamp."
}

  return <SimpleGuide content={content} destination="Lyon" slug="best-apartments-adventure-lyon" title="Best Apartments for Adventure Seekers in Lyon" />
}
