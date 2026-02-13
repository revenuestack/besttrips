import SimpleGuide from '@/components/SimpleGuide'

export const metadata = {
  title: 'Best Apartments for Families in Berlin',
  description: 'Discover spacious family apartments in Berlin with kitchens, multiple bedrooms, and easy access to parks, museums, and kid-friendly attractions.'
}

export default function Page() {
  const content = {
    "intro": "Berlin offers exceptional apartment accommodations perfectly suited for families seeking space, comfort, and authentic local experiences. With spacious layouts, fully-equipped kitchens, and multiple bedrooms, family apartments provide the flexibility and convenience that hotels simply can't match. Staying in residential neighborhoods gives children a genuine taste of Berlin life while parents enjoy the practicality of home-like amenities.",
    "why_stay": [
      "Apartments provide significantly more space than hotel rooms, giving children room to play and parents separate areas to relax after busy sightseeing days.",
      "Fully-equipped kitchens allow families to prepare familiar meals for picky eaters, store snacks, and save money on dining out for every meal.",
      "Residential neighborhoods offer playgrounds, local bakeries, and supermarkets where families can experience authentic Berlin culture beyond tourist areas."
    ],
    "neighborhoods": [
      "Prenzlauer Berg: Known as Berlin's family central, this charming district features tree-lined streets, excellent playgrounds, weekend markets, and countless cafes with high chairs and changing facilities.",
      "Charlottenburg: Offers spacious apartments near Tiergarten park, the Zoo, and cultural attractions, with wide boulevards, safe cycling paths, and easy access to public transportation.",
      "Friedrichshain: Budget-friendly and vibrant with numerous parks including Volkspark Friedrichshain, family-friendly restaurants, and a relaxed atmosphere perfect for families seeking adventure and affordability."
    ],
    "tips": [
      "Purchase a Berlin WelcomeCard for unlimited public transportation and discounts at family attractions, as the U-Bahn and S-Bahn system makes navigating with strollers surprisingly easy.",
      "Book apartments with washing machines and located near supermarkets like REWE or Edeka to handle laundry needs and stock up on breakfast essentials, saving time and money."
    ],
    "cta": "Start planning your unforgettable Berlin family adventure today by booking a spacious apartment that gives your family the comfort, space, and local experience you deserve."
  }

  return <SimpleGuide content={content} destination="Berlin" slug="best-apartments-families-berlin" title="Best Apartments for Families in Berlin" />
}
