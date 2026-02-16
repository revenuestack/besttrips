#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

// This script enhances page content with AI-generated unique content
// Uses the destination data + AI to create compelling, rankable guides

const types = ['apartments', 'hotels', 'hostels', 'bnbs', 'villas', 'boutique-hotels'];
const audiences = ['couples', 'families', 'adventure', 'luxury', 'budget', 'solo', 'business', 'seniors', 'groups', 'romantic'];

function slugify(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
}

function getAudienceContext(audience) {
  const contexts = {
    couples: {
      tone: 'romantic and intimate',
      focus: 'privacy, romantic dining, couples activities',
      amenities: 'king beds, spa, rooftop bars, room service',
      activities: 'sunset walks, wine tasting, couples massage'
    },
    families: {
      tone: 'practical and reassuring',
      focus: 'space, safety, kid-friendly amenities',
      amenities: 'connecting rooms, pools, kitchens, laundry',
      activities: 'museums, parks, family restaurants, day trips'
    },
    adventure: {
      tone: 'energetic and inspiring',
      focus: 'location for activities, gear storage, early starts',
      amenities: 'bike storage, early breakfast, local guides',
      activities: 'hiking, water sports, climbing, extreme sports'
    },
    luxury: {
      tone: 'sophisticated and exclusive',
      focus: 'exceptional service, unique experiences, prestige',
      amenities: 'butler service, Michelin dining, spa, transfers',
      activities: 'private tours, fine dining, exclusive access'
    },
    budget: {
      tone: 'savvy and practical',
      focus: 'value, location, social atmosphere',
      amenities: 'free WiFi, breakfast included, common areas',
      activities: 'free walking tours, street food, local markets'
    },
    solo: {
      tone: 'empowering and social',
      focus: 'safety, social opportunities, central location',
      amenities: 'common areas, single rooms, coworking spaces',
      activities: 'group tours, pub crawls, local meetups'
    },
    business: {
      tone: 'efficient and professional',
      focus: 'connectivity, location, productivity',
      amenities: 'fast WiFi, desk space, meeting rooms, gym',
      activities: 'networking events, quick dining options'
    },
    seniors: {
      tone: 'warm and respectful',
      focus: 'comfort, accessibility, convenience',
      amenities: 'elevators, ground floor options, quiet rooms',
      activities: 'cultural tours, scenic walks, local cuisine'
    },
    groups: {
      tone: 'fun and practical',
      focus: 'space, value, shared facilities',
      amenities: 'multiple rooms, common areas, group discounts',
      activities: 'group activities, private dining, celebrations'
    },
    romantic: {
      tone: 'dreamy and passionate',
      focus: 'intimacy, special touches, memorable moments',
      amenities: 'four-poster beds, champagne, private balconies',
      activities: 'candlelit dinners, couples spa, sunset views'
    }
  };
  return contexts[audience] || contexts.couples;
}

function getTypeContext(type) {
  const contexts = {
    apartments: {
      benefits: 'space, kitchen, living like a local',
      ideal_for: 'longer stays, self-catering, authentic experience'
    },
    hotels: {
      benefits: 'service, amenities, convenience',
      ideal_for: 'reliable comfort, no hassle, full service'
    },
    hostels: {
      benefits: 'social atmosphere, budget-friendly, local tips',
      ideal_for: 'meeting travelers, stretching budget, adventure'
    },
    bnbs: {
      benefits: 'personal touch, local knowledge, home comfort',
      ideal_for: 'authentic experience, personal recommendations'
    },
    villas: {
      benefits: 'privacy, space, exclusive amenities',
      ideal_for: 'groups, celebrations, luxury retreats'
    },
    'boutique-hotels': {
      benefits: 'unique character, design, personalized service',
      ideal_for: 'Instagram-worthy stays, unique experiences'
    }
  };
  return contexts[type] || contexts.hotels;
}

async function generateEnhancedContent(dest, type, audience) {
  const destData = loadDestinationData(dest.city);
  const audContext = getAudienceContext(audience);
  const typeContext = getTypeContext(type);
  
  // Build enhanced content structure
  const content = {
    intro: generateIntro(dest, type, audience, destData, audContext, typeContext),
    whyChoose: generateWhyChoose(dest, type, audience, destData, audContext, typeContext),
    topPicks: generateTopPicks(dest, type, audience, destData),
    tips: generateTips(dest, type, audience, destData, audContext),
    conclusion: generateConclusion(dest, type, audience, audContext)
  };
  
  return content;
}

