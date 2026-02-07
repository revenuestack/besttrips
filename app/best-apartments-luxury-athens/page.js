export const metadata = {
  title: 'Best Apartments for Luxury in Athens',
  description: 'Athens seamlessly blends ancient splendor with contemporary luxury, offering discerning travelers exquisite apartment accommodations in one of Europe\'s most captivating capitals.'
}

export default function Page() {
  const content = {
    "intro": "Athens seamlessly blends ancient splendor with contemporary luxury, offering discerning travelers exquisite apartment accommodations in one of Europe's most captivating capitals. From neoclassical penthouses overlooking the Acropolis to designer lofts in cosmopolitan neighborhoods, the city's luxury apartment scene provides privacy, space, and authentic Athenian living. Experience world-class amenities, personalized service, and unparalleled access to iconic landmarks and Michelin-starred dining.",
    "why_stay": [
      "Spacious, elegantly designed interiors with premium furnishings, private terraces, and breathtaking views of the Acropolis or Lycabettus Hill.",
      "Exclusive locations in historic districts, offering intimate cultural immersion while maintaining proximity to luxury shopping and fine dining.",
      "Personalized concierge services, private chefs, and curated experiences that transform your stay into an unforgettable Mediterranean journey."
    ],
    "neighborhoods": [
      "Kolonaki: Athens' most prestigious address, featuring upscale boutiques, art galleries, and refined dining beneath Mount Lycabettus.",
      "Plaka: The historic heart nestled below the Acropolis, offering charming neoclassical architecture and pedestrian streets lined with cafés.",
      "Psyrri: A revitalized artistic quarter blending bohemian character with modern luxury, perfect for culture enthusiasts seeking authentic nightlife."
    ],
    "tips": [
      "Book apartments with rooftop access for private Acropolis views during sunset—an unmatched experience worth the premium investment.",
      "Visit during shoulder seasons (April-May or September-October) for ideal weather, fewer crowds, and more availability at premier properties."
    ],
    "cta": "Elevate your Athens experience—reserve your luxury apartment today and discover Greece's capital in unparalleled style and comfort."
  }
  
  return <div>{JSON.stringify(content)}</div>
}
