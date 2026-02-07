export const metadata = {
  title: 'Best Apartments for Families in Florence',
  description: 'Florence offers family-friendly apartments that combine authentic Italian living with the space and amenities busy families need.'
}

export default function Page() {
  const content = {
    "intro": "Florence offers family-friendly apartments that combine authentic Italian living with the space and amenities busy families need. Renting an apartment gives you kitchen facilities, multiple bedrooms, and the freedom to explore this Renaissance treasure at your own pace.",
    "why_stay": [
      "Spacious apartments provide room for kids to play while parents relax after museum visits.",
      "Kitchens let families prepare meals, accommodate dietary needs, and save money on dining out.",
      "Local neighborhood markets and bakeries offer authentic cultural experiences beyond typical tourist attractions."
    ],
    "neighborhoods": [
      "Oltrarno - Artisan quarter south of the Arno River with authentic atmosphere, local workshops, and family-friendly piazzas.",
      "Santa Croce - Central location near major sites, spacious squares for children, excellent gelaterias and markets.",
      "San Frediano - Residential charm with parks, playgrounds, affordable trattorias, and easy access to Boboli Gardens."
    ],
    "tips": [
      "Book apartments with washing machines and air conditioning, especially for summer visits when laundry piles up quickly.",
      "Choose ground-floor units or buildings with elevators, as many historic buildings have steep stairs challenging with strollers."
    ],
    "cta": "Discover your perfect family apartment in Florence today and create unforgettable memories in the heart of Tuscany."
  }
  
  return <div>{JSON.stringify(content)}</div>
}
