export const metadata = {
  title: 'Best Apartments for Luxury in Budapest',
  description: 'Budapest offers an unparalleled blend of historic grandeur and modern sophistication, making it an ideal destination for luxury apartment stays.'
}

export default function Page() {
  const content = {
    "intro": "Budapest offers an unparalleled blend of historic grandeur and modern sophistication, making it an ideal destination for luxury apartment stays. From the elegant architecture of District V to the trendy riverside addresses along the Danube, the city's finest apartments provide five-star amenities with the privacy and space discerning travelers demand. Experience Hungarian capital like a local, with your own exclusive haven in one of Europe's most captivating cities.",
    "why_stay": [
      "Spacious layouts with high ceilings, period details, and designer furnishings create an atmosphere of refined elegance unavailable in hotels.",
      "Prime locations in historic buildings offer stunning views of Parliament, Buda Castle, and the Danube from private terraces and balconies.",
      "Personalized concierge services, private chefs, and in-residence spa treatments ensure every luxury need is anticipated and exceeded effortlessly."
    ],
    "neighborhoods": [
      "District V (Belváros-Lipótváros): The prestigious heart of Budapest, featuring neoclassical palaces converted into opulent residences steps from luxury shopping and Michelin-starred dining.",
      "Castle District (Várnegyed): Medieval charm meets contemporary luxury in renovated apartments with cobblestone streets, panoramic city views, and immediate access to cultural landmarks.",
      "District VI (Terézváros): Sophisticated boulevard living along Andrássy Avenue, where Art Nouveau masterpieces house modern apartments near the Opera House and designer boutiques."
    ],
    "tips": [
      "Book apartments with thermal spa access or private jacuzzis to enjoy Budapest's legendary healing waters without leaving your residence.",
      "Arrange airport transfers and skip-the-line tickets through your apartment's concierge before arrival to maximize your precious time in the city."
    ],
    "cta": "Discover your perfect luxury apartment in Budapest and elevate your stay to an unforgettable experience of Hungarian elegance and comfort."
  }
  
  return <div>{JSON.stringify(content)}</div>
}
