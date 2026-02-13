import SimpleGuide from '@/components/SimpleGuide'

export const metadata = {
  title: 'Best Apartments for Seniors in Madrid: Comfort Meets Culture',
  description: 'Discover senior-friendly apartments in Madrid offering accessibility, healthcare proximity, and vibrant cultural experiences in Spain\'s welcoming capital.'
}

export default function Page() {
  const content = {
    "hook": "Madrid combines world-class healthcare, walkable neighborhoods, and a pace of life that honors both activity and relaxation—perfect for seniors seeking apartment living abroad.",
    "why_visit": [
      "Exceptional healthcare system with English-speaking specialists and hospitals within easy reach of most neighborhoods, plus Spain's reputation for longevity and quality senior care",
      "Accessible neighborhoods like Salamanca, Chamberí, and Retiro offer elevator-equipped buildings, wide sidewalks, parks for gentle strolls, and abundant cafés for social connection",
      "Year-round mild climate, affordable cost of living compared to other European capitals, and a culture that deeply respects and includes older generations in daily life"
    ],
    "insider_tips": [
      "Focus on apartments near Metro stations with elevators (newer lines 10-12) and look for buildings with 'ascensor' and doorman services for added security and assistance",
      "Visit during spring or fall to explore neighborhoods at your own pace, and consider short-term rentals first to test different districts before committing long-term"
    ],
    "logistics": "Madrid-Barajas Airport connects to the city center via Metro, taxi, or accessible airport shuttle. Most senior-friendly apartments cluster in central districts with excellent public transport. The Metro offers reduced fares for seniors, and many buildings include community amenities.",
    "cta": "Start your Madrid apartment search today and discover why thousands of international seniors have made Spain's capital their home."
  }
  
  return <SimpleGuide content={content} title="Best Apartments for Seniors in Madrid: Comfort Meets Culture" />
}
