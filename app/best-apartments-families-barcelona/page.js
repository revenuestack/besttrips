import SimpleGuide from '@/components/SimpleGuide'

export const metadata = {
  title: 'Best Apartments for Families in Barcelona',
  description: 'Barcelona offers families the perfect blend of beach life, cultural richness, and urban convenience.'
}

export default function Page() {
  const content = {
  "intro": "Barcelona offers families the perfect blend of beach life, cultural richness, and urban convenience. Renting an apartment gives you the space, flexibility, and authentic local experience hotels can't match. From Gothic Quarter charm to beachfront Barceloneta, family-friendly neighborhoods abound with parks, markets, and endless exploration.",
  "why_stay": [
    "Spacious apartments with full kitchens let families save money and accommodate picky eaters with ease.",
    "Many rentals feature multiple bedrooms, living areas, and balconies perfect for spreading out after busy days.",
    "Living like locals in residential neighborhoods provides authentic cultural immersion beyond typical tourist experiences."
  ],
  "neighborhoods": [
    "Eixample: Wide boulevards, playgrounds, and modernist architecture including Gaudí's Sagrada Familia, with excellent metro connections.",
    "Gràcia: Village-like atmosphere with charming plazas, local markets, and Park Güell nearby for family adventures.",
    "Barceloneta: Beachfront location perfect for sandcastle days, seafood dining, and evening promenades along the Mediterranean."
  ],
  "tips": [
    "Book apartments with air conditioning and elevators, especially in older buildings with multiple floors and stairs.",
    "Choose locations near metro stations for easy access to attractions, and look for weekly markets nearby."
  ],
  "cta": "Start planning your Barcelona family adventure today and discover why apartment living transforms city breaks into unforgettable experiences!"
}

  return <SimpleGuide content={content} destination="Barcelona" slug="best-apartments-families-barcelona" title="Best Apartments for Families in Barcelona" />
}
