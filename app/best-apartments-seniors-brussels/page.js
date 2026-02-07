export const metadata = {
  title: 'Best Apartments for Seniors in Brussels: Comfort Meets European Charm',
  description: 'Discover senior-friendly apartments in Brussels offering accessibility, healthcare proximity, and cultural richness. Your guide to comfortable retirement living in Belgium\'s capital.'
}

export default function Page() {
  const content = {
    "hook": "Brussels combines old-world European elegance with modern senior-friendly living, making it an ideal destination for retirees seeking accessible apartments in a culturally vibrant, walkable city with world-class healthcare.",
    "why_visit": [
      "Excellent healthcare system with numerous hospitals and clinics within easy reach, plus universal coverage that extends to EU residents and accessible medical services",
      "Compact, pedestrian-friendly neighborhoods like Ixelles and Uccle offer ground-floor and elevator-equipped apartments near bakeries, pharmacies, and parks perfect for leisurely strolls",
      "Rich cultural scene with senior discounts at museums, concerts, and cafes, plus a strong expat community providing social connections and English-language services"
    ],
    "insider_tips": [
      "Focus on apartments near Metro stations in Ixelles, Uccle, or Woluwe-Saint-Pierre—these neighborhoods offer quieter streets, green spaces, and excellent amenities tailored to older residents",
      "Many buildings offer 'service résidentiel' options with on-site assistance, communal dining, and maintenance included—ask about these when apartment hunting for added peace of mind"
    ],
    "logistics": "Brussels Airport is 20 minutes from the city center with accessible train connections. The Metro, trams, and buses offer senior discounts (65+). English is widely spoken in rental agencies. Rentals typically require one month's deposit and proof of income or pension statements.",
    "cta": "Start your Brussels apartment search today and discover why thousands of seniors have chosen Belgium's welcoming capital for their retirement years."
  }
  
  return <div>{JSON.stringify(content)}</div>
}
