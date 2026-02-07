import TravelPage from '@/components/TravelPage'

export const metadata = {
  title: "Park Inn by Radisson Istanbul Airport, Odayeri: Your Convenient Transit Hub",
  description: "Stay at Park Inn by Radisson Istanbul Airport, Odayeri from £125.44. Perfect for early flights, layovers, and business trips with modern comfort near Istanbul Airport.",
}

export default function Page() {
  const data = {
    hook: "When your Istanbul adventure starts with an early morning flight or ends with a late arrival, Park Inn by Radisson Istanbul Airport transforms airport proximity from necessity into convenience.",
    why_stay: [
      "Minutes from Istanbul Airport terminals with complimentary shuttle service, eliminating stress from early departures or late arrivals while saving on taxi costs",
      "Modern Radisson standard amenities including comfortable bedding, reliable Wi-Fi, and 24-hour dining options that cater to any flight schedule",
      "Competitive pricing from £125.44 offers exceptional value for travelers prioritizing rest and convenience over city center location during transit stays"
    ],
    watch_out: [
      "Located in Odayeri business district, approximately 40km from Istanbul's historic Sultanahmet attractions—ideal for airport layovers but requires planning for city sightseeing",
      "As an airport hotel, expect functional business-traveler focus rather than resort-style leisure facilities or Turkish cultural atmosphere"
    ],
    amenities: "The hotel features soundproofed rooms essential for restful sleep near an active airport, fitness center, business facilities, on-site restaurant serving international and Turkish cuisine, bar, meeting rooms, and free airport shuttle service running on schedule.",
    cta: "Book your stress-free Istanbul Airport stay at Park Inn by Radisson Odayeri from £125.44 through Radisson Hotels and wake up minutes from your gate."
  }

  return <TravelPage {...data} />
}
