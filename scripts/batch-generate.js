#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

// 50 destinations
const destinations = [
  // Major EU cities (20)
  { city: 'Amsterdam', country: 'Netherlands' },
  { city: 'Athens', country: 'Greece' },
  { city: 'Barcelona', country: 'Spain' },
  { city: 'Berlin', country: 'Germany' },
  { city: 'Brussels', country: 'Belgium' },
  { city: 'Budapest', country: 'Hungary' },
  { city: 'Copenhagen', country: 'Denmark' },
  { city: 'Dublin', country: 'Ireland' },
  { city: 'Edinburgh', country: 'UK' },
  { city: 'Florence', country: 'Italy' },
  { city: 'Lisbon', country: 'Portugal' },
  { city: 'London', country: 'UK' },
  { city: 'Lyon', country: 'France' },
  { city: 'Madrid', country: 'Spain' },
  { city: 'Paris', country: 'France' },
  { city: 'Porto', country: 'Portugal' },
  { city: 'Prague', country: 'Czech Republic' },
  { city: 'Rome', country: 'Italy' },
  { city: 'Venice', country: 'Italy' },
  { city: 'Vienna', country: 'Austria' },
  // More EU (15)
  { city: 'Milan', country: 'Italy' },
  { city: 'Munich', country: 'Germany' },
  { city: 'Nice', country: 'France' },
  { city: 'Seville', country: 'Spain' },
  { city: 'Valencia', country: 'Spain' },
  { city: 'Krakow', country: 'Poland' },
  { city: 'Warsaw', country: 'Poland' },
  { city: 'Stockholm', country: 'Sweden' },
  { city: 'Oslo', country: 'Norway' },
  { city: 'Helsinki', country: 'Finland' },
  { city: 'Reykjavik', country: 'Iceland' },
  { city: 'Dubrovnik', country: 'Croatia' },
  { city: 'Split', country: 'Croatia' },
  { city: 'Santorini', country: 'Greece' },
  { city: 'Mykonos', country: 'Greece' },
  // UK cities (5)
  { city: 'Manchester', country: 'UK' },
  { city: 'Liverpool', country: 'UK' },
  { city: 'Bath', country: 'UK' },
  { city: 'Oxford', country: 'UK' },
  { city: 'Cambridge', country: 'UK' },
  // Worldwide popular (10)
  { city: 'New York', country: 'USA' },
  { city: 'Los Angeles', country: 'USA' },
  { city: 'Miami', country: 'USA' },
  { city: 'Tokyo', country: 'Japan' },
  { city: 'Bangkok', country: 'Thailand' },
  { city: 'Bali', country: 'Indonesia' },
  { city: 'Dubai', country: 'UAE' },
  { city: 'Sydney', country: 'Australia' },
  { city: 'Cape Town', country: 'South Africa' },
  { city: 'Marrakech', country: 'Morocco' },
];

const types = [
  { type: 'apartments', label: 'Apartments' },
  { type: 'hotels', label: 'Hotels' },
  { type: 'hostels', label: 'Hostels' },
  { type: 'bnbs', label: 'B&Bs' },
  { type: 'villas', label: 'Villas' },
  { type: 'boutique-hotels', label: 'Boutique Hotels' },
];

