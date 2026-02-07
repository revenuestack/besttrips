export const metadata = {
  title: 'Best Apartments for Luxury in Berlin',
  description: 'Berlin\'s luxury apartment scene combines cutting-edge design with historic charm, offering discerning travelers spacious accommodations in one of Europe\'s most dynamic capitals.'
}

export default function Page() {
  const content = {
    "intro": "Berlin's luxury apartment scene combines cutting-edge design with historic charm, offering discerning travelers spacious accommodations in one of Europe's most dynamic capitals. From converted industrial lofts to sleek penthouses overlooking the Spree, these premium stays provide the perfect blend of privacy, comfort, and authentic local living.",
    "why_stay": [
      "Experience Berlin like a local with full kitchens, living spaces, and the freedom to create your own schedule.",
      "Luxury apartments offer significantly more space than hotels, ideal for families, extended stays, or entertaining guests stylishly.",
      "Enjoy premium amenities including private terraces, designer furnishings, concierge services, and often stunning city or river views."
    ],
    "neighborhoods": [
      "Mitte: The historic center featuring Museum Island, Unter den Linden, and upscale apartments in beautifully restored 19th-century buildings.",
      "Charlottenburg: Berlin's most elegant district with tree-lined boulevards, designer boutiques, and sophisticated apartments near Kurfürstendamm.",
      "Prenzlauer Berg: Trendy neighborhood offering charming cobblestone streets, organic markets, and converted lofts with distinctive character and modern luxury."
    ],
    "tips": [
      "Book apartments with parking if driving, as Berlin's excellent public transport makes cars unnecessary but visitor parking can be challenging.",
      "Consider properties with 24-hour concierge services for restaurant reservations, private tours, and access to exclusive cultural events year-round."
    ],
    "cta": "Discover Berlin's finest luxury apartments and elevate your stay with unmatched space, style, and authentic urban sophistication."
  }
  
  return <div>{JSON.stringify(content)}</div>
}
