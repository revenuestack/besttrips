export const metadata = {
  title: 'Best Apartments for Seniors in Prague: Comfortable & Accessible Stays in the Golden City',
  description: 'Discover senior-friendly apartments in Prague with elevator access, central locations, and modern amenities. Find the perfect accessible accommodation for your Czech adventure.'
}

export default function Page() {
  const content = {
    "hook": "Prague's enchanting cobblestone streets needn't be a barrier—discover modern, elevator-equipped apartments that put you steps from the city's treasures while offering the comfort and accessibility seniors deserve.",
    "why_visit": [
      "Senior-friendly apartments with elevators and accessible features are increasingly available in Prague's historic center, eliminating concerns about climbing stairs while keeping you close to major attractions like Charles Bridge and Old Town Square.",
      "Prague's excellent public transportation system includes accessible trams and metros, making it easy to explore the city from a centrally-located apartment base without exhausting daily walks.",
      "Apartment stays offer flexibility with kitchen facilities for dietary needs, space to rest between excursions, and the comfort of a home-like environment—ideal for longer visits where you can explore at your own pace."
    ],
    "insider_tips": [
      "Book apartments in Vinohrady or Karlín neighborhoods—both offer excellent accessibility, nearby grocery stores, pharmacies, and healthcare facilities while being just minutes from city center attractions via direct tram lines.",
      "Request ground-floor or elevator-serviced apartments explicitly, and confirm grab bars in bathrooms; many renovated buildings in historic areas now feature modern accessibility upgrades behind their charming façades."
    ],
    "logistics": "Book 3-6 months ahead for best selection of accessible apartments. Spring (April-May) and fall (September-October) offer mild weather ideal for seniors. Airport transfers via pre-arranged taxi services cost around 600-800 CZK and eliminate navigation stress.",
    "cta": "Start planning your comfortable Prague apartment stay today—search for senior-friendly rentals with verified accessibility features and experience Czech culture at your own relaxed pace."
  }
  
  return <div>{JSON.stringify(content)}</div>
}
