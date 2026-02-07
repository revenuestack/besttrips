import TravelPage from '@/components/TravelPage'

export const metadata = {
  title: "Park Inn by Radisson Budapest - Modern Business District Hotel from £60",
  description: "Book Park Inn by Radisson Budapest from £60/night. Contemporary accommodation in Budapest's vibrant business district with excellent transport links and modern amenities.",
}

export default function Page() {
  const data = {
    hook: "Discover contemporary comfort in the heart of Budapest's dynamic business quarter, where modern convenience meets Hungarian hospitality at unbeatable prices.",
    why_stay: [
      "Prime location in Budapest's bustling business district with superb metro and tram connections, putting the historic city center, thermal baths, and Danube riverfront within easy reach",
      "Exceptional value from £60 per night with Radisson's signature quality standards, including comfortable rooms, reliable Wi-Fi, and professional service perfect for both business and leisure travelers",
      "Modern facilities including fitness center, on-site restaurant, and 24-hour reception, providing everything needed for a productive business trip or convenient city exploration base"
    ],
    watch_out: [
      "The business district location means fewer traditional restaurants and nightlife immediately nearby compared to the historic center, though public transport makes exploration effortless",
      "Being in a commercial area, the neighborhood can feel quieter on evenings and weekends when offices close"
    ],
    amenities: "Air-conditioned rooms with flat-screen TV, work desk, free Wi-Fi, fitness center, on-site restaurant and bar, 24-hour reception, meeting facilities, and complimentary tea/coffee.",
    cta: "Book your Budapest stay at Park Inn by Radisson from just £60 per night and experience quality accommodation with unbeatable city access."
  }

  return <TravelPage {...data} />
}
