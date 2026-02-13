import SimpleGuide from '@/components/SimpleGuide'

export const metadata = {
  title: 'Best Apartments for Seniors in London: Comfort Meets Culture',
  description: 'Discover senior-friendly apartments in London offering accessibility, convenience, and proximity to healthcare, parks, and cultural attractions. Your perfect London home awaits.'
}

export default function Page() {
  const content = {
    "hook": "London's vibrant neighborhoods offer apartments perfectly suited for seniors seeking independence, accessibility, and cultural enrichment in one of the world's most historic cities.",
    "why_visit": [
      "Exceptional healthcare access with world-class hospitals like St. Thomas' and The Royal Marsden within easy reach of most neighborhoods",
      "Accessible public transport with senior discounts, step-free tube stations, and Freedom Pass eligibility for London residents over 60",
      "Rich cultural life including free museum entry, beautiful parks like Hyde Park and Kew Gardens, and senior-friendly community centers throughout the city"
    ],
    "insider_tips": [
      "Focus on ground-floor or lift-equipped apartments in neighborhoods like Kensington, Bloomsbury, or Richmond—these areas offer excellent walkability, nearby medical facilities, and peaceful green spaces",
      "Many London boroughs offer sheltered housing schemes with on-site wardens and communal facilities; contact local councils directly for waiting lists and eligibility requirements"
    ],
    "logistics": "Book viewings through reputable estate agents specializing in senior accommodation. Consider proximity to GP surgeries, pharmacies, and grocery delivery services. Most senior-friendly apartments range from £1,200-£2,500 monthly depending on location and amenities.",
    "cta": "Start your London apartment search today and discover the perfect blend of independence, safety, and cultural richness tailored for your golden years."
  }
  
  return <SimpleGuide content={content} title="Best Apartments for Seniors in London: Comfort Meets Culture" />
}
