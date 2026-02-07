export const metadata = {
  title: 'Best Apartments for Dog Owners in Barcelona',
  description: 'Barcelona offers dog-friendly apartments in vibrant neighborhoods where your furry companion is genuinely welcome.'
}

export default function Page() {
  const content = {
    "intro": "Barcelona offers dog-friendly apartments in vibrant neighborhoods where your furry companion is genuinely welcome. The city's pet-positive culture, abundant green spaces, and Mediterranean climate make it an ideal destination for travelers with dogs. From beachside walks to cozy neighborhood parks, Barcelona apartments provide the perfect base for exploring with your four-legged friend.",
    "why_stay": [
      "Access to dog-friendly beaches like Platja de Llevant where your pup can swim and play freely year-round.",
      "Proximity to expansive parks including Parc de la Ciutadella with dedicated off-leash areas for socialization and exercise.",
      "Welcoming terrace cafes and restaurants that provide water bowls and treats for canine guests throughout the city."
    ],
    "neighborhoods": [
      "Eixample: Wide boulevards and spacious streets perfect for walks, with numerous pet stores and veterinary clinics nearby.",
      "Gràcia: Charming village atmosphere with intimate plazas, local parks, and a strong community of dog owners.",
      "Poblenou: Beach access and modern apartments near the waterfront promenade, ideal for morning and evening seaside strolls."
    ],
    "tips": [
      "Book apartments with private terraces or ground-floor access for convenient bathroom breaks and outdoor relaxation time.",
      "Confirm pet policies in advance and request apartments near parks or green spaces to minimize transportation needs."
    ],
    "cta": "Discover Barcelona's best dog-friendly apartments today and create unforgettable Mediterranean memories with your beloved companion!"
  }
  
  return <div>{JSON.stringify(content)}</div>
}