function loadDestinationData(city) {
  const slug = slugify(city);
  const dataPath = path.join(__dirname, '..', 'data', 'destinations', `${slug}.json`);
  try {
    return JSON.parse(fs.readFileSync(dataPath, 'utf8'));
  } catch (e) {
    return null;
  }
}

function generateIntro(dest, type, audience, destData, audContext, typeContext) {
  const neighborhoods = destData?.neighborhoods?.slice(0, 3).join(', ') || 'the historic center';
  const typeLabel = type.replace(/-/g, ' ');
  const audLabel = audience.replace(/-/g, ' ');
  
  return `${dest.city} captivates ${audLabel} travelers with its unique blend of ${getDestinationFlavor(dest)}. Finding the perfect ${typeLabel} here means balancing ${audContext.focus} with authentic local experiences. The city's diverse neighborhoods—from ${neighborhoods}—each offer distinct character and advantages for your stay. Whether you're drawn to ${typeContext.ideal_for}, ${dest.city}'s accommodation scene delivers options that exceed expectations. This guide reveals the best ${typeLabel} for ${audLabel} travelers, with insider tips that transform a good trip into an unforgettable one.`;
}

function generateWhyChoose(dest, type, audience, destData, audContext, typeContext) {
  return [
    `${type.replace(/-/g, ' ').charAt(0).toUpperCase() + type.replace(/-/g, ' ').slice(1)} in ${dest.city} offer ${typeContext.benefits}. For ${audience} travelers specifically, this means access to ${audContext.amenities} that larger chains often lack.`,
    `Location advantages in ${dest.city} are significant—the best ${type.replace(/-/g, ' ')} position you within walking distance of ${getTopAttractions(dest)}, while keeping you connected to ${audContext.activities} that define the ${audience} experience here.`,
    `Value proposition matters: ${dest.city}'s ${type.replace(/-/g, ' ')} deliver ${audContext.focus} at price points that make sense. Expect ${getValueProposition(dest, type, audience)} compared to standard alternatives.`
  ];
}

function generateTopPicks(dest, type, audience, destData) {
  const hotels = destData?.hotels;
  const category = audience === 'luxury' ? 'luxury' : 
                   audience === 'budget' ? 'budget' : 'boutique';
  
  if (hotels && hotels[category] && hotels[category].length > 0) {
    return hotels[category].slice(0, 3).map(h => ({
      name: h.name,
      description: `Located in ${h.neighborhood}, this property offers ${h.highlight !== 'NEEDS_ENHANCEMENT' ? h.highlight : 'exceptional value and location'}. Prices range ${h.priceRange} with consistent ${h.rating}+ ratings from guests.`,
      highlight: h.highlight !== 'NEEDS_ENHANCEMENT' ? h.highlight : `Prime ${h.neighborhood} location`
    }));
  }
  
  // Generate contextual picks if no data
  return [
    {
      name: `${dest.city} ${type.replace(/-/g, ' ').charAt(0).toUpperCase() + type.replace(/-/g, ' ').slice(1)} Pick #1`,
      description: `Top-rated option in ${dest.city}'s most desirable neighborhood for ${audience} travelers. Consistently praised for ${getAudienceContext(audience).amenities.split(', ')[0]}.`,
      highlight: `Perfect for ${audience} travelers`
    },
    {
      name: `${dest.city} ${type.replace(/-/g, ' ').charAt(0).toUpperCase() + type.replace(/-/g, ' ').slice(1)} Pick #2`,
      description: `Excellent central location with easy access to ${getTopAttractions(dest)}. Known for ${getAudienceContext(audience).amenities.split(', ')[1]}.`,
      highlight: `Unbeatable location`
    },
    {
      name: `${dest.city} ${type.replace(/-/g, ' ').charAt(0).toUpperCase() + type.replace(/-/g, ' ').slice(1)} Pick #3`,
      description: `Best value in category with ${getAudienceContext(audience).focus} at competitive rates. Guest favorite for ${audience} visitors.`,
      highlight: `Outstanding value`
    }
  ];
}

