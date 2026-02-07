export const metadata = {
  title: 'Best Apartments for Families in Madrid',
  description: 'Madrid offers families an exceptional blend of culture, green spaces, and child-friendly attractions, making apartment stays ideal for exploring at your own pace.'
}

export default function Page() {
  const content = {
    "intro": "Madrid offers families an exceptional blend of culture, green spaces, and child-friendly attractions, making apartment stays ideal for exploring at your own pace. Spacious apartments provide the comfort of home with kitchens to prepare familiar meals and room for kids to relax. The city's excellent metro system connects family-friendly neighborhoods to parks, museums, and attractions effortlessly.",
    "why_stay": [
      "Apartments offer more space and amenities than hotels, with separate bedrooms and living areas for family comfort.",
      "Self-catering kitchens save money and accommodate picky eaters, while local markets provide authentic Spanish ingredients to explore.",
      "Residential neighborhoods give families authentic Madrid experiences, with playgrounds, parks, and local cafes welcoming children warmly."
    ],
    "neighborhoods": [
      "Retiro: Adjacent to the stunning Retiro Park, this upscale area offers tree-lined streets, puppet shows, and boat rentals perfect for families.",
      "Chamberí: A charming, residential neighborhood with excellent schools, local markets, playgrounds, and authentic tapas bars welcoming families.",
      "Salamanca: Safe, elegant district with wide sidewalks, upscale shopping, and proximity to museums, ideal for families seeking comfort and culture."
    ],
    "tips": [
      "Book apartments with air conditioning for summer visits, as Madrid temperatures soar. Many older buildings lack cooling systems.",
      "Choose locations near metro stations for easy access to attractions. The Madrid metro is stroller-friendly and efficient."
    ],
    "cta": "Discover your perfect family apartment in Madrid today and create unforgettable Spanish memories together!"
  }
  
  return <div>{JSON.stringify(content)}</div>
}
