#!/usr/bin/env node
/**
 * Process AWIN travel feed and populate D1 database
 * Filters for hotels (excludes eSIMs and other travel products)
 * 
 * Usage: node scripts/process-travel-feed.js
 */

const fs = require('fs');
const zlib = require('zlib');
const readline = require('readline');

console.log('🏨 BestTrips Travel Feed Processor');
console.log('===================================\n');

const FEED_PATH = 'feeds/travel.csv.gz';
const OUTPUT_SQL = 'feeds/hotels-import.sql';

// Track what we find
const stats = {
  total: 0,
  hotels: 0,
  esims: 0,
  other: 0,
  destinations: new Map(),
};

const hotels = [];

async function processFeed() {
  const fileStream = fs.createReadStream(FEED_PATH);
  const gunzip = zlib.createGunzip();
  const rl = readline.createInterface({
    input: fileStream.pipe(gunzip),
    crlfDelay: Infinity
  });

  let isHeader = true;

  for await (const line of rl) {
    if (isHeader) {
      isHeader = false;
      continue; // Skip CSV header
    }

    stats.total++;

    // Parse CSV line (basic - assumes no commas in quoted fields except descriptions)
    const fields = line.split(',');
    
    const productName = fields[1]?.replace(/^"|"$/g, '') || '';
    const merchantName = fields[9]?.replace(/^"|"$/g, '') || '';
    const price = parseFloat(fields[7]) || 0;
    const description = fields[5]?.replace(/^"|"$/g, '') || '';
    const deepLink = fields[0] || '';
    const imageUrl = fields[4] || '';
    const productId = fields[2] || '';
    
    // Filter logic
    if (merchantName.includes('eSIMania')) {
      stats.esims++;
      continue;
    }
    
    if (!merchantName.includes('Radisson') && !merchantName.includes('Hotel')) {
      stats.other++;
      continue;
    }
    
    stats.hotels++;
    
    // Extract destination from hotel name
    // e.g., "Radisson Blu Hotel, Biarritz" -> "Biarritz"
    // e.g., "Park Inn by Radisson Budapest" -> "Budapest"
    let destination = '';
    let city = '';
    
    if (productName.includes(',')) {
      // Format: "Hotel Name, City"
      city = productName.split(',').pop().trim();
    } else {
      // Format: "Hotel Name City" - extract last word(s)
      const words = productName.split(' ');
      city = words[words.length - 1];
    }
    
    destination = city;
    
    if (!destination || destination.length < 3) {
      destination = 'Unknown';
    }
    
    // Track destination
    const destKey = destination.toLowerCase();
    if (!stats.destinations.has(destKey)) {
      stats.destinations.set(destKey, {
        name: destination,
        count: 0
      });
    }
    stats.destinations.get(destKey).count++;
    
    hotels.push({
      name: productName,
      destination: destination,
      price: price,
      description: description,
      deepLink: deepLink,
      imageUrl: imageUrl,
      productId: productId,
      merchant: merchantName
    });
  }

  console.log('📊 Feed Processing Complete\n');
  console.log(`Total products: ${stats.total}`);
  console.log(`  Hotels: ${stats.hotels}`);
  console.log(`  eSIMs (filtered): ${stats.esims}`);
  console.log(`  Other (filtered): ${stats.other}\n`);
  
  console.log(`🗺️  Unique destinations found: ${stats.destinations.size}`);
  
  // Sort destinations by hotel count
  const sortedDests = Array.from(stats.destinations.values())
    .sort((a, b) => b.count - a.count);
    
  console.log('\nTop destinations:');
  sortedDests.slice(0, 10).forEach(dest => {
    console.log(`  - ${dest.name}: ${dest.count} hotels`);
  });
  
  // Generate SQL
  generateSQL(sortedDests, hotels);
}

function generateSQL(destinations, hotels) {
  let sql = '-- BestTrips Hotels Import\n';
  sql += '-- Generated from AWIN travel feed\n\n';
  
  // Insert destinations (avoiding duplicates)
  sql += '-- Destinations\n';
  destinations.forEach((dest, idx) => {
    const slug = dest.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const country = guessCountry(dest.name); // Simple heuristic
    
    sql += `INSERT OR IGNORE INTO destinations (slug, name, country, description) VALUES\n`;
    sql += `  ('${slug}', '${escapeSql(dest.name)}', '${country}', 'Travel destination with ${dest.count} hotels');\n`;
  });
  
  sql += '\n-- Hotels\n';
  hotels.forEach((hotel, idx) => {
    const destSlug = hotel.destination.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const priceRange = hotel.price < 80 ? '$' : hotel.price < 150 ? '$$' : hotel.price < 250 ? '$$$' : '$$$$';
    
    // Use SELECT to get destination_id dynamically
    sql += `INSERT INTO places (destination_id, name, type, description, price_range, family_friendly, rating, address, website, image_url) \n`;
    sql += `  SELECT id, '${escapeSql(hotel.name)}', 'hotel', '${escapeSql(hotel.description)}', '${priceRange}', 1, 4.0, '', '${escapeSql(hotel.deepLink)}', '${escapeSql(hotel.imageUrl)}'\n`;
    sql += `  FROM destinations WHERE slug = '${destSlug}';\n`;
  });
  
  fs.writeFileSync(OUTPUT_SQL, sql);
  console.log(`\n✅ SQL generated: ${OUTPUT_SQL}`);
  console.log(`\nTo import into D1:`);
  console.log(`  1. Review the SQL file: cat ${OUTPUT_SQL} | head -50`);
  console.log(`  2. Import to D1: wrangler d1 execute besttrips-db --file=${OUTPUT_SQL} --remote`);
  console.log(`  3. Or use API: curl -X POST ... (see script comments)\n`);
}

function escapeSql(str) {
  if (!str) return '';
  return str.replace(/'/g, "''").replace(/\n/g, ' ').trim();
}

function guessCountry(cityName) {
  // Simple heuristic - expand as needed
  const mapping = {
    'biarritz': 'France',
    'paris': 'France',
    'lyon': 'France',
    'budapest': 'Hungary',
    'copenhagen': 'Denmark',
    'dublin': 'Ireland',
    'london': 'England',
    'edinburgh': 'Scotland',
    'amsterdam': 'Netherlands',
    'berlin': 'Germany',
    'rome': 'Italy',
    'barcelona': 'Spain',
    'lisbon': 'Portugal',
    'prague': 'Czech Republic',
    'vienna': 'Austria'
  };
  
  const key = cityName.toLowerCase();
  return mapping[key] || 'Europe'; // Default fallback
}

// Run
processFeed().catch(console.error);
