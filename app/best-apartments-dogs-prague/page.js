export const metadata = {
  title: "Best Dog-Friendly Apartments in Prague: Your Pet's Perfect Stay",
  description: "Discover the best dog-friendly apartments in Prague for you and your furry companion. Find welcoming accommodations with parks, pet services, and easy access to Prague's beautiful sights."
};

export default function GuidePage() {
  return (
    <div className="guide-page">
      <section className="hook">
        <p>Prague welcomes four-legged travelers with open arms! Finding the perfect apartment where your dog feels as comfortable as you do transforms your Czech adventure into an unforgettable experience for the whole pack.</p>
      </section>
      
      <section className="why-choose">
        <h2>Why Choose This</h2>
        <ul>
          <li>Prague boasts numerous parks and green spaces like Stromovka and Letná Parks, offering excellent walking routes just minutes from most apartments, ensuring your pup gets plenty of exercise while you explore the city's stunning architecture.</li>
          <li>Many apartment owners in Prague understand pet needs, providing amenities like dog beds, bowls, and nearby veterinary contacts, while the city's dog-friendly café culture means your companion can join you for coffee breaks.</li>
          <li>Apartment stays offer more space and flexibility than hotels, with kitchens for preparing your dog's meals and private entrances that make multiple daily walks stress-free without disturbing other guests.</li>
        </ul>
      </section>
      
      <section className="considerations">
        <h2>Considerations</h2>
        <ul>
          <li>Verify specific pet policies before booking, including size restrictions, additional cleaning fees (typically 500-1500 CZK), and whether outdoor spaces are securely fenced for off-leash time.</li>
          <li>Prague's historic Old Town features cobblestone streets that can be challenging for small dogs or those with joint issues; apartments in residential neighborhoods like Vinohrady offer easier walking terrain.</li>
        </ul>
      </section>
      
      <section className="neighborhoods">
        <h2>Neighborhoods</h2>
        <p>Vinohrady and Žižkov offer the best combination of park access, pet-friendly businesses, and local atmosphere, while Holešovice provides riverside paths perfect for energetic dogs. Avoid heavily touristed areas like Old Town Square for quieter stays.</p>
      </section>
      
      <section className="cta">
        <button>Start searching for dog-friendly apartments in Prague today and give your loyal companion the European adventure they deserve!</button>
      </section>
    </div>
  );
}
