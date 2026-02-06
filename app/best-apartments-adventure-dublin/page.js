export const metadata = {
  title: "Best Apartments for Adventure Seekers in Dublin",
  description: "Dublin's unique position between mountains and sea makes it the ultimate basecamp for adventure seekers who want thrilling outdoor experiences by day and vibrant cultural immersion by night."
};

export default function GuidePage() {
  return (
    <div className="guide-page">
      <h1>Best Apartments for Adventure Seekers in Dublin</h1>
      
      <div className="hook">
        <p>Dublin's unique position between mountains and sea makes it the ultimate basecamp for adventure seekers who want thrilling outdoor experiences by day and vibrant cultural immersion by night.</p>
      </div>

      <section className="why-choose">
        <h2>Why Choose Dublin?</h2>
        <ul>
          <li>Prime access to coastal hiking trails in Howth and Bray, plus easy day trips to Wicklow Mountains for climbing and trekking—all within an hour of the city center</li>
          <li>Unmatched blend of adventure and culture with world-class surfing beaches nearby, cycling routes through Phoenix Park, and legendary pubs with live traditional music every night</li>
          <li>Excellent public transport and walkability mean you can ditch the car and seamlessly move from morning cliff walks to afternoon city exploration</li>
        </ul>
      </section>

      <section className="considerations">
        <h2>Things to Consider</h2>
        <ul>
          <li>Book accommodations near DART stations (Dublin Area Rapid Transit) for easiest access to coastal adventure spots like Howth and Bray</li>
          <li>Peak adventure season runs May through September, but shoulder seasons offer better apartment rates and fewer crowds on trails while still maintaining accessibility</li>
        </ul>
      </section>

      <section className="neighborhoods">
        <h2>Best Neighborhoods</h2>
        <p>For adventure seekers, prioritize apartments in Stoneybatter or Smithfield for proximity to Phoenix Park cycling routes and authentic local vibes, or choose coastal neighborhoods like Sandymount or Clontarf for immediate beach and trail access. Temple Bar offers central location and nightlife but expect higher prices and tourist crowds. The Docklands provide modern amenities with quick DART connections to hiking destinations.</p>
      </section>

      <div className="cta">
        <p>Start your Dublin adventure today—search for apartments in these neighborhoods and prepare for the perfect balance of adrenaline-pumping outdoor activities and Ireland's warmest hospitality.</p>
      </div>
    </div>
  );
}
