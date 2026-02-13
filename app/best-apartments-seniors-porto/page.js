import SimpleGuide from '@/components/SimpleGuide'

export const metadata = {
  title: 'Best Apartments for Seniors in Porto: Comfort Meets Portuguese Charm',
  description: 'Discover senior-friendly apartments in Porto, Portugal. Find accessible, comfortable accommodations in this UNESCO-listed city with stunning river views, walkable neighborhoods, and warm hospitality.'
}

export default function Page() {
  const content = {
    "hook": "Porto offers the perfect blend of old-world European charm and modern senior-friendly accommodations, where cobblestone streets meet elevator-equipped apartments and centuries of history welcome you at a comfortable pace.",
    "why_visit": [
      "Senior-focused apartments in Porto feature modern accessibility—elevators, ground-floor units, and grab bars—while placing you in walkable neighborhoods near Ribeira's riverside cafés, São Bento station's azulejo tiles, and Livraria Lello's stunning architecture.",
      "Portugal ranks among Europe's safest countries with exceptional healthcare, English-speaking medical staff, and a cost of living 30-40% lower than other Western European cities, making extended stays both affordable and worry-free.",
      "Porto's compact historic center, efficient public transport with senior discounts, and famously welcoming locals create an ideal environment for mature travelers seeking cultural immersion without the overwhelming pace of larger capitals."
    ],
    "insider_tips": [
      "Book apartments in Foz do Douro or Boavista districts for flat terrain, beachfront promenades, and excellent infrastructure—avoid steep Ribeira hills unless your apartment has direct elevator access.",
      "Visit September-October for warm weather, fewer crowds, and grape harvest festivals; many apartment buildings offer monthly rates with significant discounts for longer stays."
    ],
    "logistics": "Porto's Francisco Sá Carneiro Airport sits 20 minutes from the city center via metro (lilac line) or accessible taxis. Most senior-friendly apartments cluster in Boavista, Foz, and Cedofeita neighborhoods.",
    "cta": "Browse our curated selection of elevator-equipped, senior-friendly apartments in Porto's safest neighborhoods and start planning your Portuguese adventure today."
  }
  
  return <SimpleGuide content={content} title="Best Apartments for Seniors in Porto: Comfort Meets Portuguese Charm" />
}
