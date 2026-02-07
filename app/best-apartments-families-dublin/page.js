export const metadata = {
  title: 'Best Apartments for Families in Dublin',
  description: 'Dublin offers exceptional family-friendly apartments that blend Irish hospitality with modern comfort.'
}

export default function Page() {
  const content = {
    "intro": "Dublin offers exceptional family-friendly apartments that blend Irish hospitality with modern comfort. Self-catering accommodations provide the space and flexibility families need to explore this vibrant capital at their own pace. From Georgian townhouses to contemporary riverside flats, Dublin's apartments cater perfectly to traveling families.",
    "why_stay": [
      "Spacious living areas and full kitchens let families maintain routines, save money, and enjoy home-cooked meals together.",
      "Prime locations near parks, museums, and attractions mean less transit time and more quality family exploration time.",
      "Cost-effective for groups, offering better value than multiple hotel rooms while providing privacy and communal spaces."
    ],
    "neighborhoods": [
      "Ballsbridge: Leafy residential area near Aviva Stadium with parks, excellent transport links, and family-friendly restaurants within walking distance.",
      "Smithfield: Historic district with modern apartments, close to museums, Dublin Zoo, and the Phoenix Park for outdoor adventures.",
      "Grand Canal Dock: Waterfront neighborhood offering contemporary apartments, scenic walks, playgrounds, and easy access to city center attractions."
    ],
    "tips": [
      "Book apartments with washing machines and nearby grocery stores like Tesco or Dunnes for convenient family living.",
      "Choose ground-floor or elevator-equipped buildings to simplify navigating with strollers, luggage, and tired little explorers."
    ],
    "cta": "Discover your perfect Dublin family apartment today and create unforgettable Irish memories in a home away from home."
  }
  
  return <div>{JSON.stringify(content)}</div>
}
