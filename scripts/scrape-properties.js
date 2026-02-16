#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

// Destinations from our generation
const destinations = [
  { city: 'Amsterdam', country: 'Netherlands', booking_slug: 'amsterdam' },
  { city: 'Athens', country: 'Greece', booking_slug: 'athens' },
  { city: 'Barcelona', country: 'Spain', booking_slug: 'barcelona' },
  { city: 'Berlin', country: 'Germany', booking_slug: 'berlin' },
  { city: 'Brussels', country: 'Belgium', booking_slug: 'brussels' },
  { city: 'Budapest', country: 'Hungary', booking_slug: 'budapest' },
  { city: 'Copenhagen', country: 'Denmark', booking_slug: 'copenhagen' },
  { city: 'Dublin', country: 'Ireland', booking_slug: 'dublin' },
  { city: 'Edinburgh', country: 'UK', booking_slug: 'edinburgh' },
  { city: 'Florence', country: 'Italy', booking_slug: 'florence' },
  { city: 'Lisbon', country: 'Portugal', booking_slug: 'lisbon' },
  { city: 'London', country: 'UK', booking_slug: 'london' },
  { city: 'Lyon', country: 'France', booking_slug: 'lyon' },
  { city: 'Madrid', country: 'Spain', booking_slug: 'madrid' },
  { city: 'Paris', country: 'France', booking_slug: 'paris' },
  { city: 'Porto', country: 'Portugal', booking_slug: 'porto' },
  { city: 'Prague', country: 'Czech Republic', booking_slug: 'prague' },
  { city: 'Rome', country: 'Italy', booking_slug: 'rome' },
  { city: 'Venice', country: 'Italy', booking_slug: 'venice' },
  { city: 'Vienna', country: 'Austria', booking_slug: 'vienna' },
  { city: 'Milan', country: 'Italy', booking_slug: 'milan' },
  { city: 'Munich', country: 'Germany', booking_slug: 'munich' },
  { city: 'Nice', country: 'France', booking_slug: 'nice' },
  { city: 'Seville', country: 'Spain', booking_slug: 'seville' },
  { city: 'Valencia', country: 'Spain', booking_slug: 'valencia' },
  { city: 'Krakow', country: 'Poland', booking_slug: 'krakow' },
  { city: 'Warsaw', country: 'Poland', booking_slug: 'warsaw' },
  { city: 'Stockholm', country: 'Sweden', booking_slug: 'stockholm' },
  { city: 'Oslo', country: 'Norway', booking_slug: 'oslo' },
  { city: 'Helsinki', country: 'Finland', booking_slug: 'helsinki' },
  { city: 'Reykjavik', country: 'Iceland', booking_slug: 'reykjavik' },
  { city: 'Dubrovnik', country: 'Croatia', booking_slug: 'dubrovnik' },
  { city: 'Split', country: 'Croatia', booking_slug: 'split' },
  { city: 'Santorini', country: 'Greece', booking_slug: 'santorini' },
  { city: 'Mykonos', country: 'Greece', booking_slug: 'mykonos' },
  { city: 'Manchester', country: 'UK', booking_slug: 'manchester' },
  { city: 'Liverpool', country: 'UK', booking_slug: 'liverpool' },
  { city: 'Bath', country: 'UK', booking_slug: 'bath' },
  { city: 'Oxford', country: 'UK', booking_slug: 'oxford' },
  { city: 'Cambridge', country: 'UK', booking_slug: 'cambridge' },
  { city: 'New York', country: 'USA', booking_slug: 'new-york' },
  { city: 'Los Angeles', country: 'USA', booking_slug: 'los-angeles' },
  { city: 'Miami', country: 'USA', booking_slug: 'miami' },
  { city: 'Tokyo', country: 'Japan', booking_slug: 'tokyo' },
  { city: 'Bangkok', country: 'Thailand', booking_slug: 'bangkok' },
  { city: 'Bali', country: 'Indonesia', booking_slug: 'bali' },
  { city: 'Dubai', country: 'UAE', booking_slug: 'dubai' },
  { city: 'Sydney', country: 'Australia', booking_slug: 'sydney' },
  { city: 'Cape Town', country: 'South Africa', booking_slug: 'cape-town' },
  { city: 'Marrakech', country: 'Morocco', booking_slug: 'marrakech' },
];

