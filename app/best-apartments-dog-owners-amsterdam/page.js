export const metadata = {
  title: 'Best Apartments for Dog Owners in Amsterdam',
  description: 'Amsterdam is a dog lover\'s paradise, with sprawling parks, canal-side walks, and a welcoming attitude toward four-legged friends.'
}

export default function Page() {
  const content = {
    "intro": "Amsterdam is a dog lover's paradise, with sprawling parks, canal-side walks, and a welcoming attitude toward four-legged friends. Finding the perfect apartment here means access to green spaces, pet-friendly cafes, and a community that celebrates dogs. Whether you're staying short-term or settling in, Amsterdam's neighborhoods offer ideal bases for you and your pup.",
    "why_stay": [
      "Vondelpark and Amsterdamse Bos provide endless off-leash areas where your dog can run freely and socialize.",
      "Most apartments feature ground-floor access or elevators, making daily walks and potty breaks convenient for any breed.",
      "The city's compact layout means veterinary clinics, pet stores, and dog-friendly restaurants are always nearby."
    ],
    "neighborhoods": [
      "De Pijp: Vibrant neighborhood with Sarphatipark nearby, dog-friendly terraces, and easy tram access to larger parks.",
      "Oud-West: Close to Vondelpark and Westerpark, offering leafy streets and a relaxed atmosphere perfect for daily strolls.",
      "Amsterdam-Noord: Spacious, modern apartments with waterfront paths and the expansive Noorderpark for off-leash adventures."
    ],
    "tips": [
      "Book apartments with private entrances or ground floors to simplify multiple daily walks, especially during rainy Dutch weather.",
      "Check local leash laws by neighborhood and always carry waste bags—Amsterdam takes pet etiquette seriously and fines apply."
    ],
    "cta": "Discover dog-friendly apartments in Amsterdam today and start planning unforgettable adventures with your furry companion!"
  }
  
  return <div>{JSON.stringify(content)}</div>
}
