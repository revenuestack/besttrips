export const metadata = {
  title: "Best Apartments for Adventure Seekers in Paris",
  description: "Paris isn't just museums and cafés—it's an adventure playground where cobblestone streets lead to world-class bouldering, forest trails, and endless cycling routes."
};

export default function GuidePage() {
  return (
    <div className="guide-page">
      <h1>Best Apartments for Adventure Seekers in Paris</h1>
      
      <div className="hook">
        <p>Paris isn't just museums and cafés—it's an adventure playground where cobblestone streets lead to world-class bouldering, forest trails, and endless cycling routes.</p>
      </div>

      <section className="why-choose">
        <h2>Why Choose Paris?</h2>
        <ul>
          <li>Direct train access to Fontainebleau's legendary sandstone boulders, considered some of the best climbing terrain in Europe, reachable in under an hour</li>
          <li>Extensive cycling infrastructure with dedicated bike lanes connecting you to Versailles' gardens, the Seine riverside paths, and Bois de Vincennes and Bois de Boulogne forests for trail running and hiking</li>
          <li>Vibrant inline skating culture including the famous Friday night Pari Roller mass skate events, plus countless spots for urban exploration from abandoned railways to rooftop views</li>
        </ul>
      </section>

      <section className="considerations">
        <h2>Things to Consider</h2>
        <ul>
          <li>Book apartments near RER train lines (particularly Line R for Fontainebleau access) or metro stations connecting to Gare de Lyon for quickest adventure access</li>
          <li>Ground-floor or elevator buildings are essential if you're hauling climbing gear, bikes, or trail running equipment daily</li>
        </ul>
      </section>

      <section className="neighborhoods">
        <h2>Best Neighborhoods</h2>
        <p>The 11th and 20th arrondissements offer affordable apartments with excellent metro connections and proximity to Bois de Vincennes for morning trail runs. The 13th puts you near Gare de Lyon for fast Fontainebleau access. For cycling enthusiasts, apartments near Canal Saint-Martin (10th) provide scenic bike routes. The Latin Quarter (5th) balances adventure access with classic Parisian charm, though prices run higher.</p>
      </section>

      <div className="cta">
        <p>Search for apartments with bike storage, near RER stations, and in neighborhoods that let you swap climbing shoes for running trails without crossing the entire city.</p>
      </div>
    </div>
  );
}
