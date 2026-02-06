export const metadata = {
  title: "Best Apartments for Adventure Seekers in London",
  description: "London's best apartments for adventure seekers put you at the crossroads of urban exploration and wild escapes, with the Thames Path at your doorstep and mountain trails just a train ride away."
};

export default function GuidePage() {
  return (
    <div className="guide-page">
      <h1>Best Apartments for Adventure Seekers in London</h1>
      
      <div className="hook">
        <p>London's best apartments for adventure seekers put you at the crossroads of urban exploration and wild escapes, with the Thames Path at your doorstep and mountain trails just a train ride away.</p>
      </div>

      <section className="why-choose">
        <h2>Why Choose London?</h2>
        <ul>
          <li>Direct access to 180 miles of Thames Path for cycling and running, plus world-class climbing gyms like The Castle and Vauxwall within the city</li>
          <li>Strategic transport connections to Surrey Hills, Chilterns, and South Downs for weekend hiking, with Brighton's coast reachable in under an hour</li>
          <li>Vibrant neighborhoods offering urban adventure through street art tours, rooftop experiences, and 24-hour exploration opportunities across diverse cultural districts</li>
        </ul>
      </section>

      <section className="considerations">
        <h2>Things to Consider</h2>
        <ul>
          <li>Properties near major train stations (Waterloo, King's Cross, Paddington) command premium prices but save commute time to adventure destinations</li>
          <li>Ground-floor or secure storage apartments are essential for cyclists and outdoor gear enthusiasts who need bike and equipment storage</li>
        </ul>
      </section>

      <section className="neighborhoods">
        <h2>Best Neighborhoods</h2>
        <p>East London areas like Hackney and Stratford offer affordable options with excellent cycling infrastructure and Olympic Park trails. South London neighborhoods including Clapham and Brixton provide quick access to Surrey Hills while maintaining urban energy. North London's Camden and Kentish Town position you near Regent's Canal towpaths and direct trains to Peak District climbing areas. West London's Hammersmith combines riverside cycling routes with easy M4 corridor access to Welsh mountains.</p>
      </section>

      <div className="cta">
        <p>Book your London adventure base today and discover why this city is the ultimate launchpad for explorers who want metropolitan excitement and wilderness escape in equal measure.</p>
      </div>
    </div>
  );
}
