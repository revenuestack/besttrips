#!/usr/bin/env node
/**
 * Populate D1 with initial destinations and places
 * Run after D1 database is created and migrated
 * 
 * Usage: 
 *   CLOUDFLARE_API_TOKEN=xxx node scripts/populate-destinations.js
 */

const destinations = [
  { slug: 'paris-france', name: 'Paris', country: 'France', description: 'The City of Light - romantic getaways and world-class museums' },
  { slug: 'barcelona-spain', name: 'Barcelona', country: 'Spain', description: 'Vibrant coastal city with Gaudi architecture and family beaches' },
  { slug: 'rome-italy', name: 'Rome', country: 'Italy', description: 'Ancient history meets modern Italian culture' },
  { slug: 'amsterdam-netherlands', name: 'Amsterdam', country: 'Netherlands', description: 'Canals, museums, and bike-friendly streets' },
  { slug: 'lisbon-portugal', name: 'Lisbon', country: 'Portugal', description: 'Charming hills, historic trams, and Atlantic views' },
  { slug: 'prague-czech-republic', name: 'Prague', country: 'Czech Republic', description: 'Fairy-tale architecture and rich history' },
  { slug: 'vienna-austria', name: 'Vienna', country: 'Austria', description: 'Imperial palaces and classical music heritage' },
  { slug: 'berlin-germany', name: 'Berlin', country: 'Germany', description: 'Modern culture, history, and vibrant neighborhoods' },
  { slug: 'london-england', name: 'London', country: 'England', description: 'World-class museums, theater, and royal heritage' },
  { slug: 'edinburgh-scotland', name: 'Edinburgh', country: 'Scotland', description: 'Medieval old town and stunning castle views' }
];

console.log('📍 BestTrips Destination Seeder');
console.log('================================\n');

console.log(`Ready to populate ${destinations.length} destinations:`);
destinations.forEach(d => console.log(`  - ${d.name}, ${d.country}`));

console.log('\n⚠️  Manual steps required:');
console.log('1. Create D1 database: wrangler d1 create besttrips-db');
console.log('2. Run migration: wrangler d1 execute besttrips-db --file=migrations/0001_init.sql --remote');
console.log('3. Insert destinations via D1 console or SQL file');
console.log('\nSQL to insert destinations:');
console.log('\n```sql');

destinations.forEach((dest, i) => {
  console.log(`INSERT INTO destinations (slug, name, country, description) VALUES`);
  console.log(`  ('${dest.slug}', '${dest.name}', '${dest.country}', '${dest.description}');`);
});

console.log('```\n');
console.log('💡 Tip: Copy SQL above and paste into D1 Console or save to SQL file');