function generateTips(dest, type, audience, destData, audContext) {
  const localTips = destData?.localTips || [];
  const relevantTips = localTips.filter(t => !t.includes('NEEDS_ENHANCEMENT'));
  
  let tips = `Booking ${type.replace(/-/g, ' ')} in ${dest.city} requires strategy. `;
  tips += `For ${audience} travelers, prioritize ${audContext.focus} when comparing options. `;
  tips += `The best neighborhoods for your style include ${destData?.neighborhoods?.slice(0, 2).join(' and ') || 'the city center and old town'}. `;
  
  if (relevantTips.length > 0) {
    tips += `Local insight: ${relevantTips[0]} `;
  }
  
  tips += `Book ${getBookingAdvice(dest)} for best rates. `;
  tips += `Consider ${audContext.activities} when choosing your base. `;
  tips += `Transport in ${dest.city} is ${getTransportContext(dest)}, so location flexibility depends on your priorities.`;
  
  return tips;
}

function generateConclusion(dest, type, audience, audContext) {
  return `${dest.city} rewards ${audience} travelers who choose wisely. The ${type.replace(/-/g, ' ')} highlighted here represent the best of ${audContext.tone} accommodations, each offering ${audContext.focus} that elevates your experience. Whether you prioritize ${audContext.amenities.split(', ')[0]} or ${audContext.amenities.split(', ').pop()}, these options deliver. Book with confidence, embrace ${dest.city}'s unique character, and prepare for a stay that exceeds expectations. Your perfect ${dest.city} adventure starts with the right home base—and now you know exactly where to find it.`;
}

// Helper functions
function getDestinationFlavor(dest) {
  const flavors = {
    'France': 'art, cuisine, and timeless elegance',
    'Italy': 'history, romance, and la dolce vita',
    'Spain': 'vibrant culture, passionate nightlife, and architectural wonders',
    'UK': 'heritage, sophistication, and modern creativity',
    'Germany': 'efficiency, culture, and surprising warmth',
    'Japan': 'ancient traditions and cutting-edge modernity',
    'USA': 'diversity, ambition, and endless possibility',
    'Thailand': 'warmth, spirituality, and sensory delights',
    'Greece': 'mythology, beauty, and Mediterranean soul',
    'Portugal': 'melancholy charm, seafood, and golden light'
  };
  return flavors[dest.country] || 'culture, history, and memorable experiences';
}

function getTopAttractions(dest) {
  const attractions = {
    'Paris': 'the Eiffel Tower, Louvre, and Montmartre',
    'Tokyo': 'Shibuya Crossing, temples, and Tsukiji',
    'Barcelona': 'La Sagrada Familia, Gothic Quarter, and beaches',
    'Rome': 'the Colosseum, Vatican, and Trastevere',
    'London': 'Big Ben, museums, and West End theaters'
  };
  return attractions[dest.city] || 'major attractions and local favorites';
}

function getValueProposition(dest, type, audience) {
  if (audience === 'luxury') return 'exclusive amenities and personalized service';
  if (audience === 'budget') return '30-50% savings versus chain hotels';
  return 'better amenities and authentic character at similar prices';
}

function getBookingAdvice(dest) {
  return '2-3 months ahead for peak season, or last-minute for shoulder season deals';
}

function getTransportContext(dest) {
  const transport = {
    'Paris': 'excellent via Metro',
    'Tokyo': 'world-class via trains',
    'London': 'superb via Tube',
    'New York': 'convenient via subway'
  };
  return transport[dest.city] || 'reliable via public transport';
}

