import SimpleGuide from '@/components/SimpleGuide'

export const metadata = {
  title: 'Best Apartments for Adventure Seekers in London',
  description: 'London\'s apartments offer adventure seekers the perfect base to explore this dynamic city\'s endless thrills.'
}

export default function Page() {
  const content = {
    intro: "London's apartments offer adventure seekers the perfect base to explore this dynamic city's endless thrills. From rock climbing walls to Thames kayaking, urban exploration to food market adventures, staying in a self-catered flat gives you freedom and flexibility. Wake up in vibrant neighborhoods where every street corner promises discovery.",
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
