export const metadata = {
  title: "Best Dog-Friendly Apartments in Venice: Your Guide to Staying with Pets",
  description: "Discover the best dog-friendly apartments in Venice, Italy. Find pet-welcoming accommodations, explore dog-friendly neighborhoods, and navigate the floating city with your furry companion."
};

export default function GuidePage() {
  return (
    <div className="guide-page">
      <section className="hook">
        <p>Venice's enchanting canals and historic charm aren't just for humans—with the right apartment, your four-legged friend can experience la dolce vita alongside you in this magical city.</p>
      </section>
      
      <section className="why-choose">
        <h2>Why Choose This</h2>
        <ul>
          <li>Dog-friendly apartments offer private spaces where your pet can relax after exploring Venice's pedestrian-friendly streets and campo squares, without hotel restrictions or extra fees</li>
          <li>Many Venetian apartments feature ground-floor access or garden courtyards, eliminating the stress of navigating narrow staircases with your dog and providing convenient outdoor relief areas</li>
          <li>Staying in residential neighborhoods like Cannaregio or Castello gives you access to local parks, quieter walkways along fondamentas, and authentic bacari where dogs are often welcomed by friendly locals</li>
        </ul>
      </section>
      
      <section className="considerations">
        <h2>Considerations</h2>
        <ul>
          <li>Venice has no cars but countless bridges—choose apartments with minimal steps or bridge crossings, especially important for senior dogs or larger breeds who may tire from constant climbing</li>
          <li>Book apartments near vaporetto stops that allow dogs (they're permitted on water buses with tickets) and confirm your accommodation has outdoor access, as finding late-night relief spots can be challenging in Venice's labyrinthine layout</li>
        </ul>
      </section>
      
      <section className="neighborhoods">
        <h2>Neighborhoods</h2>
        <p>Cannaregio offers spacious fondamentas perfect for morning walks and proximity to parks, while Castello provides quieter residential streets and garden access. Dorsoduro features Campo San Barnaba where locals gather with dogs, and Giudecca offers waterfront paths with fewer tourists.</p>
      </section>
      
      <section className="cta">
        <button>Ready to explore Venice with your pup? Browse our curated selection of dog-friendly apartments and start planning your unforgettable Venetian adventure together today.</button>
      </section>
    </div>
  );
}