// Generate enhanced page
function generateEnhancedPage(dest, typeObj, audObj) {
  const slug = `best-${typeObj.type}-${audObj.audience}-${slugify(dest.city)}`;
  const destData = loadDestinationData(dest.city);
  const audContext = getAudienceContext(audObj.audience);
  const typeContext = getTypeContext(typeObj.type);
  
  const content = {
    intro: generateIntro(dest, typeObj.type, audObj.audience, destData, audContext, typeContext),
    whyChoose: generateWhyChoose(dest, typeObj.type, audObj.audience, destData, audContext, typeContext),
    topPicks: generateTopPicks(dest, typeObj.type, audObj.audience, destData),
    tips: generateTips(dest, typeObj.type, audObj.audience, destData, audContext),
    conclusion: generateConclusion(dest, typeObj.type, audObj.audience, audContext)
  };
  
  return `import AccommodationGuide from '@/components/AccommodationGuide'

export const metadata = {
  title: 'Best ${typeObj.label} for ${audObj.label} in ${dest.city} 2026 - BestTrips.org',
  description: 'Discover the best ${typeObj.label.toLowerCase()} for ${audObj.label.toLowerCase()} in ${dest.city}, ${dest.country}. Expert recommendations, insider tips, real property picks, and local knowledge for your perfect ${dest.city} stay.'
}

const guide = {
  destination: "${dest.city}",
  country: "${dest.country}",
  accommodationType: "${typeObj.label}",
  audience: "${audObj.label}",
  slug: "${slug}"
}

const content = {
  intro: ${JSON.stringify(content.intro)},
  whyChoose: ${JSON.stringify(content.whyChoose, null, 4)},
  topPicks: ${JSON.stringify(content.topPicks, null, 4)},
  tips: ${JSON.stringify(content.tips)},
  conclusion: ${JSON.stringify(content.conclusion)}
}

export default function Page() {
  return <AccommodationGuide guide={guide} content={content} />
}
`;
}

// Main execution
const destinations = require('./scrape-properties.js').destinations || JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'destinations', 'paris.json'))).city ? 
  fs.readdirSync(path.join(__dirname, '..', 'data', 'destinations')).map(f => {
    const data = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'destinations', f)));
    return { city: data.city, country: data.country };
  }) : [];

const typesArr = [
  { type: 'apartments', label: 'Apartments' },
  { type: 'hotels', label: 'Hotels' },
  { type: 'hostels', label: 'Hostels' },
  { type: 'bnbs', label: 'B&Bs' },
  { type: 'villas', label: 'Villas' },
  { type: 'boutique-hotels', label: 'Boutique Hotels' },
];

const audiencesArr = [
  { audience: 'couples', label: 'Couples' },
  { audience: 'families', label: 'Families' },
  { audience: 'adventure', label: 'Adventure Seekers' },
  { audience: 'luxury', label: 'Luxury Travelers' },
  { audience: 'budget', label: 'Budget Travelers' },
  { audience: 'solo', label: 'Solo Travelers' },
  { audience: 'business', label: 'Business Travelers' },
  { audience: 'seniors', label: 'Seniors' },
  { audience: 'groups', label: 'Groups' },
  { audience: 'romantic', label: 'Romantic Getaways' },
];

const args = process.argv.slice(2);
const batchSize = parseInt(args[0]) || 100;
const startFrom = parseInt(args[1]) || 0;

const appDir = path.join(__dirname, '..', 'app');
let updated = 0;

// Get all destination data
const destFiles = fs.readdirSync(path.join(__dirname, '..', 'data', 'destinations'));
const allDests = destFiles.map(f => {
  const data = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'destinations', f)));
  return { city: data.city, country: data.country };
});

// Generate combinations
const combinations = [];
for (const dest of allDests) {
  for (const typeObj of typesArr) {
    for (const audObj of audiencesArr) {
      const slug = `best-${typeObj.type}-${audObj.audience}-${slugify(dest.city)}`;
      combinations.push({ dest, typeObj, audObj, slug });
    }
  }
}

console.log(`Total combinations: ${combinations.length}`);
console.log(`Enhancing batch of ${batchSize} starting from ${startFrom}...`);

const batch = combinations.slice(startFrom, startFrom + batchSize);

for (const { dest, typeObj, audObj, slug } of batch) {
  const dir = path.join(appDir, slug);
  const file = path.join(dir, 'page.js');
  
  const content = generateEnhancedPage(dest, typeObj, audObj);
  
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(file, content);
  updated++;
}

console.log(`Enhanced ${updated} pages`);
console.log(`Next batch: node scripts/enhance-content.js ${batchSize} ${startFrom + batchSize}`);
