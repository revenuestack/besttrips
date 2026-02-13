import SimpleGuide from '@/components/SimpleGuide'

export const metadata = {
  title: 'Best Apartments for Dog Owners in Barcelona',
  description: 'Barcelona welcomes four-legged travelers with open arms, offering dog-friendly apartments that combine Mediterranean lifestyle with canine comfort.'
}

export default function Page() {
  const content = {
  "intro": "Barcelona welcomes four-legged travelers with open arms, offering dog-friendly apartments that combine Mediterranean lifestyle with canine comfort. From beachside studios to spacious flats near parks, the city's rental market caters perfectly to pet parents seeking temporary homes.",
  "why_stay": [
    "Many Barcelona apartments feature private terraces and balconies, perfect for morning coffee while your pup lounges.",
    "The city's extensive network of dog parks and beaches means adventure is always walking distance away.",
    "Local landlords increasingly welcome pets, with flexible policies and nearby veterinary services for peace of mind."
  ],
  "neighborhoods": [
    "Poblenou - Modern apartments near dog-friendly beaches with converted industrial lofts and the expansive Parc del Centre del Poblenou.",
    "Gràcia - Charming village-like area with numerous plazas, shaded squares perfect for dog socialization, and pet-welcoming cafés.",
    "Eixample - Spacious high-ceiling flats close to multiple veterinary clinics, pet stores, and the beloved Parc de Joan Miró."
  ],
  "tips": [
    "Book apartments near Metro stops allowing dogs (most lines permit pets in off-peak hours) for easy city exploration.",
    "Request ground-floor units or buildings with elevators, and confirm nearby green spaces before booking your stay."
  ],
  "cta": "Start searching for your perfect dog-friendly Barcelona apartment today and discover why this vibrant city is a tail-wagging paradise for traveling pets!"
}

  return <SimpleGuide content={content} title="Best Apartments for Dog Owners in Barcelona" />
}
