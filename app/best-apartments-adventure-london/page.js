import SimpleGuide from '@/components/SimpleGuide'

export const metadata = {
  title: 'Best Apartments for Adventure Seekers in London',
  description: 'London\'s apartments offer adventure seekers the perfect base to explore this dynamic city\'s endless thrills.'
}

export default function Page() {
  const content = {
    intro: "London's apartments offer adventure seekers the perfect base to explore this dynamic city's endless thrills. From rock climbing walls to Thames kayaking, urban exploration to food market adventures, staying in a self-catered flat gives you freedom and flexibility. Wake up in vibrant neighborhoods where every street corner promises discovery.",
    
    recommendations: [
      {
        name: "The Hoxton Shoreditch",
        location: "Shoreditch, East London",
        priceRange: "£150-220/night",
        rating: 8.9,
        reviewCount: 3200,
        features: [
          "Industrial-chic design in the heart of street art district",
          "Free WiFi, weekday breakfast bag, and co-working spaces",
          "Walking distance to Brick Lane markets, climbing gyms, and Olympic Park"
        ],
        whyGreat: "Perfect for adventure seekers wanting to be in London's most creative neighborhood, with rooftop bars, vintage shops, and street food markets all within 10 minutes walk. The vibe is young, energetic, and unpretentious.",
        bookingUrl: "https://www.booking.com/hotel/gb/the-hoxton-shoreditch.html"
      },
      {
        name: "CitizenM Tower of London",
        location: "Tower Hill, Central London",
        priceRange: "£100-160/night",
        rating: 8.7,
        reviewCount: 5100,
        features: [
          "Modern pod-style rooms with floor-to-ceiling windows",
          "24/7 food, rooftop bar with Thames views",
          "Steps from Tower Bridge and Borough Market"
        ],
        whyGreat: "Ideal base for urban explorers - wake up to Tower Bridge views, breakfast at Borough Market, kayak the Thames by afternoon. The self-service tech suits independent travelers who want efficiency without sacrificing style.",
        bookingUrl: "https://www.booking.com/hotel/gb/citizenm-london-tower-of-london.html"
      },
      {
        name: "Qbic London City",
        location: "Whitechapel, East London",
        priceRange: "£80-130/night",
        rating: 8.4,
        reviewCount: 2800,
        features: [
          "Sustainable design with compact, clever rooms",
          "Excellent value for central location near Spitalfields",
          "Bike storage and easy access to cycling routes"
        ],
        whyGreat: "Budget-friendly without feeling cheap, perfect for adventurers who'd rather spend money on experiences than accommodation. The Whitechapel location puts you near trendy Spitalfields Market while keeping costs down.",
        bookingUrl: "https://www.booking.com/hotel/gb/qbic-london-city.html"
      },
      {
        name: "Ace Hotel Shoreditch",
        location: "Shoreditch, East London",
        priceRange: "£180-280/night",
        rating: 8.8,
        reviewCount: 1900,
        features: [
          "Boutique hotel with vintage vinyl players and curated playlists",
          "Miranda Cafe serves all-day breakfast and natural wines",
          "Art gallery, live music venue, and creative community events"
        ],
        whyGreat: "For adventure seekers who appreciate design and culture alongside physical activities. The hotel doubles as an East London cultural hub, hosting DJs, artists, and creatives. Wake up to coffee from one of London's best cafes.",
        bookingUrl: "https://www.booking.com/hotel/gb/ace-hotel-shoreditch.html"
      },
      {
        name: "Generator London",
        location: "King's Cross, North London",
        priceRange: "£35-85/night (private rooms)",
        rating: 8.2,
        reviewCount: 6700,
        features: [
          "Stylish hostel with private room options",
          "Bar, cinema room, and social events for meeting fellow travelers",
          "Near King's Cross for day trips to Cambridge, Oxford, Brighton"
        ],
        whyGreat: "Best value for solo adventurers or those wanting to meet other travelers. The King's Cross location is perfect for day trips while the social atmosphere means you'll never adventure alone. Great for ages 18-35.",
        bookingUrl: "https://www.booking.com/hotel/gb/generator-hostel-london.html"
      }
    ],
    
    why_stay: [
      "Apartments provide kitchens for fueling early morning adventures and late-night returns from London's legendary nightlife scene.",
      "Self-catering accommodation saves money for experiences like indoor skydiving, zip-lining at O2 Arena, or spontaneous West End shows.",
      "Washing machines mean packing light for multi-day adventures hiking the Thames Path or cycling through Richmond Park's wilderness."
    ],
    neighborhoods: [
      "Shoreditch: Street art paradise with climbing gyms, rooftop bars, and direct access to Olympic Park's adventure activities.",
      "Camden: Edgy markets, canal-side walks, and proximity to Regent's Park for morning runs and outdoor yoga sessions.",
      "Canary Wharf: Modern apartments near cable car rides, watersports centers, and excellent transport links to adventure destinations."
    ],
    tips: [
      "Book apartments near Tube stations for quick access to day trips like Brighton beaches or Chiltern Hills hiking trails.",
      "Choose neighborhoods with 24-hour grocery stores and bike rental schemes for maximum spontaneity and adventure flexibility."
    ],
    cta: "Book your London adventure apartment today and transform the city into your ultimate urban playground."
  }

  return <SimpleGuide 
    content={content} 
    title="Best Apartments for Adventure Seekers in London"
    destination="London"
    slug="best-apartments-adventure-london"
  />
}
