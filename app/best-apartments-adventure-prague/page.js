export const metadata = {
  title: "Best Apartments for Adventure Seekers in Prague",
  description: "Prague isn't just castles and cobblestones—it's a launchpad for adventurers seeking urban thrills and wild escapes in the heart of Europe."
};

export default function GuidePage() {
  return (
    <div className="guide-page">
      <h1>Best Apartments for Adventure Seekers in Prague</h1>
      
      <div className="hook">
        <p>Prague isn't just castles and cobblestones—it's a launchpad for adventurers seeking urban thrills and wild escapes in the heart of Europe.</p>
      </div>

      <section className="why-choose">
        <h2>Why Choose Prague?</h2>
        <ul>
          <li>Strategic base for epic day trips to Bohemian Switzerland National Park's sandstone formations and dramatic gorges, plus easy access to rock climbing spots in the Bohemian Paradise region</li>
          <li>Blend urban exploration with outdoor pursuits—cycle the Vltava River trails in the morning, explore hidden medieval passages by afternoon, and catch sunset from Petřín Hill's forests</li>
          <li>Apartment living gives you flexibility to gear up, pack lunches, and maintain your own schedule for early mountain starts or late returns from countryside adventures</li>
        </ul>
      </section>

      <section className="considerations">
        <h2>Things to Consider</h2>
        <ul>
          <li>Choose apartments near metro stations (especially Line C for quick exits to hiking trailheads) or tram routes connecting to Holešovice train station for national park access</li>
          <li>Summer (May-September) offers peak adventure conditions but higher apartment rates—consider shoulder seasons for better deals and fewer crowds on trails</li>
        </ul>
      </section>

      <section className="neighborhoods">
        <h2>Best Neighborhoods</h2>
        <p>Holešovice and Karlín top the list for adventure seekers, offering riverside bike paths, proximity to train connections, and grittier, authentic vibes. Vinohrady provides elevated starting points for urban hiking with parks nearby, while Smíchov puts you near climbing gyms and western countryside routes. Avoid ultra-touristy Old Town—you'll pay premiums for location you'll barely use when chasing outdoor thrills.</p>
      </section>

      <div className="cta">
        <p>Book your Prague adventure base now and discover why this city is the ultimate blend of medieval charm and adrenaline-pumping exploration.</p>
      </div>
    </div>
  );
}
