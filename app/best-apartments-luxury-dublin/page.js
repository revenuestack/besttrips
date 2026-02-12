import GuideLayout from '@/components/GuideLayout'

export const metadata = {
  title: "Best Luxury Apartments in Dublin: Upscale Serviced Accommodations for Discerning Travelers",
  description: "Discover Dublin's finest luxury apartments offering five-star amenities, Georgian elegance, and prime locations in the city's most prestigious neighborhoods."
}

export default function Page() {
  const guide = {
    destination: "Dublin",
    country: "Ireland",
    type: "Apartments",
    audience: "Luxury Travelers",
    hook: "Dublin's luxury apartment scene combines historic Georgian grandeur with contemporary Irish sophistication, offering discerning travelers spacious havens in the heart of Ireland's vibrant capital.",
    why_stay: [
      "Spacious layouts with full kitchens, separate living areas, and premium furnishings provide the comfort of home with five-star hotel amenities including concierge services and daily housekeeping",
      "Prime locations in prestigious neighborhoods like Ballsbridge, Georgian Merrion Square, and the trendy Docklands put you steps from Michelin-starred restaurants, designer boutiques, and cultural landmarks",
      "Privacy and exclusivity with secure buildings, private entrances, and personalized services that cater to luxury travelers seeking discretion and bespoke experiences"
    ],
    considerations: [
      "Luxury apartments command premium rates, especially during peak season (June-August) and major events like the Dublin Horse Show, with minimum stays often required",
      "While most offer parking, navigating Dublin's narrow Georgian streets can be challenging; consider using the excellent taxi services or hiring a private driver"
    ],
    neighborhood_tips: "Ballsbridge offers embassy-district elegance near Herbert Park, while Merrion Square places you amid Georgian architecture and literary history. The Docklands provide ultra-modern waterfront living with contemporary dining scenes.",
    booking_advice: "Book directly with premium providers like The Doyle Collection or Staycity Aparthotels for best rates and upgrades. Reserve 3-6 months ahead for summer stays, and request upper floors for stunning views over Dublin Bay or the Wicklow Mountains."
  }

  return <GuideLayout guide={guide} />
}