// Real properties data (curated from research)
// This is seed data - we'll enhance with AI
const propertyData = {
  paris: {
    neighborhoods: ['Le Marais', 'Saint-Germain-des-Prés', 'Montmartre', 'Latin Quarter', 'Champs-Élysées', 'Bastille', 'Opera'],
    hotels: {
      luxury: [
        { name: 'Hôtel Plaza Athénée', neighborhood: 'Champs-Élysées', priceRange: '€800-2000', rating: 9.4, highlight: 'Iconic Dior suite with Eiffel views' },
        { name: 'Le Bristol Paris', neighborhood: 'Faubourg Saint-Honoré', priceRange: '€900-2500', rating: 9.5, highlight: 'Rooftop pool and 3-Michelin-star restaurant' },
        { name: 'Hôtel de Crillon', neighborhood: 'Place de la Concorde', priceRange: '€850-2200', rating: 9.3, highlight: '18th-century palace with Karl Lagerfeld suite' },
      ],
      boutique: [
        { name: 'Hôtel Particulier Montmartre', neighborhood: 'Montmartre', priceRange: '€350-600', rating: 9.1, highlight: 'Secret garden oasis in artistic quarter' },
        { name: 'Pavillon de la Reine', neighborhood: 'Le Marais', priceRange: '€300-550', rating: 9.0, highlight: 'Hidden courtyard on Place des Vosges' },
        { name: 'Hôtel Providence', neighborhood: 'République', priceRange: '€180-320', rating: 8.8, highlight: 'Rock-and-roll chic with cocktail bar' },
      ],
      budget: [
        { name: 'Generator Paris', neighborhood: 'Canal Saint-Martin', priceRange: '€25-80', rating: 8.2, highlight: 'Design hostel with rooftop bar' },
        { name: 'Les Piaules', neighborhood: 'Belleville', priceRange: '€30-90', rating: 8.5, highlight: 'Hip hostel with panoramic rooftop' },
        { name: 'St Christopher\'s Canal', neighborhood: 'La Villette', priceRange: '€20-70', rating: 7.8, highlight: 'Canal-side location, lively bar' },
      ]
    },
    apartments: {
      couples: [
        { name: 'Romantic Marais Studio', neighborhood: 'Le Marais', priceRange: '€120-200', highlight: 'Exposed beams, steps from Place des Vosges' },
        { name: 'Eiffel View Apartment', neighborhood: '7th Arrondissement', priceRange: '€180-300', highlight: 'Private balcony with Tower views' },
        { name: 'Saint-Germain Hideaway', neighborhood: 'Saint-Germain', priceRange: '€150-250', highlight: 'Above historic café, literary charm' },
      ]
    },
    localTips: [
      'Skip the tourist cafés on Champs-Élysées - locals head to Canal Saint-Martin',
      'Metro Line 6 offers free Eiffel Tower views above ground',
      'Sunday mornings: Marché d\'Aligre for authentic Parisian market experience',
      'Best croissants: Du Pain et des Idées in the 10th',
    ]
  },
  tokyo: {
    neighborhoods: ['Shibuya', 'Shinjuku', 'Ginza', 'Asakusa', 'Roppongi', 'Harajuku', 'Akihabara'],
    hotels: {
      luxury: [
        { name: 'Aman Tokyo', neighborhood: 'Otemachi', priceRange: '¥100,000-250,000', rating: 9.6, highlight: 'Minimalist luxury with Imperial Palace views' },
        { name: 'Park Hyatt Tokyo', neighborhood: 'Shinjuku', priceRange: '¥60,000-150,000', rating: 9.3, highlight: 'Lost in Translation hotel, 52nd floor pool' },
        { name: 'The Peninsula Tokyo', neighborhood: 'Ginza', priceRange: '¥70,000-180,000', rating: 9.4, highlight: 'Tech-forward rooms, Michelin dining' },
      ],
      boutique: [
        { name: 'Hoshinoya Tokyo', neighborhood: 'Otemachi', priceRange: '¥50,000-100,000', rating: 9.2, highlight: 'Traditional ryokan experience in skyscraper' },
        { name: 'Trunk Hotel', neighborhood: 'Shibuya', priceRange: '¥35,000-70,000', rating: 8.9, highlight: 'Socially conscious design hotel' },
        { name: 'BnA Alter Museum', neighborhood: 'Kyobashi', priceRange: '¥20,000-45,000', rating: 8.7, highlight: 'Sleep inside art installations' },
      ],
      budget: [
        { name: 'Khaosan World Asakusa', neighborhood: 'Asakusa', priceRange: '¥3,000-8,000', rating: 8.4, highlight: 'Near Senso-ji temple, rooftop bar' },
        { name: 'Nui. Hostel', neighborhood: 'Kuramae', priceRange: '¥3,500-9,000', rating: 8.6, highlight: 'Craft coffee, artisan neighborhood' },
        { name: 'Wise Owl Hostels', neighborhood: 'Shibuya', priceRange: '¥4,000-10,000', rating: 8.3, highlight: 'Modern pods near nightlife' },
      ]
    },
    localTips: [
      'Get a Suica card immediately - works everywhere including convenience stores',
      'Best ramen: queue at Fuunji in Shinjuku (tsukemen style)',
      'Avoid taxis - trains run like clockwork until midnight',
      'Don\'t tip - it\'s considered rude',
    ]
  },
  barcelona: {
    neighborhoods: ['Gothic Quarter', 'El Born', 'Gràcia', 'Eixample', 'Barceloneta', 'Poble Sec', 'Sant Antoni'],
    hotels: {
      luxury: [
        { name: 'Hotel Arts Barcelona', neighborhood: 'Barceloneta', priceRange: '€350-800', rating: 9.2, highlight: 'Beachfront tower with Frank Gehry fish sculpture' },
        { name: 'Mandarin Oriental Barcelona', neighborhood: 'Passeig de Gràcia', priceRange: '€400-900', rating: 9.4, highlight: 'Rooftop pool with Gaudí views' },
        { name: 'El Palace Barcelona', neighborhood: 'Eixample', priceRange: '€300-700', rating: 9.1, highlight: 'Historic glamour, Caelis Michelin restaurant' },
      ],
      boutique: [
        { name: 'Hotel Brummell', neighborhood: 'Poble Sec', priceRange: '€150-280', rating: 8.9, highlight: 'Rooftop pool, local neighborhood vibe' },
        { name: 'Casa Camper Barcelona', neighborhood: 'El Raval', priceRange: '€180-320', rating: 8.8, highlight: 'Free 24h snack bar, minimalist design' },
        { name: 'Hotel Neri', neighborhood: 'Gothic Quarter', priceRange: '€250-450', rating: 9.0, highlight: 'Medieval palace with rooftop terrace' },
      ],
      budget: [
        { name: 'Generator Barcelona', neighborhood: 'Gràcia', priceRange: '€20-60', rating: 8.3, highlight: 'Pool and terrace, near Park Güell' },
        { name: 'Casa Gracia', neighborhood: 'Gràcia', priceRange: '€25-80', rating: 8.5, highlight: 'Boutique hostel with cocktail bar' },
        { name: 'TOC Hostel Barcelona', neighborhood: 'Eixample', priceRange: '€18-55', rating: 8.1, highlight: 'Rooftop pool, central location' },
      ]
    },
    localTips: [
      'La Boqueria is touristy - try Mercat de Sant Antoni instead',
      'Dinner starts at 9pm, earlier marks you as a tourist',
      'Skip Barceloneta beach on weekends - head to Bogatell',
      'Vermouth hour (vermut) at 1pm is a sacred local tradition',
    ]
  }
};

