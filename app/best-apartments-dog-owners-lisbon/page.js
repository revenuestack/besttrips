export const metadata = {
  title: 'Best Apartments for Dog Owners in Lisbon',
  description: 'Lisbon is one of Europe\'s most dog-friendly cities, offering pet-welcoming apartments with easy access to parks, beaches, and outdoor cafés.'
}

export default function Page() {
  const content = {
    "intro": "Lisbon is one of Europe's most dog-friendly cities, offering pet-welcoming apartments with easy access to parks, beaches, and outdoor cafés. The mild climate and relaxed attitude make it perfect for travelers with four-legged companions. From riverside walks to historic neighborhoods, you and your pup will feel right at home.",
    "why_stay": [
      "Most Lisbon apartments welcome dogs, with many featuring nearby green spaces and pet-friendly amenities throughout the city.",
      "Enjoy year-round outdoor activities with mild winters, allowing daily beach trips and park adventures with your canine companion.",
      "Experience Portugal's pet-loving culture where dogs join owners at cafés, restaurants, and even some historic tram rides."
    ],
    "neighborhoods": [
      "Belém - Spacious waterfront area with expansive parks, the Tagus River promenade, and plenty of open space for dog walks.",
      "Príncipe Real - Trendy central district featuring a beautiful garden park, dog-friendly terraces, and easy access to veterinary services.",
      "Parque das Nações - Modern riverside neighborhood with wide pedestrian paths, green areas, and contemporary pet-friendly apartment complexes."
    ],
    "tips": [
      "Book apartments near Monsanto Forest Park or Jardim da Estrela for the best off-leash dog areas and morning exercise routines.",
      "Confirm building pet policies and look for ground-floor units, as many historic Lisbon buildings lack elevators for easier access."
    ],
    "cta": "Start your Lisbon adventure today—find the perfect dog-friendly apartment and discover why this sunny city is a tail-wagging paradise!"
  }
  
  return <div>{JSON.stringify(content)}</div>
}
