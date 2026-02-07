export const metadata = {
  title: 'Best Apartments for Seniors in Athens: Comfort Meets Ancient Charm',
  description: 'Discover senior-friendly apartments in Athens offering accessibility, proximity to healthcare, and easy access to Greece\'s iconic historic sites and vibrant neighborhoods.'
}

export default function Page() {
  const content = {
    "hook": "Athens combines millennia of history with modern senior-friendly accommodations, offering apartments designed for comfort, accessibility, and Mediterranean living at its finest.",
    "why_visit": [
      "Senior-optimized apartments in neighborhoods like Plaka, Kolonaki, and Pangrati feature elevator access, ground-floor options, and proximity to pharmacies and medical facilities, ensuring comfort and peace of mind.",
      "Athens' compact city center means major attractions like the Acropolis, Ancient Agora, and National Archaeological Museum are easily reachable by short taxi rides or accessible metro stations.",
      "The Mediterranean climate provides mild winters and warm summers perfect for seniors, while Greek hospitality ensures welcoming communities, excellent tavernas within walking distance, and English-speaking support services."
    ],
    "insider_tips": [
      "Book apartments near Syntagma Square or Thissio for flat terrain, abundant seating areas, and easy metro access with elevators—avoid hilly neighborhoods like Anafiotika unless you enjoy steep climbs.",
      "Many apartment buildings lack elevators in older areas; specifically request ground-floor units or modern buildings with lift access when booking, and verify proximity to 24-hour pharmacies."
    ],
    "logistics": "Athens International Airport connects via metro (Line 3, 40 minutes) or pre-booked accessible taxis. Most senior-friendly apartments cluster in central districts with supermarkets, bakeries, and cafes within 5-minute walks.",
    "cta": "Find your perfect Athens apartment today and experience Greece's timeless beauty with modern senior comfort."
  }
  
  return <div>{JSON.stringify(content)}</div>
}
