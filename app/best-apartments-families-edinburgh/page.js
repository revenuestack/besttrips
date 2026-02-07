export const metadata = {
  title: 'Best Apartments for Families in Edinburgh',
  description: 'Edinburgh offers exceptional apartment accommodations perfect for families exploring Scotland\'s captivating capital.'
}

export default function Page() {
  const content = {
    "intro": "Edinburgh offers exceptional apartment accommodations perfect for families exploring Scotland's captivating capital. From spacious flats near historic castles to modern residences with stunning views, family-friendly apartments provide the comfort, space, and amenities needed for memorable stays.",
    "why_stay": [
      "Self-catering kitchens let families prepare meals, saving money while accommodating picky eaters and dietary needs effortlessly.",
      "Apartments offer separate bedrooms and living spaces, giving parents evening relaxation while children sleep peacefully nearby.",
      "Washer-dryers in most units mean lighter packing and fresh clothes daily, essential for active family adventures."
    ],
    "neighborhoods": [
      "New Town - Georgian elegance with spacious apartments near Princes Street Gardens, excellent for stroller-friendly walks and shopping.",
      "Stockbridge - Charming village atmosphere with weekly markets, riverside paths, and family-owned cafes just minutes from attractions.",
      "Leith - Waterfront revitalization offers modern apartments, Ocean Terminal shopping, and the Royal Yacht Britannia for educational fun."
    ],
    "tips": [
      "Book ground-floor or lift-equipped apartments to avoid carrying luggage and strollers up Edinburgh's famous tenement stairs.",
      "Choose locations near tram or bus routes for easy access to Edinburgh Castle, Arthur's Seat, and attractions without driving hassles."
    ],
    "cta": "Discover your perfect Edinburgh family apartment today and create unforgettable Scottish memories with room to spread out!"
  }
  
  return <div>{JSON.stringify(content)}</div>
}
