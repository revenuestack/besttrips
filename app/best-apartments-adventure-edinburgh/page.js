export const metadata = {
  title: "Best Apartments for Adventure Seekers in Edinburgh",
  description: "Discover the best apartments in Edinburgh for adventure seekers. Find your perfect base near Arthur's Seat, historic trails, and highland gateways for unforgettable Scottish adventures."
};

export default function GuidePage() {
  return (
    <div className="guide-page">
      <section className="hook">
        <p>Edinburgh is an adventurer\'s paradise where ancient volcanoes meet medieval streets and the Scottish Highlands wait at your doorstep. Choosing the right apartment puts you at the heart of it all.</p>
      </section>
      
      <section className="why-choose">
        <h2>Why Choose Apartments?</h2>
        <ul>
          <li>Prime access to Arthur\'s Seat, Pentland Hills, and coastal paths for daily hiking and trail running adventures right from your doorstep</li>
          <li>Central location to Scotland\'s outdoor playground with easy connections to the Highlands, Cairngorms, and world-class mountain biking trails within an hour\'s drive</li>
          <li>Authentic Scottish experience with apartments in historic neighborhoods offering climbing walls, gear rental shops, and adventure tour operators nearby</li>
        </ul>
      </section>
      
      <section className="considerations">
        <h2>Considerations</h2>
        <ul>
          <li>Edinburgh\'s weather changes rapidly—choose apartments with good heating, drying facilities for wet gear, and secure storage for bikes and equipment</li>
          <li>Peak adventure season (May-September) means higher prices and limited availability, so book early or consider shoulder seasons for better deals and quieter trails</li>
        </ul>
      </section>
      
      <section className="neighborhoods">
        <h2>Best Neighborhoods</h2>
        <p>Leith offers coastal access and modern amenities, Old Town provides historic charm near castle ramparts and underground vaults, while Bruntsfield and Morningside give direct access to hiking trails with quieter residential vibes. Stockbridge combines riverside walks with vibrant cafes perfect for post-adventure recovery.</p>
      </section>
      
      <section className="cta">
        <p>Book your Edinburgh adventure base today and wake up ready to conquer Scotland\'s most iconic peaks and hidden trails.</p>
      </section>
    </div>
  );
}
