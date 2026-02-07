export const metadata = {
  title: 'Best Apartments for Adventure Seekers in Lyon',
  description: 'Lyon offers the perfect basecamp for adventurers seeking urban exploration and outdoor thrills.'
}

export default function Page() {
  const content = {
  "intro": "Lyon offers the perfect basecamp for adventurers seeking urban exploration and outdoor thrills. Nestled between the Rhône and Saône rivers with the Alps nearby, this vibrant city combines historic charm with adrenaline-pumping activities. Choose an apartment here to experience authentic French living while accessing world-class hiking, cycling, and water sports.",
  "why_stay": [
    "Central location provides easy access to paragliding in Annecy, skiing in Chamonix, and rock climbing in Bugey.",
    "Lyon's traboules and hillside neighborhoods offer urban exploration, steep climbs, and breathtaking panoramic city views daily.",
    "Riverside bike paths, kayaking opportunities, and nearby Via Ferrata routes make every weekend an outdoor adventure playground."
  ],
  "neighborhoods": [
    "Croix-Rousse: The bohemian hilltop district with steep staircases, street art, and stunning sunrise views over the city.",
    "Confluence: Modern waterfront area where two rivers meet, perfect for cycling, riverside runs, and contemporary urban exploration.",
    "Vieux Lyon: Historic Renaissance quarter with secret traboules, cobblestone climbs, and proximity to Fourvière hill hiking trails."
  ],
  "tips": [
    "Rent apartments near metro stations for quick escapes to Chartreuse or Vercors regional parks within 90 minutes.",
    "Book accommodations with secure bike storage and consider neighborhoods offering both nightlife and early morning trail access."
  ],
  "cta": "Find your Lyon adventure apartment today and unlock the gateway to Alpine thrills and urban exploration in France's outdoor capital!"
}

  return <div>{JSON.stringify(content)}</div>
}
