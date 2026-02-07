export const metadata = {
  title: 'Best Apartments for Dog Owners in Venice',
  description: 'Venice offers dog-friendly apartment rentals perfect for travelers exploring this enchanting canal city with their four-legged companions.'
}

export default function Page() {
  const content = {
    "intro": "Venice offers dog-friendly apartment rentals perfect for travelers exploring this enchanting canal city with their four-legged companions. Unlike many European destinations, Venice welcomes dogs in most public spaces, vaporettos, and many restaurants. Staying in an apartment gives you the flexibility and space your pup needs after long days wandering the charming calle and campos.",
    "why_stay": [
      "Apartments provide private outdoor terraces or courtyards where your dog can relax after exploring Venice's pedestrian streets.",
      "Kitchen facilities let you prepare meals for picky eaters and store dog food without daily restaurant expenses.",
      "Ground-floor units with garden access make early morning and late-night bathroom breaks incredibly convenient and stress-free."
    ],
    "neighborhoods": [
      "Cannaregio: Quieter northern district with spacious campos, local parks, and easy vaporetto access to avoid overwhelming crowds.",
      "Dorsoduro: Artistic area featuring the largest campo (Santa Margherita) and proximity to Giardini Papadopoli for dog exercise.",
      "Castello: Residential eastern quarter with authentic Venetian atmosphere, gardens near the Arsenale, and fewer tourists year-round."
    ],
    "tips": [
      "Dogs must be leashed in Venice and muzzled on vaporettos, though this rule is rarely enforced for small or calm dogs.",
      "Pack collapsible water bowls and waste bags, as public bins are limited and Venice's stone streets get hot in summer."
    ],
    "cta": "Book your dog-friendly Venetian apartment today and discover why this car-free city is a canine paradise waiting to be explored together."
  }
  
  return <div>{JSON.stringify(content)}</div>
}
