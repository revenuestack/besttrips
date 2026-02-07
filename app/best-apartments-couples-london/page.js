export const metadata = {
  title: 'Best Apartments for Couples in London',
  description: 'London offers couples an enchanting blend of historic charm and modern luxury through its diverse apartment accommodations.'
}

export default function Page() {
  const content = {
  "intro": "London offers couples an enchanting blend of historic charm and modern luxury through its diverse apartment accommodations. From riverside penthouses with Thames views to cozy Georgian flats in leafy neighborhoods, the city provides intimate spaces perfect for romantic getaways. Choosing an apartment gives you the privacy and flexibility to experience London like locals.",
  "why_stay": [
    "Apartments offer privacy and space for couples to relax together after exploring London's vibrant streets and attractions.",
    "Self-catering kitchens let you enjoy intimate breakfasts or romantic dinners with local ingredients from Borough Market.",
    "Many apartments feature romantic amenities like fireplaces, balconies, and stunning city views perfect for special moments together."
  ],
  "neighborhoods": [
    "Covent Garden - Central location near theaters, romantic restaurants, and charming cobblestone streets perfect for evening strolls.",
    "Notting Hill - Colorful houses, boutique shops, and intimate cafes create a village atmosphere ideal for couples.",
    "South Bank - Riverside apartments with Thames views, walking distance to cultural attractions and romantic waterfront dining."
  ],
  "tips": [
    "Book apartments with flexible check-in for late arrivals, and look for places near Tube stations for easy exploration.",
    "Consider booking during off-peak seasons (January-March, November) for better rates and more availability in romantic neighborhoods."
  ],
  "cta": "Discover your perfect London love nest today and create unforgettable memories in one of the world's most romantic cities."
}

  return <div>{JSON.stringify(content)}</div>
}
