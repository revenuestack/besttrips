import SimpleGuide from '@/components/SimpleGuide'

export const metadata = {
  title: 'Best Apartments for Seniors in Lyon: Comfort Meets French Elegance',
  description: 'Discover senior-friendly apartments in Lyon, France. From Presqu\'île charm to Croix-Rousse hillside living, find your perfect retirement haven in France\'s gastronomic capital.'
}

export default function Page() {
  const content = {
    "hook": "Lyon offers seniors an unparalleled blend of cultural richness, world-class healthcare, and apartment living that balances independence with accessibility.",
    "why_visit": [
      "Healthcare Excellence: Lyon boasts top-tier medical facilities including Hôpital Édouard Herriot and specialized geriatric care centers, with many senior apartments located near major hospitals and clinics.",
      "Walkable Neighborhoods: Districts like Presqu'île, Part-Dieu, and Bellecour feature ground-floor and elevator-equipped apartments near markets, pharmacies, and cultural venues—perfect for maintaining an active lifestyle.",
      "Rich Cultural Life: Enjoy opera at Opéra Nouvel, riverside walks along the Rhône and Saône, and UNESCO-listed Old Lyon, all easily accessible via Lyon's senior-friendly public transport system."
    ],
    "insider_tips": [
      "Target residence services like Domitys or Les Senioriales that offer apartments with optional meal services, housekeeping, and social activities while maintaining independence.",
      "Visit during spring or fall for comfortable weather when exploring neighborhoods; request ground-floor units in historic buildings that may lack elevators."
    ],
    "logistics": "Senior apartments range from €800-2,000 monthly. Long-term rentals require proof of income and French guarantor. Many facilities offer trial stays. Public transport passes provide senior discounts.",
    "cta": "Begin your Lyon apartment search today and discover why France's third-largest city is becoming a premier retirement destination for discerning seniors."
  }
  
  return <SimpleGuide content={content} title="Best Apartments for Seniors in Lyon: Comfort Meets French Elegance" />
}
