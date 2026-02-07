export const metadata = {
  title: "Best Dog-Friendly Apartments in Porto: Your Complete Guide",
  description: "Discover the best pet-friendly apartments in Porto, Portugal. Find dog-welcoming rentals in top neighborhoods with parks, cafes, and riverside walks for you and your furry companion."
};

export default function GuidePage() {
  return (
    <div className="guide-page">
      <section className="hook">
        <p>Porto's charming cobblestone streets, riverside promenades, and welcoming culture make it a fantastic destination for travelers with dogs. Finding the right apartment ensures both you and your four-legged friend enjoy this historic Portuguese city to the fullest.</p>
      </section>
      
      <section className="why-choose">
        <h2>Why Choose This</h2>
        <ul>
          <li>Porto offers numerous dog-friendly parks including Parque da Cidade (the largest urban park in Portugal) and riverside paths along the Douro where your pup can explore safely</li>
          <li>Many apartments feature private terraces or ground-floor access, perfect for quick bathroom breaks and morning stretches with your dog</li>
          <li>The city's pet-friendly café culture means you'll find welcoming outdoor patios throughout Ribeira and Foz do Douro where dogs are embraced</li>
        </ul>
      </section>
      
      <section className="considerations">
        <h2>Considerations</h2>
        <ul>
          <li>Porto's historic center features steep hills and stairs that may challenge older or less mobile dogs—consider apartments in flatter neighborhoods like Foz or Boavista</li>
          <li>Verify specific pet policies including size restrictions, additional cleaning fees (typically €20-50), and whether the building has elevator access for larger breeds</li>
        </ul>
      </section>
      
      <section className="neighborhoods">
        <h2>Neighborhoods</h2>
        <p>Foz do Douro offers beachfront apartments with easy coastal walks, while Boavista provides modern rentals near Parque da Cidade. Cedofeita blends central location with nearby green spaces, and Ribeira suits active dogs comfortable with historic cobblestones.</p>
      </section>
      
      <section className="cta">
        <button>Start searching for your perfect dog-friendly Porto apartment today and create unforgettable memories exploring this beautiful Portuguese city with your loyal companion by your side.</button>
      </section>
    </div>
  );
}
