export const metadata = {
  title: "Best Apartments for Business Travelers in Lyon: Your Executive Home Base",
  description: "Discover top-rated apartments for business travelers in Lyon. Find furnished accommodations near Part-Dieu business district with workspace, amenities, and excellent transport links."
};

export default function GuidePage() {
  return (
    <div className="guide-page">
      <section className="hook">
        <p>Lyon, France's gastronomic capital and thriving business hub, offers business travelers an ideal alternative to traditional hotels: fully-equipped apartments that combine workspace functionality with the comfort of home.</p>
      </section>
      
      <section className="why-choose">
        <h2>Why Choose This</h2>
        <ul>
          <li>Cost-effectiveness for extended stays with full kitchens allowing you to control dining expenses while maintaining Lyon's culinary standards, plus dedicated workspace areas that hotels often lack</li>
          <li>Strategic locations near Part-Dieu business district and Confluence innovation zone, with superior transport connectivity to Lyon-Part-Dieu TGV station connecting to Paris in under 2 hours</li>
          <li>Professional amenities including high-speed fiber internet, ergonomic workstations, meeting room access, and flexible lease terms accommodating variable project timelines from weekly to monthly stays</li>
        </ul>
      </section>
      
      <section className="considerations">
        <h2>Considerations</h2>
        <ul>
          <li>Book well in advance during major trade events like Sirha food exhibition or Pollutec environmental summit when business accommodation fills quickly, particularly in premium districts</li>
          <li>Verify building access systems and concierge availability if you'll be arriving late or require package handling for business materials, as some apartments lack 24/7 reception services</li>
        </ul>
      </section>
      
      <section className="neighborhoods">
        <h2>Neighborhoods</h2>
        <p>Part-Dieu offers ultimate convenience for business travelers with direct access to international headquarters and transit hubs. Presqu'île balances work and culture with Haussmannian elegance and Michelin-starred dining. Confluence attracts innovation-sector professionals with modern sustainable architecture and creative workspaces.</p>
      </section>
      
      <section className="cta">
        <button>Secure your Lyon business apartment today and experience productivity meets French sophistication in your executive home away from home.</button>
      </section>
    </div>
  );
}
