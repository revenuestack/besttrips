export const metadata = {
  title: 'Best Apartments for Luxury in Copenhagen',
  description: 'Copenhagen\'s luxury apartment scene combines Scandinavian design elegance with world-class amenities and waterfront views.'
}

export default function Page() {
  const content = {
    "intro": "Copenhagen's luxury apartment scene combines Scandinavian design elegance with world-class amenities and waterfront views. From converted warehouses in Nordhavn to historic townhouses in Frederiksstaden, these accommodations offer sophisticated travelers the perfect blend of style, comfort, and authentic Danish living. Experience the Danish concept of 'hygge' in your own upscale urban sanctuary.",
    "why_stay": [
      "Immerse yourself in iconic Danish design with apartments featuring mid-century furniture, minimalist aesthetics, and premium Nordic craftsmanship throughout.",
      "Enjoy full kitchens, private terraces, and spacious layouts that hotels simply cannot match for extended luxury stays.",
      "Experience authentic neighborhood living with access to local markets, Michelin-starred restaurants, and Copenhagen's renowned cycling culture."
    ],
    "neighborhoods": [
      "Frederiksstaden – Historic royal district with 18th-century architecture, steps from Amalienborg Palace and designer boutiques on Bredgade.",
      "Nordhavn – Modern waterfront development offering contemporary apartments with harbor views, rooftop terraces, and cutting-edge sustainable architecture.",
      "Indre By (Old Town) – Central location near Strøget shopping street, Nyhavn's colorful harbor, and walking distance to major attractions."
    ],
    "tips": [
      "Book apartments with private parking or bike storage – Copenhagen's bicycle infrastructure makes two wheels the most stylish way to explore.",
      "Consider properties with canal or harbor views for iconic Copenhagen scenery, especially stunning during the long summer evenings."
    ],
    "cta": "Discover your perfect Copenhagen luxury apartment and live like a sophisticated local in Scandinavia's design capital."
  }
  
  return <div>{JSON.stringify(content)}</div>
}
