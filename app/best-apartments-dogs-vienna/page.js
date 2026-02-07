export const metadata = {
  title: "Best Dog-Friendly Apartments in Vienna: Your Complete Guide",
  description: "Discover the best pet-friendly apartments in Vienna for you and your furry companion. Expert tips on dog-welcoming neighborhoods, amenities, and local parks."
};

export default function GuidePage() {
  return (
    <div className="guide-page">
      <section className="hook">
        <p>Vienna's imperial charm extends beyond its grand palaces to a network of dog-friendly apartments that welcome you and your four-legged travel companion with open arms.</p>
      </section>
      
      <section className="why-choose">
        <h2>Why Choose This</h2>
        <ul>
          <li>Vienna ranks among Europe's most dog-friendly cities, with over 1,000 parks and green spaces where your pup can explore off-leash in designated areas, making apartment stays comfortable for extended visits</li>
          <li>Many Viennese apartments feature hardwood floors, private courtyards, and proximity to the Donaukanal walking paths—perfect for morning runs and evening strolls with your dog</li>
          <li>Dog-friendly cafés and restaurants pepper every district, allowing you to enjoy Viennese coffee culture without leaving your pet behind at your apartment</li>
        </ul>
      </section>
      
      <section className="considerations">
        <h2>Considerations</h2>
        <ul>
          <li>Confirm pet policies in advance, as some buildings require deposits (typically €200-500) and may have breed or size restrictions, particularly in historic Altbau buildings</li>
          <li>Vienna's public transportation welcomes muzzled dogs or small dogs in carriers, but apartments near parks like Prater or Augarten minimize commute stress for daily walks</li>
        </ul>
      </section>
      
      <section className="neighborhoods">
        <h2>Neighborhoods</h2>
        <p>Leopoldstadt (2nd District) offers Prater park access and spacious apartments, while Neubau (7th) provides trendy, walkable streets. Döbling (19th) features quieter residential areas with generous green spaces ideal for larger breeds.</p>
      </section>
      
      <section className="cta">
        <button>Ready to explore Vienna with your canine companion? Browse our curated selection of dog-friendly apartments and start planning your Austrian adventure today!</button>
      </section>
    </div>
  );
}
