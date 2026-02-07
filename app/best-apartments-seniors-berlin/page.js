export const metadata = {
  title: 'Best Apartments for Seniors in Berlin: Comfortable Living in Germany\'s Vibrant Capital',
  description: 'Discover the best senior-friendly apartments in Berlin offering accessibility, healthcare proximity, and cultural charm. Your guide to comfortable retirement living in Germany\'s capital.'
}

export default function Page() {
  const content = {
    "hook": "Berlin combines rich history, excellent healthcare, and senior-friendly infrastructure, making it an ideal destination for comfortable apartment living in your golden years.",
    "why_visit": [
      "Berlin offers exceptional public transportation with senior discounts, extensive accessibility features, and apartments in neighborhoods like Charlottenburg and Zehlendorf designed with aging-in-place amenities including elevators, grab bars, and proximity to medical facilities.",
      "The city's comprehensive healthcare system includes world-class hospitals, English-speaking doctors, and specialized geriatric care centers, with many senior apartments located within walking distance of pharmacies and clinics.",
      "Rich cultural offerings including museums with senior rates, beautiful parks like Tiergarten for gentle walks, active senior community centers, and vibrant cafés create an engaging lifestyle without the high costs of other European capitals."
    ],
    "insider_tips": [
      "Focus on apartments in Steglitz-Zehlendorf or Charlottenburg-Wilmersdorf districts, which offer quieter streets, excellent healthcare access, and strong senior communities with German-English language exchange programs.",
      "Request apartments with südbalkon (south-facing balconies) for natural warmth and light, and verify Hausmeister (building manager) services for maintenance assistance and package handling."
    ],
    "logistics": "Berlin's retirement visa options and rental protections favor long-term tenants. Most senior-friendly apartments require proof of income and a SCHUFA credit report. Budget €800-1,500 monthly for comfortable one-bedroom apartments in senior-preferred districts.",
    "cta": "Start your Berlin apartment search today and discover why thousands of international seniors choose Germany's welcoming capital for their retirement years."
  }
  
  return <div>{JSON.stringify(content)}</div>
}
