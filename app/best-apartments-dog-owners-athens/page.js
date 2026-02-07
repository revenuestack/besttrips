export const metadata = {
  title: 'Best Apartments for Dog Owners in Athens',
  description: 'Athens offers dog-loving travelers a perfect blend of ancient history and modern pet-friendly living.'
}

export default function Page() {
  const content = {
    "intro": "Athens offers dog-loving travelers a perfect blend of ancient history and modern pet-friendly living. Finding the right apartment in this vibrant city means your furry companion can explore alongside you while enjoying comfortable, welcoming accommodations.",
    "why_stay": [
      "Many Athens apartments feature balconies and terraces, ideal for morning routines and fresh air breaks.",
      "Proximity to dog-friendly parks like Pedion Areos and National Garden makes daily walks exciting adventures.",
      "Local pet shops and veterinary clinics are abundant, ensuring your dog's needs are always met."
    ],
    "neighborhoods": [
      "Kolonaki: Upscale area with tree-lined streets, close to Lycabettus Hill trails and numerous outdoor cafés welcoming dogs.",
      "Pangrati: Residential charm near Panathenaic Stadium, featuring quiet streets and the expansive National Garden for off-leash areas.",
      "Petralona: Family-friendly neighborhood with local parks, pedestrian zones, and authentic tavernas with pet-friendly patios."
    ],
    "tips": [
      "Book apartments with tile or hardwood floors for easier cleanup, and confirm balcony railings are secure.",
      "Research nearby dog parks and veterinarians before arrival; many Athens veterinarians speak English and offer emergency services."
    ],
    "cta": "Discover your perfect dog-friendly Athens apartment today and create unforgettable Mediterranean memories with your four-legged travel companion!"
  }
  
  return <div>{JSON.stringify(content)}</div>
}
