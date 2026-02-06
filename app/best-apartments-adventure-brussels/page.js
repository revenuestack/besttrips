export const metadata = {
  title: "Best Apartments for Adventure Seekers in Brussels",
  description: "Brussels isn't just waffles and bureaucrats—it's a launchpad for adventure seekers who crave both urban thrills and wild escapes."
};

export default function GuidePage() {
  return (
    <div className="guide-page">
      <h1>Best Apartments for Adventure Seekers in Brussels</h1>
      
      <div className="hook">
        <p>Brussels isn't just waffles and bureaucrats—it's a launchpad for adventure seekers who crave both urban thrills and wild escapes.</p>
      </div>

      <section className="why-choose">
        <h2>Why Choose Brussels?</h2>
        <ul>
          <li>Cycle through Sonian Forest's ancient beech canopies or tackle urban trails weaving through parks like Bois de la Cambre, all accessible within 30 minutes from your apartment</li>
          <li>Rock climbing gyms like Blomm and Manneken Bloc offer year-round training, while the Ardennes region—less than an hour away—delivers world-class hiking, kayaking, and caving weekends</li>
          <li>Explore Brussels' diverse neighborhoods on foot or bike: from graffiti-laden Saint-Gilles to the cobbled lanes of Sablon, every district offers its own micro-adventure</li>
        </ul>
      </section>

      <section className="considerations">
        <h2>Things to Consider</h2>
        <ul>
          <li>Weather can be unpredictable—apartments with bike storage and gear-drying space are essential for year-round adventurers</li>
          <li>Public transport is excellent, but proximity to Brussels-South or Brussels-Central stations maximizes weekend escape potential to the Ardennes</li>
        </ul>
      </section>

      <section className="neighborhoods">
        <h2>Best Neighborhoods</h2>
        <p>Ixelles and Saint-Gilles blend urban energy with park access—perfect bases near cycling routes yet close to climbing gyms and nightlife. Etterbeek offers quieter residential vibes with direct paths to Sonian Forest. For car-free living, choose Schaerbeek or Molenbeek where excellent metro links connect you to trailheads and regional trains. Uccle provides a suburban gateway if you prefer green surroundings while maintaining city access.</p>
      </section>

      <div className="cta">
        <p>Find your Brussels adventure base today—book an apartment that puts forests, cliffs, and cobblestones all within reach.</p>
      </div>
    </div>
  );
}
