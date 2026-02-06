export const metadata = {
  title: "Best Apartments for Adventure Seekers in Vienna",
  description: "Vienna transforms from imperial elegance to adrenaline playground, where cobblestone streets lead to mountain trails and world-class adventure awaits at your doorstep."
};

export default function GuidePage() {
  return (
    <div className="guide-page">
      <h1>Best Apartments for Adventure Seekers in Vienna</h1>
      
      <div className="hook">
        <p>Vienna transforms from imperial elegance to adrenaline playground, where cobblestone streets lead to mountain trails and world-class adventure awaits at your doorstep.</p>
      </div>

      <section className="why-choose">
        <h2>Why Choose Vienna?</h2>
        <ul>
          <li>Unmatched cycling infrastructure with scenic Danube Island paths and Vienna Woods trails accessible via extensive bike lanes throughout the city</li>
          <li>Strategic basecamp location offering quick access to climbing gyms, urban exploration sites, and weekend escapes to the Austrian Alps for skiing and hiking</li>
          <li>Seamless blend of outdoor adventure and cultural richness, letting you summit nearby peaks in the morning and explore historic coffeehouses by afternoon</li>
        </ul>
      </section>

      <section className="considerations">
        <h2>Things to Consider</h2>
        <ul>
          <li>Apartments near U-Bahn stations in outer districts provide faster access to trailheads while maintaining excellent city connectivity</li>
          <li>Secure bike storage is essential—verify apartments include locked facilities or basement storage before booking</li>
        </ul>
      </section>

      <section className="neighborhoods">
        <h2>Best Neighborhoods</h2>
        <p>Döbling (19th district) offers immediate access to Vienna Woods hiking trails while remaining well-connected to the city center. Leopoldstadt (2nd district) positions you along the Danube Canal and Prater park for morning runs and cycling. Hietzing (13th district) borders Lainzer Tiergarten nature reserve, perfect for trail running and wildlife encounters. For budget-conscious adventurers, Favoriten (10th district) provides excellent public transport links to climbing gyms and mountain-bound trains while offering more affordable rental rates.</p>
      </section>

      <div className="cta">
        <p>Book your Vienna adventure base today and discover why Austria's capital is the ultimate European hub for thrill-seekers who refuse to choose between urban culture and mountain pursuits.</p>
      </div>
    </div>
  );
}
