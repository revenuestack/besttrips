export const metadata = {
  title: 'Best Apartments for Families in Vienna',
  description: 'Vienna offers families an exceptional blend of imperial grandeur, modern amenities, and child-friendly attractions.'
}

export default function Page() {
  const content = {
    "intro": "Vienna offers families an exceptional blend of imperial grandeur, modern amenities, and child-friendly attractions. Apartment rentals provide the space and flexibility families need to explore this enchanting city at their own pace. From spacious flats near historic palaces to modern accommodations with full kitchens, Vienna's family apartments deliver comfort and convenience.",
    "why_stay": [
      "Full kitchens and laundry facilities help families maintain routines while saving money on dining out every meal.",
      "Multiple bedrooms and living spaces give everyone room to spread out after busy days exploring museums and parks.",
      "Neighborhood locations provide authentic Viennese experiences with bakeries, markets, and playgrounds steps from your door."
    ],
    "neighborhoods": [
      "Innere Stadt: Central district with walking access to Stephansdom, Hofburg Palace, and family-friendly cafes along pedestrian streets.",
      "Leopoldstadt: Home to Prater amusement park and green spaces, offering larger apartments at better value than downtown.",
      "Neubau: Trendy seventh district with MuseumsQuartier nearby, excellent public transport, and welcoming atmosphere for young families."
    ],
    "tips": [
      "Book apartments near U-Bahn stations for easy access to attractions; Vienna's public transit is stroller-friendly and efficient.",
      "Look for properties with elevators in historic buildings, as many charming older apartments require climbing multiple flights of stairs."
    ],
    "cta": "Discover your perfect family apartment in Vienna and create unforgettable memories in one of Europe's most magical cities."
  }
  
  return <div>{JSON.stringify(content)}</div>
}
