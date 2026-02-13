import SimpleGuide from '@/components/SimpleGuide'

export const metadata = {
  title: 'Best Apartments for Dog Owners in Florence',
  description: 'Florence welcomes four-legged travelers with open arms, offering charming apartments in dog-friendly neighborhoods.'
}

export default function Page() {
  const content = {
    "intro": "Florence welcomes four-legged travelers with open arms, offering charming apartments in dog-friendly neighborhoods. The city's compact size, abundant parks, and pet-welcoming culture make it ideal for apartment stays with your canine companion.",
    "why_stay": [
      "Apartments provide more space and freedom for dogs compared to hotels, with kitchen access for meals.",
      "Many Florence apartments feature private terraces or courtyards where dogs can relax after exploring the city.",
      "Staying in residential neighborhoods lets you experience authentic Florentine life alongside local dog owners and their pets."
    ],
    "neighborhoods": [
      "Oltrarno: Artisan quarter across the Arno River with cobblestone streets, dog-friendly cafes, and proximity to Boboli Gardens.",
      "San Frediano: Trendy, laid-back area with tree-lined streets, local parks, and welcoming outdoor dining spots for you and your pup.",
      "Campo di Marte: Residential district near Cascine Park, Florence's largest green space perfect for long walks and off-leash areas."
    ],
    "tips": [
      "Request ground-floor apartments or buildings with elevators, as many historic Florentine buildings have steep staircases without lifts.",
      "Book apartments near Parco delle Cascine or Giardino di Boboli for easy morning walks and designated dog exercise areas."
    ],
    "cta": "Find your perfect dog-friendly Florence apartment today and create unforgettable memories exploring Renaissance beauty with your loyal companion by your side."
  }
  
  return <SimpleGuide content={content} destination="Florence" slug="best-apartments-dog-owners-florence" title="Best Apartments for Dog Owners in Florence" />
}
