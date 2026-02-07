export const metadata = {
  title: 'Best Apartments for Adventure Seekers in Porto',
  description: 'Porto offers adventure seekers the perfect blend of urban exploration and outdoor thrills.'
}

export default function Page() {
  const content = {
  "intro": "Porto offers adventure seekers the perfect blend of urban exploration and outdoor thrills. From surfing Atlantic waves to kayaking the Douro River, this vibrant Portuguese city serves as your basecamp for unforgettable experiences. Choosing an apartment gives you the freedom and flexibility to fuel your adventures on your own schedule.",
  "why_stay": [
    "Easy access to hiking trails, river activities, and coastal surf spots within 30 minutes of downtown Porto.",
    "Apartment kitchens let you prep early breakfasts and pack lunches before heading out on day-long adventures.",
    "Local neighborhoods offer authentic Portuguese culture, craft beer scenes, and post-adventure relaxation spots adventurers will love."
  ],
  "neighborhoods": [
    "Ribeira: Riverside district with kayak rentals, climbing walls nearby, and cobblestone streets perfect for urban exploration.",
    "Foz do Douro: Coastal area offering beach access, surfing opportunities, and scenic Atlantic cliffside trails.",
    "Cedofeita: Trendy neighborhood with bike rental shops, proximity to Parque da Cidade, and vibrant nightlife for post-adventure unwinding."
  ],
  "tips": [
    "Book apartments near metro stations for quick access to Matosinhos beaches, Peneda-Gerês National Park day trips, and Douro Valley wine region hikes.",
    "Look for rentals with secure bike storage and early check-in options to maximize your adventure time in Porto."
  ],
  "cta": "Start your Porto adventure today—book an apartment that puts you steps away from rivers, trails, and Atlantic waves!"
}

  return <div>{JSON.stringify(content)}</div>
}
