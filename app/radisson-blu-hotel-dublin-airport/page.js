import TravelPage from '@/components/TravelPage'

export const metadata = {
  title: "Radisson Blu Hotel, Dublin Airport - Your Gateway to Ireland",
  description: "Stay at Radisson Blu Hotel near Dublin Airport from £148. Modern comfort, convenient location, and premium amenities make it perfect for travelers.",
}

export default function Page() {
  const data = {
    hook: "Whether you're catching an early flight or beginning your Irish adventure, Radisson Blu Hotel at Dublin Airport offers the perfect blend of convenience and contemporary comfort just minutes from the terminal.",
    why_stay: [
      "Ultimate convenience with direct access to Dublin Airport - perfect for early departures, late arrivals, or quick layovers without the stress of city traffic",
      "Modern rooms designed for rest and productivity, featuring plush bedding, rainfall showers, and workspace areas that help you recharge between flights",
      "Excellent dining options and full-service amenities including fitness center and business facilities, ensuring you have everything needed for both leisure and business travel"
    ],
    watch_out: [
      "Airport proximity means occasional aircraft noise, though soundproofing is excellent - light sleepers may want to pack earpluds",
      "Limited local attractions within walking distance as it's an airport location, so you'll need transport for exploring Dublin's city center (about 20 minutes away)"
    ],
    amenities: "Enjoy on-site restaurants and bars, 24-hour fitness center, complimentary WiFi, modern business facilities, airport shuttle service, and spacious rooms with premium bedding and work desks.",
    cta: "Book your stay at Radisson Blu Dublin Airport from £148 and experience stress-free travel with Radisson Hotels' renowned service and comfort."
  }

  return <TravelPage {...data} />
}
