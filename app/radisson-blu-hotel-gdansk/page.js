import TravelPage from '@/components/TravelPage'

export const metadata = {
  title: "Radisson Blu Hotel, Gdansk - Contemporary Luxury in Poland's Maritime Jewel",
  description: "Experience contemporary elegance at Radisson Blu Hotel, Gdansk. Prime location for exploring the historic Old Town, modern amenities, and exceptional comfort from £318.22.",
}

export default function Page() {
  const data = {
    hook: "Nestled in the heart of Gdansk, the Radisson Blu Hotel offers the perfect blend of modern sophistication and Polish hospitality, placing you within easy reach of this enchanting Baltic city's historic treasures and vibrant waterfront.",
    why_stay: [
      "Prime location for exploring Gdansk's stunning Old Town, Gothic architecture, and the famous Długi Targ (Long Market) – most attractions are within walking distance or a short tram ride",
      "Contemporary rooms featuring sleek Scandinavian design, premium bedding, and modern amenities that provide a serene retreat after days spent sightseeing",
      "Excellent dining options including on-site restaurants serving both international cuisine and authentic Polish specialties, plus a stylish bar perfect for evening relaxation"
    ],
    watch_out: [
      "The premium price point of £318.22+ per night reflects the upscale positioning – budget-conscious travelers may find more affordable options in the city center",
      "Some rooms may overlook busy streets, so light sleepers should request quieter accommodations facing the interior courtyard when booking"
    ],
    amenities: "Free Wi-Fi throughout, fitness center, spa facilities, 24-hour reception, business center, conference rooms, restaurant, bar, room service, parking (charges apply), and multilingual staff ready to assist with tour bookings and local recommendations.",
    cta: "Book your stay at Radisson Blu Hotel, Gdansk today and immerse yourself in contemporary elegance while discovering Poland's historic maritime capital."
  }

  return <TravelPage {...data} />
}
