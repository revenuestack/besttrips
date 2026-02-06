export const metadata = {
  title: "Best Apartments for Adventure Seekers in Edinburgh",
  description: "Edinburgh is an adventure seeker's dream, where rugged volcanic peaks meet historic cobblestone streets, offering urban exploration and wild Scottish landscapes within minutes of your doorstep."
};

export default function GuidePage() {
  return (
    <div className="guide-page">
      <h1>Best Apartments for Adventure Seekers in Edinburgh</h1>
      
      <div className="hook">
        <p>Edinburgh is an adventure seeker's dream, where rugged volcanic peaks meet historic cobblestone streets, offering urban exploration and wild Scottish landscapes within minutes of your doorstep.</p>
      </div>

      <section className="why-choose">
        <h2>Why Choose Edinburgh?</h2>
        <ul>
          <li>Hike Arthur's Seat, an extinct volcano in the city center, with panoramic views over Edinburgh and the Firth of Forth, or tackle coastal trails along dramatic cliffs and hidden beaches</li>
          <li>Use Edinburgh as your gateway to the Scottish Highlands, with world-class rock climbing, mountaineering, and wilderness hiking just 1-2 hours away by car or train</li>
          <li>Explore underground vaults and historic closes by day, then return to modern apartments with all the amenities you need to recover and plan your next adventure</li>
        </ul>
      </section>

      <section className="considerations">
        <h2>Things to Consider</h2>
        <ul>
          <li>Edinburgh's weather can be unpredictable year-round, so choose apartments with proper heating and drying space for wet gear after outdoor adventures</li>
          <li>Parking can be challenging in central neighborhoods, so consider proximity to public transport if you're planning Highland day trips, or look for rentals with dedicated parking</li>
        </ul>
      </section>

      <section className="neighborhoods">
        <h2>Best Neighborhoods</h2>
        <p>Leith offers affordable apartments with coastal trail access and vibrant nightlife, while Newington and Marchmont put you within walking distance of Arthur's Seat and Holyrood Park. Old Town apartments provide instant access to underground vaults and historic sites, though they're pricier. Stockbridge combines riverside walks with quick access to both city center attractions and northbound Highland routes, making it ideal for balancing urban and outdoor adventures.</p>
      </section>

      <div className="cta">
        <p>Book your Edinburgh adventure base today and discover why this compact city is the perfect launchpad for Scotland's wildest experiences.</p>
      </div>
    </div>
  );
}
