export const metadata = {
  title: 'Best Apartments for Luxury in Dublin',
  description: 'Dublin\'s luxury apartment scene offers discerning travelers refined Georgian elegance meets contemporary Irish sophistication.'
}

export default function Page() {
  const content = {
    "intro": "Dublin's luxury apartment scene offers discerning travelers refined Georgian elegance meets contemporary Irish sophistication. From penthouse suites overlooking the Liffey to restored Victorian residences in leafy neighborhoods, the city delivers world-class accommodations with authentic character.",
    "why_stay": [
      "Experience spacious, design-forward interiors with premium amenities, concierge services, and breathtaking city or river views throughout your stay.",
      "Enjoy unparalleled flexibility with full kitchens, private terraces, and residential comforts that five-star hotels simply cannot replicate for extended visits.",
      "Immerse yourself in Dublin's finest neighborhoods, living among locals while accessing Michelin-starred dining, cultural landmarks, and exclusive shopping districts."
    ],
    "neighborhoods": [
      "Ballsbridge: Embassy quarter featuring elegant Victorian and Georgian apartments near leafy parks, upscale dining, and the RDS showgrounds.",
      "Grand Canal Dock: Ultra-modern waterfront development with contemporary penthouses, tech hub energy, and sleek restaurants along picturesque canal walks.",
      "St. Stephen's Green: Historic city center location offering prestigious Georgian townhouse conversions, steps from premier shopping, museums, and Trinity College."
    ],
    "tips": [
      "Book apartments with dedicated parking or valet services, as Dublin's premium neighborhoods have limited street parking and congestion charges apply.",
      "Request properties with keyless entry systems and 24-hour concierge support to ensure seamless arrivals regardless of international flight delays."
    ],
    "cta": "Discover Dublin's finest luxury apartments and secure your sophisticated Irish escape today."
  }
  
  return <div>{JSON.stringify(content)}</div>
}
