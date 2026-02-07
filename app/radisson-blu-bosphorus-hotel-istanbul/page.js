import TravelPage from '@/components/TravelPage'

export const metadata = {
  title: "Radisson Blu Bosphorus Hotel, Istanbul: Waterfront Luxury in Turkey's Historic Heart",
  description: "Experience breathtaking Bosphorus views at Radisson Blu Istanbul. Perfectly positioned between Europe and Asia, this waterfront hotel offers modern comfort from £181.44 per night.",
}

export default function Page() {
  const data = {
    hook: "Wake up to shimmering strait views where two continents meet at the Radisson Blu Bosphorus Hotel, your gateway to Istanbul's mesmerizing blend of ancient history and modern vitality.",
    why_stay: [
      "Unbeatable waterfront location with panoramic Bosphorus views, putting you steps from ferry terminals and Istanbul's most iconic waterfront promenades",
      "Contemporary rooms with floor-to-ceiling windows, premium bedding, and balconies overlooking the strait—perfect for sunrise coffee or evening cocktails",
      "Strategic position between Old City attractions and modern Beşiktaş district, with easy access to Dolmabahçe Palace, Ortaköy, and vibrant nightlife"
    ],
    watch_out: [
      "Pricing fluctuates significantly during peak season (April-October) and major holidays—book well in advance for better rates",
      "The waterfront location means potential ferry horn noise early morning, though most guests find it adds authentic Istanbul charm"
    ],
    amenities: "Full-service spa, rooftop restaurant with 180-degree Bosphorus panoramas, fitness center, business facilities, complimentary Wi-Fi, 24-hour room service, concierge assistance, and valet parking. The hotel's signature restaurant serves Turkish and international cuisine with spectacular sunset views.",
    cta: "Book your Bosphorus escape at Radisson Hotels from £181.44 and discover why this waterfront gem captures the soul of Istanbul."
  }

  return <TravelPage {...data} />
}
