import TravelGuidePage from '@/components/TravelGuidePage'

export const metadata = {
  title: 'Best Family Hotels in Lyon | Top 10 Kid-Friendly Accommodations 2026',
  description: 'Discover the 10 best family-friendly hotels in Lyon, France. From budget-friendly options to luxury stays, find the perfect accommodation for your family trip to Lyon.',
}

export default function BestFamilyHotelsLyon() {
  const content = {
    quickSummary: "Lyon, France's gastronomic capital, offers an exceptional blend of family-friendly hotels that combine comfort, convenience, and cultural immersion. From modern hotels near the Confluence Museum to historic properties in the heart of Presqu'île, these carefully selected accommodations cater to families seeking both adventure and relaxation in one of France's most underrated family destinations.",
    
    atAGlance: {
      bestFor: "Families seeking a mix of culture, gastronomy, and kid-friendly activities in a walkable European city",
      keyHighlights: [
        "Wide range of accommodations from budget-friendly to luxury options",
        "Excellent public transportation makes exploring with kids easy",
        "Many hotels offer connecting rooms and family suites",
        "Central locations near parks, museums, and the Rhône riverfront",
        "Fewer crowds than Paris, more authentic French experience"
      ]
    },
    
    overview: `
      <p>Lyon stands out as an ideal family destination in France, offering the cultural richness of Paris without the overwhelming crowds. The city's compact size and excellent public transportation network make it surprisingly easy to navigate with children, while its position at the confluence of the Rhône and Saône rivers provides beautiful waterfront promenades perfect for strollers.</p>
      <p>The hotel landscape in Lyon has evolved significantly in recent years, with many properties now offering dedicated family amenities like connecting rooms, kids' clubs, and special meal options. Whether you're planning to explore the UNESCO World Heritage-listed Vieux Lyon, visit the interactive Confluence Museum, or simply enjoy authentic French cuisine without breaking the bank, choosing the right hotel sets the foundation for a memorable family trip.</p>
      <p>This guide focuses on hotels that go beyond merely tolerating children to actively welcoming families. We've prioritized properties with spacious rooms, central locations near family attractions, and staff experienced in accommodating young travelers. From budget-conscious families to those seeking luxury, these selections represent the best Lyon has to offer for family stays in 2026.</p>
    `,
    
    topPlaces: [
      {
        name: "Hôtel Carlton Lyon - MGallery",
        priceRange: "$$$",
        description: "This historic 4-star property near Bellecour Square combines Belle Époque elegance with modern family-friendly amenities. The hotel's central location puts you within walking distance of Vieux Lyon, while spacious family rooms accommodate up to four guests comfortably.",
        whyGreat: "The connecting rooms are genuinely spacious, the concierge is exceptional at arranging family-friendly activities, and the breakfast buffet includes both French classics and kid-friendly options. Location is unbeatable for exploring on foot."
      },
      {
        name: "Mama Shelter Lyon",
        priceRange: "$$",
        description: "Part of the trendy Mama Shelter chain, this hotel brings fun design and family-friendly vibes to Lyon's Perrache district. The rooftop restaurant offers city views, while connecting family rooms feature playful décor that kids love.",
        whyGreat: "The informal atmosphere makes dining with children stress-free, rooms are designed with families in mind (including blackout curtains for jet-lagged kids), and the location near Perrache station simplifies day trips to nearby attractions."
      },
      {
        name: "Novotel Lyon Confluence",
        priceRange: "$$",
        description: "Modern hotel directly adjacent to the Confluence Museum and shopping center. Features a dedicated kids' play area, family rooms with bunk beds, and easy access to the riverfront promenade.",
        whyGreat: "The museum is literally next door (perfect for rainy days), the play area gives kids space to burn energy, and parents appreciate the spacious rooms with separate sleeping areas for children. The nearby aquarium is a 10-minute walk."
      },
      {
        name: "Okko Hotels Lyon Pont Lafayette",
        priceRange: "$$",
        description: "Contemporary hotel offering free evening snacks and drinks (a huge money-saver for families). Located between Part-Dieu and the Rhône, with family rooms featuring smart layouts and modern amenities.",
        whyGreat: "The complimentary evening aperitif includes kid-friendly snacks and saves on dinner costs. Rooms are thoughtfully designed with space for families, and the location provides easy metro access to all major attractions."
      },
      {
        name: "Hôtel du Simplon",
        priceRange: "$",
        description: "Budget-friendly family hotel near Part-Dieu station offering excellent value without sacrificing comfort. Family rooms sleep up to four, and the hotel provides practical amenities like refrigerators and microwaves.",
        whyGreat: "Best budget option for families who want to save money for experiences rather than accommodation. The fridge and microwave let you prepare simple meals for picky eaters, and Part-Dieu station connects to everywhere in Lyon."
      },
      {
        name: "Radisson Blu Hotel Lyon",
        priceRange: "$$$",
        description: "Upscale hotel near Part-Dieu with spacious family suites, indoor pool, and kid-friendly breakfast buffet. Modern rooms feature floor-to-ceiling windows with city views.",
        whyGreat: "The indoor pool is a lifesaver on rainy days, rooms are genuinely spacious compared to many European hotels, and the breakfast spread accommodates even the pickiest young eaters. Part-Dieu location means easy train access to regional attractions."
      },
      {
        name: "Mercure Lyon Centre - Gare Part Dieu",
        priceRange: "$$",
        description: "Reliable Mercure property steps from Part-Dieu station. Family rooms include separate sleeping areas, and the hotel's partnership with local attractions offers discounted tickets.",
        whyGreat: "The train station location seems less central but actually makes exploring Lyon and day trips incredibly easy. Family rooms are well-designed with privacy for parents, and staff are experienced with international families."
      },
      {
        name: "Hôtel Bayard Bellecour",
        priceRange: "$$",
        description: "Boutique hotel in the heart of Presqu'île offering connecting rooms for families. Walking distance to both the Rhône and Saône rivers, plus Bellecour Square's carousel.",
        whyGreat: "Prime location for families who want to walk everywhere. The connecting rooms give older kids independence while keeping everyone close, and Bellecour Square's twice-weekly market is perfect for picnic supplies."
      },
      {
        name: "MOB Hotel Lyon Confluence",
        priceRange: "$",
        description: "Design-forward budget hotel in the modern Confluence district. Family rooms feature bunk beds and contemporary décor, while the ground-floor café serves excellent coffee.",
        whyGreat: "It feels like a much more expensive hotel for budget prices. The Confluence location puts you near the museum and aquarium, and the informal vibe means kids can be themselves without formal hotel stuffiness."
      },
      {
        name: "Collège Hôtel Lyon",
        priceRange: "$$",
        description: "Unique boutique hotel designed around a school theme (each room named after a famous person). Family rooms are creatively designed, and the central Vieux Lyon location is ideal for exploring the old town.",
        whyGreat: "Kids love the school-themed décor, the location in Vieux Lyon puts you in the heart of the historic district, and the rooms are surprisingly spacious despite the boutique size. Breakfast includes homemade pastries."
      }
    ],
    
    practicalTips: `
      <p><strong>Best Time to Visit:</strong> Late spring (May-June) and early fall (September-October) offer pleasant weather and fewer crowds. Summer can be hot, but Lyon empties out in August when locals vacation elsewhere.</p>
      <p><strong>Getting Around:</strong> The TCL metro, tram, and bus network is excellent. Buy a 24-hour family pass for unlimited travel. Most major attractions are within metro zones 1-2.</p>
      <p><strong>Budget Considerations:</strong> Expect to pay €80-120/night for budget family hotels, €120-180 for mid-range, and €180+ for upscale properties. Booking connecting rooms is often cheaper than family suites.</p>
      <p><strong>Dining with Kids:</strong> Lyon's bouchons (traditional restaurants) are surprisingly kid-friendly at lunch. Many hotels offer discounted breakfast for children, which is worth paying for given French breakfast prices.</p>
      <p><strong>Must-Have Apps:</strong> Download TCL Easy for public transport, Google Maps for walking navigation, and The Fork for restaurant reservations.</p>
    `,
    
    faq: [
      {
        question: "Is Lyon better than Paris for families with young children?",
        answer: "Yes, for many families. Lyon offers similar cultural attractions and French atmosphere without Paris's overwhelming crowds and higher prices. The city is more walkable, locals are friendlier to families, and you'll have a more authentic experience. That said, Paris has more iconic landmarks if that's your priority."
      },
      {
        question: "Do I need to speak French to stay in Lyon with kids?",
        answer: "Not necessarily, but a few basic phrases help. Most hotels catering to families have English-speaking staff, and younger restaurant workers often speak English. Download Google Translate and learn 'bonjour,' 's'il vous plaît,' and 'merci'—locals appreciate the effort."
      },
      {
        question: "What's the best area to stay in Lyon with children?",
        answer: "Presqu'île (between the two rivers) offers the most convenient central location with easy access to attractions. Confluence is great for families who want modern amenities and proximity to museums. Part-Dieu is less charming but extremely practical for train access and day trips."
      },
      {
        question: "Are Lyon hotels equipped with cribs and high chairs?",
        answer: "Most mid-range and upscale hotels provide cribs (lit bébé) on request, usually free of charge. High chairs are less common in rooms but available in hotel restaurants. Always request these items when booking—don't assume they're automatically provided."
      },
      {
        question: "How far in advance should I book family hotels in Lyon?",
        answer: "Book 2-3 months ahead for shoulder season (spring/fall) travel, and 4-6 months for summer visits. Family rooms and connecting rooms book up faster than standard rooms, especially at popular hotels like Mama Shelter and Novotel Confluence."
      },
      {
        question: "Is it worth paying extra for connecting rooms versus family rooms?",
        answer: "Connecting rooms give older kids independence and parents privacy, making them worth the extra cost (usually €20-40 more per night). For families with very young children, a single family room with proper space is usually sufficient and more budget-friendly."
      },
      {
        question: "What kid-friendly attractions are near most Lyon hotels?",
        answer: "The Confluence Museum, Parc de la Tête d'Or (France's largest urban park with a free zoo), Vieux Lyon's traboules (hidden passageways), and the Fourvière Basilica funicular are all accessible from central hotels. The aquarium near Confluence is excellent for rainy days."
      },
      {
        question: "Do Lyon hotels include breakfast in the room rate?",
        answer: "It varies. Budget hotels rarely include breakfast, mid-range hotels sometimes offer it as an optional add-on, and upscale hotels often include it. French hotel breakfasts are expensive (€15-25 per adult), so check if it's included before booking—buying pastries at a local bakery is much cheaper."
      },
      {
        question: "Is Lyon safe for families traveling with children?",
        answer: "Yes, Lyon is very safe. The main concern is pickpockets in tourist areas like Vieux Lyon and around Bellecour Square—keep valuables secure. The metro is safe even at night, though families with young children typically aren't out late anyway."
      },
      {
        question: "Can I easily take day trips from Lyon with kids?",
        answer: "Absolutely. Lyon's Part-Dieu station connects to Annecy (1.5 hours), Beaune wine region (1.5 hours), and even Geneva (2 hours). The train system is family-friendly, and booking ahead gets you significant discounts on TGV tickets."
      }
    ],
    
    finalVerdict: `
      <p><strong>Bottom Line:</strong> Lyon punches above its weight as a family destination, offering the cultural richness and gastronomic excellence France is known for without the tourist chaos of Paris. The city's hotel scene has matured beautifully, with properties ranging from budget-conscious options to luxury stays all understanding the needs of traveling families.</p>
      <p>Whether you choose the historic elegance of Hôtel Carlton, the trendy vibes of Mama Shelter, or the practical budget-friendliness of Hôtel du Simplon, you're setting your family up for an authentic French experience that will create lasting memories. The compact city center means most hotels put you within walking distance or a short metro ride from major attractions, while the genuine French atmosphere—locals speaking French in cafés, markets selling regional products—provides cultural immersion that theme-park destinations simply can't match.</p>
      <p>For families willing to venture beyond Paris, Lyon delivers an exceptional combination of accessibility, affordability, and authentic French culture. Book your accommodation 2-3 months in advance, prioritize hotels near metro stations for easy exploration, and prepare for a family trip that rivals any European capital.</p>
    `
  }

  return <TravelGuidePage content={content} />
}
