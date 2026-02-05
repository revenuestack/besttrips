#!/usr/bin/env node
/**
 * Build generation queue for thousands of travel guide pages
 * Creates all combinations of destinations × types × audiences
 * 
 * Usage: node scripts/build-queue.js [--limit=100]
 */

const fs = require('fs');
const path = require('path');

// Tier 1 destinations (highest priority)
const tier1Destinations = [
  { name: 'Paris', country: 'France', priority: 100 },
  { name: 'London', country: 'England', priority: 100 },
  { name: 'Barcelona', country: 'Spain', priority: 100 },
  { name: 'Rome', country: 'Italy', priority: 100 },
  { name: 'Amsterdam', country: 'Netherlands', priority: 95 },
  { name: 'Berlin', country: 'Germany', priority: 95 },
  { name: 'Vienna', country: 'Austria', priority: 90 },
  { name: 'Prague', country: 'Czech Republic', priority: 90 },
  { name: 'Lisbon', country: 'Portugal', priority: 90 },
  { name: 'Copenhagen', country: 'Denmark', priority: 85 },
  { name: 'Dublin', country: 'Ireland', priority: 85 },
  { name: 'Edinburgh', country: 'Scotland', priority: 85 },
  { name: 'Budapest', country: 'Hungary', priority: 80 },
  { name: 'Athens', country: 'Greece', priority: 80 },
  { name: 'Madrid', country: 'Spain', priority: 80 },
  { name: 'Lyon', country: 'France', priority: 75 },
  { name: 'Porto', country: 'Portugal', priority: 75 },
  { name: 'Brussels', country: 'Belgium', priority: 70 },
  { name: 'Venice', country: 'Italy', priority: 70 },
  { name: 'Florence', country: 'Italy', priority: 70 },
];

// Accommodation types
const types = [
  { key: 'hotels', name: 'Hotels', priority: 100 },
  { key: 'b-and-bs', name: 'B&Bs', priority: 95 },
  { key: 'apartments', name: 'Apartments', priority: 85 },
  { key: 'hostels', name: 'Hostels', priority: 75 },
  { key: 'resorts', name: 'Resorts', priority: 70 },
  { key: 'villas', name: 'Villas', priority: 65 },
  { key: 'guesthouses', name: 'Guesthouses', priority: 60 },
  { key: 'camping', name: 'Campsites', priority: 50 },
];

// Target audiences
const audiences = [
  { key: 'families', name: 'Families', priority: 100 },
  { key: 'couples', name: 'Couples', priority: 95 },
  { key: 'dogs', name: 'Dog Owners', priority: 90, filter: 'pet-friendly' },
  { key: 'solo-travelers', name: 'Solo Travelers', priority: 85 },
  { key: 'business', name: 'Business Travelers', priority: 80 },
  { key: 'budget', name: 'Budget Travelers', priority: 75 },
  { key: 'luxury', name: 'Luxury Travelers', priority: 70 },
  { key: 'seniors', name: 'Seniors', priority: 65 },
  { key: 'groups', name: 'Groups', priority: 60 },
  { key: 'adventure', name: 'Adventure Seekers', priority: 55 },
];

const QUEUE_DIR = path.join(__dirname, '../.generation-queue/pending');
const limit = process.argv.find(a => a.startsWith('--limit='))?.split('=')[1];

console.log('🚀 BestTrips Queue Builder');
console.log('==========================\n');

// Ensure queue directory exists
if (!fs.existsSync(QUEUE_DIR)) {
  fs.mkdirSync(QUEUE_DIR, { recursive: true });
}

// Generate all combinations
const queue = [];

tier1Destinations.forEach(dest => {
  types.forEach(type => {
    audiences.forEach(audience => {
      // Calculate priority score (weighted average)
      const score = Math.round(
        (dest.priority * 0.4) + 
        (type.priority * 0.3) + 
        (audience.priority * 0.3)
      );
      
      // Generate slug
      const destSlug = dest.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      const typeSlug = type.key;
      const audienceSlug = audience.key;
      
      const slug = `best-${typeSlug}-${audienceSlug}-${destSlug}`;
      
      // Create queue item
      const item = {
        destination: {
          name: dest.name,
          country: dest.country,
          slug: destSlug
        },
        type: {
          key: type.key,
          name: type.name
        },
        audience: {
          key: audience.key,
          name: audience.name
        },
        filters: audience.filter ? [audience.filter] : [],
        priority: score,
        slug: slug,
        title: `Best ${type.name} for ${audience.name} in ${dest.name}`,
        status: 'pending',
        created: new Date().toISOString()
      };
      
      queue.push(item);
    });
  });
});

// Sort by priority (high to low)
queue.sort((a, b) => b.priority - a.priority);

// Apply limit if specified
const outputQueue = limit ? queue.slice(0, parseInt(limit)) : queue;

console.log(`Generated ${outputQueue.length} page variations`);
console.log(`Priority range: ${outputQueue[outputQueue.length-1].priority} - ${outputQueue[0].priority}\n`);

// Show top 10
console.log('Top 10 pages by priority:');
outputQueue.slice(0, 10).forEach((item, i) => {
  console.log(`${i+1}. [${item.priority}] ${item.title}`);
});

console.log('\nSample variations:');
const samples = [
  outputQueue.find(i => i.audience.key === 'dogs'),
  outputQueue.find(i => i.type.key === 'b-and-bs'),
  outputQueue.find(i => i.audience.key === 'luxury'),
];
samples.filter(Boolean).forEach(item => {
  console.log(`  - ${item.title} (${item.slug})`);
});

// Write queue files
console.log(`\nWriting ${outputQueue.length} queue files to ${QUEUE_DIR}...`);
let written = 0;

outputQueue.forEach(item => {
  const filename = `${item.slug}.json`;
  const filepath = path.join(QUEUE_DIR, filename);
  
  // Don't overwrite existing files
  if (!fs.existsSync(filepath)) {
    fs.writeFileSync(filepath, JSON.stringify(item, null, 2));
    written++;
  }
});

console.log(`✅ Wrote ${written} new queue files`);
console.log(`   Skipped ${outputQueue.length - written} existing files\n`);

// Summary stats
console.log('📊 Queue Statistics:');
console.log(`Total variations: ${outputQueue.length}`);
console.log(`Destinations: ${tier1Destinations.length}`);
console.log(`Types: ${types.length}`);
console.log(`Audiences: ${audiences.length}`);
console.log(`\nAverage priority: ${Math.round(outputQueue.reduce((sum, i) => sum + i.priority, 0) / outputQueue.length)}`);

// Priority distribution
const highPri = outputQueue.filter(i => i.priority >= 90).length;
const medPri = outputQueue.filter(i => i.priority >= 75 && i.priority < 90).length;
const lowPri = outputQueue.filter(i => i.priority < 75).length;

console.log(`\nPriority distribution:`);
console.log(`  High (90+): ${highPri} pages`);
console.log(`  Medium (75-89): ${medPri} pages`);
console.log(`  Lower (<75): ${lowPri} pages`);

console.log('\n✨ Queue ready for generation!');
console.log('Run: node scripts/generate-batch.js to start generating pages\n');
