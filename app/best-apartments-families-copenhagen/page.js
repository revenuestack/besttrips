export const metadata = {
  title: 'Best Apartments for Families in Copenhagen',
  description: 'Copenhagen stands out as one of Europe\'s most family-friendly capitals, offering safe neighborhoods, excellent public transportation, and countless child-friendly attractions.'
}

export default function Page() {
  const content = {
    "intro": "Copenhagen stands out as one of Europe's most family-friendly capitals, offering safe neighborhoods, excellent public transportation, and countless child-friendly attractions. Apartment stays provide families with the space, kitchens, and local living experience that hotels simply can't match, making longer stays comfortable and budget-friendly.",
    "why_stay": [
      "Apartments offer full kitchens, saving money on dining out while accommodating picky eaters and special dietary needs effortlessly.",
      "Extra space means kids have room to play, parents can relax, and everyone enjoys separate sleeping areas.",
      "Experience authentic Danish living in residential neighborhoods with playgrounds, bakeries, and local parks nearby every day."
    ],
    "neighborhoods": [
      "Vesterbro: Trendy, family-friendly district with Tivoli Gardens nearby, organic cafes, and excellent walkability to central attractions.",
      "Nørrebro: Diverse, vibrant area offering affordable options, Superkilen park, lakes for walking, and authentic multicultural dining experiences.",
      "Østerbro: Upscale, peaceful neighborhood perfect for families, close to beaches, parks, and the beloved Copenhagen Zoo."
    ],
    "tips": [
      "Book apartments with bike storage and rent cargo bikes to explore like locals—Copenhagen's flat terrain and bike lanes make cycling with kids incredibly safe and fun.",
      "Consider staying near metro or S-train stations for easy day trips to beaches, castles, and attractions while keeping little legs fresh."
    ],
    "cta": "Start your Copenhagen family adventure today by browsing our handpicked selection of spacious, family-ready apartments in the city's best neighborhoods!"
  }
  
  return <div>{JSON.stringify(content)}</div>
}