// Generate enhanced data for all destinations
async function generateDestinationData() {
  const dataDir = path.join(__dirname, '..', 'data', 'destinations');
  fs.mkdirSync(dataDir, { recursive: true });
  
  for (const dest of destinations) {
    const slug = dest.city.toLowerCase().replace(/\s+/g, '-');
    const existingData = propertyData[slug];
    
    const data = {
      city: dest.city,
      country: dest.country,
      slug: slug,
      neighborhoods: existingData?.neighborhoods || generateNeighborhoods(dest),
      hotels: existingData?.hotels || generatePlaceholderHotels(dest),
      apartments: existingData?.apartments || generatePlaceholderApartments(dest),
      localTips: existingData?.localTips || generatePlaceholderTips(dest),
      needsEnhancement: !existingData,
      lastUpdated: new Date().toISOString()
    };
    
    fs.writeFileSync(
      path.join(dataDir, `${slug}.json`),
      JSON.stringify(data, null, 2)
    );
    console.log(`Generated: ${slug}.json`);
  }
  
  console.log(`\nGenerated ${destinations.length} destination files`);
  console.log(`With real data: ${Object.keys(propertyData).length}`);
  console.log(`Needs AI enhancement: ${destinations.length - Object.keys(propertyData).length}`);
}

function generateNeighborhoods(dest) {
  // Generic neighborhood structure - will be enhanced by AI
  return ['City Center', 'Old Town', 'Waterfront', 'Arts District', 'Business District'];
}

function generatePlaceholderHotels(dest) {
  return {
    luxury: [
      { name: `Grand Hotel ${dest.city}`, neighborhood: 'City Center', priceRange: '€200-500', rating: 9.0, highlight: 'NEEDS_ENHANCEMENT' },
    ],
    boutique: [
      { name: `Boutique ${dest.city}`, neighborhood: 'Old Town', priceRange: '€100-200', rating: 8.5, highlight: 'NEEDS_ENHANCEMENT' },
    ],
    budget: [
      { name: `${dest.city} Central Hostel`, neighborhood: 'City Center', priceRange: '€20-50', rating: 8.0, highlight: 'NEEDS_ENHANCEMENT' },
    ]
  };
}

function generatePlaceholderApartments(dest) {
  return {
    couples: [
      { name: `Romantic ${dest.city} Apartment`, neighborhood: 'Old Town', priceRange: '€80-150', highlight: 'NEEDS_ENHANCEMENT' },
    ]
  };
}

function generatePlaceholderTips(dest) {
  return ['NEEDS_ENHANCEMENT - Local tips will be added'];
}

generateDestinationData();
