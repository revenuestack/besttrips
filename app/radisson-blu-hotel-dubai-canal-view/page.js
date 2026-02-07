import TravelPage from '@/components/TravelPage'

export const metadata = {
  title: "Radisson Blu Hotel, Dubai Canal View: Modern Luxury Meets Waterfront Elegance",
  description: "Experience design-led living at Radisson Blu Hotel, Dubai Canal View. Contemporary luxury accommodation with stunning waterfront views from £213. Book your Dubai escape today.",
}

export default function Page() {
  const data = {
    hook: "Perched along the shimmering Dubai Canal, the Radisson Blu Hotel offers a masterclass in contemporary Arabian hospitality. This design-forward retreat blends sleek Scandinavian aesthetics with Middle Eastern warmth, creating an urban sanctuary where floor-to-ceiling windows frame hypnotic water views and the glittering cityscape beyond.",
    why_stay: [
      "Prime canal-side location with spectacular views and easy access to Business Bay, Downtown Dubai, and major attractions via water taxi or metro",
      "Sophisticated design philosophy throughout, featuring minimalist Nordic interiors, ambient lighting, and thoughtful touches that elevate every moment",
      "Exceptional dining experiences including rooftop venues, international restaurants, and the signature Radisson Blu service standards that consistently exceed expectations"
    ],
    watch_out: [
      "Premium pricing during peak season and major events can push rates significantly higher than the base £213 rate",
      "The surrounding Business Bay area can feel corporate and less atmospheric than Old Dubai or beachfront districts"
    ],
    amenities: "State-of-the-art fitness center, stunning rooftop infinity pool, multiple dining outlets, spa facilities, complimentary WiFi, 24-hour room service, and modern meeting spaces for business travelers.",
    cta: "Book your canal-view escape at Radisson Blu Hotel, Dubai Canal View and discover where Nordic design meets Dubai dynamism from just £213 per night."
  }

  return <TravelPage {...data} />
}
