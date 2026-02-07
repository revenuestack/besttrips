export const metadata = {
  title: 'Best Apartments for Dog Owners in Dublin',
  description: 'Dublin offers exceptional apartment living for dog owners, combining urban convenience with abundant green spaces.'
}

export default function Page() {
  const content = {
  "intro": "Dublin offers exceptional apartment living for dog owners, combining urban convenience with abundant green spaces. The city's welcoming attitude toward pets and numerous dog-friendly parks make it an ideal destination for travelers with four-legged companions.",
  "why_stay": [
    "Proximity to Phoenix Park, one of Europe's largest enclosed parks with extensive off-leash areas for dogs.",
    "Dog-friendly culture with many cafes, pubs, and restaurants welcoming pets on patios and outdoor seating areas.",
    "Excellent veterinary services and pet supply stores conveniently located throughout the city for any pet needs."
  ],
  "neighborhoods": [
    "Ballsbridge: Upscale area near Herbert Park with tree-lined streets, riverside walks along the Dodder, and pet-friendly establishments.",
    "Portobello: Trendy neighborhood featuring canal-side paths perfect for dog walks, vibrant cafe culture, and close to St. Stephen's Green.",
    "Drumcondra: Family-friendly area adjacent to Griffith Park, offering quieter streets and easy access to Botanic Gardens' dog-walking routes."
  ],
  "tips": [
    "Book apartments near designated dog exercise areas and verify pet policies including any size restrictions or additional fees.",
    "Download the Dublin Dog Walking app to find nearby parks, waste disposal stations, and connect with local dog-owner communities."
  ],
  "cta": "Discover your perfect dog-friendly Dublin apartment today and experience Ireland's capital with your furry best friend by your side!"
}

  return <div>{JSON.stringify(content)}</div>
}
