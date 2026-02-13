import SimpleGuide from '@/components/SimpleGuide'

export const metadata = {
  title: 'Best Apartments for Dog Owners in Paris',
  description: 'Paris welcomes four-legged travelers with open arms, offering exceptional pet-friendly apartments across the city.'
}

export default function Page() {
  const content = {
  "intro": "Paris welcomes four-legged travelers with open arms, offering exceptional pet-friendly apartments across the city. From spacious rentals near sprawling parks to charming studios in dog-loving neighborhoods, you'll find the perfect home base for exploring the City of Light with your canine companion.",
  "why_stay": [
    "Apartments provide more space and comfort than hotels, with kitchens to prepare fresh meals for your pup.",
    "Many rentals feature private courtyards or balconies where dogs can relax after exploring Parisian streets and parks.",
    "Local neighborhood living lets you discover dog-friendly cafés, boulangeries, and green spaces like a true Parisian."
  ],
  "neighborhoods": [
    "Marais: Historic charm meets dog-friendly culture with cobblestone streets, boutique pet shops, and proximity to Seine riverside walks.",
    "Buttes-Chaumont: Near the stunning park of the same name, offering 25 hectares of off-leash areas, hills, and waterfall views.",
    "Saint-Germain-des-Prés: Sophisticated Left Bank neighborhood with elegant gardens, outdoor café seating that welcomes dogs, and tree-lined boulevards."
  ],
  "tips": [
    "Book apartments near Bois de Vincennes or Bois de Boulogne for easy access to Paris's largest dog-friendly parks.",
    "Confirm pet policies before booking and ask about nearby veterinarians, pet supply stores, and designated dog relief areas."
  ],
  "cta": "Start planning your Parisian adventure today and discover why Paris is one of Europe's most dog-friendly destinations for apartment stays!"
}

  return <SimpleGuide content={content} title="Best Apartments for Dog Owners in Paris" />
}
