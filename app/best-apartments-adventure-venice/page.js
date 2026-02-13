import SimpleGuide from '@/components/SimpleGuide'

export const metadata = {
  title: 'Best Apartments for Adventure Seekers in Venice',
  description: 'Venice apartments offer adventure seekers the perfect base for exploring hidden canals, secret passages, and authentic neighborhoods beyond tourist crowds.'
}

export default function Page() {
  const content = {
  "intro": "Venice apartments offer adventure seekers the perfect base for exploring hidden canals, secret passages, and authentic neighborhoods beyond tourist crowds. Wake up to gondola songs and spend days kayaking waterways or cycling Lido beaches. Choose apartments with rooftop terraces for sunset views over terracotta rooftops.",
  "why_stay": [
    "Live like locals in residential areas, discovering family-run bacari and navigating maze-like streets off typical tourist routes.",
    "Save money on accommodation compared to hotels, leaving budget for water sports, island hopping, and authentic cicchetti crawls.",
    "Enjoy kitchen facilities to prepare fresh market finds from Rialto, fueling early morning explorations before crowds arrive."
  ],
  "neighborhoods": [
    "Cannaregio - Authentic residential quarter with local markets, quiet canals, and Jewish Ghetto's historic streets to explore",
    "Dorsoduro - Artsy district near university, with vibrant nightlife, contemporary galleries, and scenic waterfront promenades",
    "Castello - Eastern neighborhood offering local life, green spaces at Giardini, and Arsenal's maritime history"
  ],
  "tips": [
    "Book ground-floor apartments with easy water access for storing kayaks or paddleboards during Venice lagoon adventures",
    "Purchase vaporetto passes for unlimited island hopping to Murano, Burano, and adventure-filled Lido beach cycling"
  ],
  "cta": "Book your Venice apartment today and unlock the city's adventurous soul beyond the crowded squares."
}

  return <SimpleGuide content={content} destination="Venice" slug="best-apartments-adventure-venice" title="Best Apartments for Adventure Seekers in Venice" />
}
