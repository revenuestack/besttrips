export const metadata = {
  title: 'Best Apartments for Dog Owners in Porto',
  description: 'Porto welcomes four-legged travelers with open arms, offering a growing selection of pet-friendly apartments perfect for extended stays.'
}

export default function Page() {
  const content = {
    "intro": "Porto welcomes four-legged travelers with open arms, offering a growing selection of pet-friendly apartments perfect for extended stays. The city's compact size, riverside parks, and relaxed café culture make it ideal for exploring with your canine companion. Modern apartments throughout the city combine comfort with convenience, ensuring both you and your dog feel at home.",
    "why_stay": [
      "Spacious apartments with balconies or terraces provide safe outdoor spaces for your dog to relax and breathe fresh air.",
      "Many buildings feature ground-floor access and nearby green spaces, making quick bathroom breaks and daily walks incredibly convenient.",
      "Pet-friendly local culture means most cafés and restaurants welcome dogs, letting you enjoy Porto's social scene together."
    ],
    "neighborhoods": [
      "Foz do Douro - Coastal neighborhood with beach access, oceanfront promenades, and spacious parks perfect for energetic dogs.",
      "Boavista - Modern residential area featuring Parque da Cidade, Porto's largest urban park with extensive walking trails and off-leash zones.",
      "Ribeira - Historic riverside district with cobblestone paths along the Douro, offering scenic walks and dog-friendly outdoor dining."
    ],
    "tips": [
      "Book apartments near Parque da Cidade or Jardins do Palácio de Cristal for easy access to Porto's best dog-walking spots.",
      "Confirm pet policies upfront including any size restrictions, deposits, or additional cleaning fees to avoid surprises at check-in."
    ],
    "cta": "Discover your perfect Porto apartment today and start planning an unforgettable Portuguese adventure with your furry best friend!"
  }
  
  return <div>{JSON.stringify(content)}</div>
}
