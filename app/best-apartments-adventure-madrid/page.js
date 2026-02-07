export const metadata = {
  title: 'Best Apartments for Adventure Seekers in Madrid',
  description: 'Madrid offers adventure seekers the perfect blend of urban exploration and outdoor thrills.'
}

export default function Page() {
  const content = {
  "intro": "Madrid offers adventure seekers the perfect blend of urban exploration and outdoor thrills. From rock climbing in nearby Sierra de Guadarrama to cycling the Madrid Río park, your apartment base puts endless adventures at your doorstep. Choose accommodations in vibrant neighborhoods that keep the adrenaline flowing day and night.",
  "why_stay": [
    "Apartments provide flexible schedules for early mountain departures and late flamenco nights without hotel checkout constraints.",
    "Local neighborhoods offer authentic tapas bars, climbing gyms, and bike rental shops within walking distance daily.",
    "Spacious layouts with kitchens let you fuel adventures properly and store gear like hiking boots securely."
  ],
  "neighborhoods": [
    "Malasaña - Bohemian hub with street art, rooftop bars, vintage shops, and easy metro access to adventure hotspots.",
    "Lavapiés - Multicultural district offering authentic experiences, affordable eats, and proximity to Retiro Park for running and rowing.",
    "Chamberí - Upscale yet authentic area near cycling routes, with excellent transport links to climbing areas and ski resorts."
  ],
  "tips": [
    "Book apartments near metro lines 1 or 5 for quickest access to Sierra de Guadarrama trailheads and adventure day trips.",
    "Request ground-floor or elevator apartments if bringing bikes, climbing gear, or planning active daily itineraries with heavy equipment."
  ],
  "cta": "Book your Madrid adventure apartment today and transform your trip into an unforgettable base camp for urban and mountain exploration."
}

  return <div>{JSON.stringify(content)}</div>
}
