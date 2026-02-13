import SimpleGuide from '@/components/SimpleGuide'

export const metadata = {
  title: 'Best Apartments for Seniors in Dublin: Comfort Meets Irish Charm',
  description: 'Discover senior-friendly apartments in Dublin offering accessibility, convenience, and proximity to Ireland\'s rich culture, healthcare facilities, and vibrant neighborhoods.'
}

export default function Page() {
  const content = {
    "hook": "Dublin's welcoming atmosphere and senior-friendly infrastructure make it an ideal destination for retirees seeking comfortable apartment living with easy access to world-class healthcare, culture, and community.",
    "why_visit": [
      "Dublin offers excellent public transportation with senior discounts, including the Leap Card system, making it easy to navigate the city without driving while staying connected to cultural attractions, parks, and medical facilities.",
      "The city boasts numerous ground-floor and elevator-equipped apartment complexes in safe neighborhoods like Ballsbridge, Ranelagh, and Sandymount, designed with accessibility features and close to shops, pharmacies, and community centers.",
      "Ireland's healthcare system provides comprehensive coverage for seniors, with many apartments located near top hospitals like St. Vincent's and Beaumont, plus Dublin's mild climate and walkable neighborhoods promote active, healthy living year-round."
    ],
    "insider_tips": [
      "Look for apartments near the DART coastal train line for stunning views and easy beach access, while staying connected to city amenities—areas like Dún Laoghaire and Howth are particularly popular with retirees.",
      "Consider short-term apartment rentals first to explore different neighborhoods before committing; many property management companies offer flexible leases and services like grocery delivery and maintenance specifically for senior residents."
    ],
    "logistics": "Most senior-friendly apartments in Dublin range from €1,200-2,500 monthly. Book viewings through Irish estate agents specializing in senior housing, and verify accessibility features like handrails, walk-in showers, and emergency call systems before signing.",
    "cta": "Start your Dublin apartment search today and discover why Ireland's capital is becoming a top choice for discerning seniors seeking culture, comfort, and community."
  }
  
  return <SimpleGuide content={content} title="Best Apartments for Seniors in Dublin: Comfort Meets Irish Charm" />
}
