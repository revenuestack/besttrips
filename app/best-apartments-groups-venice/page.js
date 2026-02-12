import GuideLayout from '@/components/GuideLayout'

export const metadata = {
  title: "Best Apartments for Groups in Venice: Spacious Stays in the Floating City",
  description: "Discover the best group apartments in Venice, Italy. From canal-view rentals to spacious Dorsoduro flats, find the perfect base for your group adventure in this magical city."
}

export default function Page() {
  const guide = {
    destination: "Venice",
    country: "Italy",
    type: "Apartments",
    audience: "Groups",
    hook: "Venice rewards groups who choose apartments over hotels—more space, authentic neighborhoods, and the joy of cooking fresh market finds while planning your next gondola adventure together.",
    why_stay: [
      "Cost-effective for 4+ travelers with full kitchens to prepare meals using ingredients from Rialto Market, plus separate bedrooms and common areas for group dynamics",
      "Authentic neighborhood experiences in residential areas like Cannaregio or Dorsoduro, where you'll live like locals away from tourist-packed San Marco",
      "Flexibility to create your own schedule with laundry facilities, multiple bathrooms, and space to spread out after long days exploring bridges and basilicas"
    ],
    considerations: [
      "Venice's car-free layout means lugging bags over bridges and through narrow calles—choose apartments near vaporetto stops and confirm accessibility with owners before booking",
      "Group noise travels in old Venetian buildings with thin walls; respect quiet hours (typically 14:00-16:00 and 22:00-08:00) to maintain neighbor relations"
    ],
    neighborhood_tips: "Cannaregio offers excellent value with local trattorias and easy vaporetto access. Dorsoduro provides artsy vibes near galleries and universities. Avoid ultra-touristy San Marco unless you crave constant crowds. Giudecca offers peaceful waterfront living with stunning skyline views, though you'll vaporetto-commute everywhere.",
    booking_advice: "Book 4-6 months ahead for peak season (April-October). Verify the exact address and vaporetto stop proximity. Request building codes and lockbox details in advance. Use platforms with verified reviews from other groups, and confirm the apartment accommodates your exact headcount legally—Venice enforces occupancy limits strictly."
  }

  return <GuideLayout guide={guide} />
}