const audiences = [
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

function slugify(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
}

function generateContent(dest, type, aud) {
  const { city, country } = dest;
  const { label: typeLabel } = type;
  const { label: audLabel } = aud;
  
  return {
    intro: `${city} is one of ${country}'s most captivating destinations, offering a perfect blend of culture, history, and modern amenities. For ${audLabel.toLowerCase()}, finding the right ${typeLabel.toLowerCase()} can make all the difference in your travel experience. Whether you're drawn to the historic charm of the old town or the vibrant energy of contemporary neighborhoods, ${city} has something special waiting for you. The city's diverse accommodation options cater to every preference, from centrally located properties near major attractions to peaceful retreats in residential areas. Local hospitality in ${city} is renowned for its warmth and attention to detail, ensuring that every guest feels welcomed and valued.`,
    
    whyChoose: [
      `${typeLabel} in ${city} offer an authentic local experience that larger chain accommodations simply cannot match. You'll find yourself immersed in the neighborhood's daily rhythm, from morning markets to evening gatherings at local cafés.`,
      `For ${audLabel.toLowerCase()}, ${city}'s ${typeLabel.toLowerCase()} provide the perfect balance of comfort and convenience. Many properties are strategically located near public transport, making it easy to explore the city's many attractions.`,
      `The value proposition of ${typeLabel.toLowerCase()} in ${city} is exceptional. You'll often get more space, better amenities, and a more personalized experience compared to standard hotel rooms at similar price points.`
    ],
    
    topPicks: [
      {
        name: `The ${city} ${typeLabel.slice(0, -1)} House`,
        description: `Located in the heart of ${city}, this charming property offers stunning views and easy access to major attractions. The hosts are known for their exceptional hospitality and local knowledge.`,
        highlight: `Rooftop terrace with panoramic city views`
      },
      {
        name: `${city} Central ${typeLabel.slice(0, -1)}`,
        description: `A beautifully restored property combining historic character with modern comforts. Perfect for ${audLabel.toLowerCase()} who appreciate attention to detail and prime locations.`,
        highlight: `Walking distance to top restaurants and museums`
      },
      {
        name: `The Garden ${typeLabel.slice(0, -1)} ${city}`,
        description: `Set in a quiet residential area, this property offers a peaceful retreat while remaining well-connected to the city center. The private garden is perfect for relaxation after a day of exploration.`,
        highlight: `Private garden oasis in the city`
      }
    ],
    
    tips: `When booking ${typeLabel.toLowerCase()} in ${city}, timing is everything. The shoulder seasons (spring and autumn) offer the best combination of pleasant weather and availability. For ${audLabel.toLowerCase()}, we recommend booking at least 2-3 months in advance for peak periods. Consider neighborhoods slightly outside the tourist center for better value and a more authentic experience. Public transport in ${city} is excellent, so don't feel you need to stay right in the middle of everything. Check if your accommodation offers airport transfers or local experience recommendations—many hosts in ${city} are happy to share insider tips that you won't find in guidebooks.`,
    
    conclusion: `${city} awaits with open arms, and choosing the right ${typeLabel.toLowerCase()} will set the foundation for an unforgettable trip. For ${audLabel.toLowerCase()}, the options we've highlighted offer the perfect combination of location, comfort, and authentic local character. Whether this is your first visit or your tenth, there's always something new to discover in this remarkable city. Book with confidence, pack your sense of adventure, and prepare for memories that will last a lifetime. ${city} is ready to welcome you home.`
  };
}

function generatePage(dest, type, aud) {
  const slug = `best-${type.type}-${aud.audience}-${slugify(dest.city)}`;
  const content = generateContent(dest, type, aud);
  
  return `import AccommodationGuide from '@/components/AccommodationGuide'

export const metadata = {
  title: 'Best ${type.label} for ${aud.label} in ${dest.city} - BestTrips.org',
  description: 'Discover the best ${type.label.toLowerCase()} for ${aud.label.toLowerCase()} in ${dest.city}, ${dest.country}. Expert recommendations, local tips, and top picks for your perfect stay.'
}

const guide = {
  destination: "${dest.city}",
  country: "${dest.country}",
  accommodationType: "${type.label}",
  audience: "${aud.label}",
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
const appDir = path.join(__dirname, '..', 'app');
const args = process.argv.slice(2);
const batchSize = parseInt(args[0]) || 500;
const startFrom = parseInt(args[1]) || 0;

// Get existing pages
const existing = new Set();
try {
  fs.readdirSync(appDir).forEach(dir => {
    if (dir.startsWith('best-')) existing.add(dir);
  });
} catch (e) {}

// Generate all combinations
const combinations = [];
for (const dest of destinations) {
  for (const type of types) {
    for (const aud of audiences) {
      const slug = `best-${type.type}-${aud.audience}-${slugify(dest.city)}`;
      if (!existing.has(slug)) {
        combinations.push({ dest, type, aud, slug });
      }
    }
  }
}

console.log(`Total possible: ${destinations.length * types.length * audiences.length}`);
console.log(`Already exist: ${existing.size}`);
console.log(`Remaining: ${combinations.length}`);
console.log(`Generating batch of ${batchSize} starting from ${startFrom}...`);

const batch = combinations.slice(startFrom, startFrom + batchSize);
let created = 0;

for (const { dest, type, aud, slug } of batch) {
  const dir = path.join(appDir, slug);
  const file = path.join(dir, 'page.js');
  
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(file, generatePage(dest, type, aud));
  created++;
}

console.log(`Created ${created} pages`);
console.log(`Next batch: node scripts/batch-generate.js ${batchSize} ${startFrom + batchSize}`);
