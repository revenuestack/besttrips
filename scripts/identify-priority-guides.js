#!/usr/bin/env node

/**
 * Identify top 50 priority BestTrips guides for indexing
 * Based on: search volume, destination popularity, accommodation type
 */

const fs = require('fs');
const path = require('path');

// High-volume destinations (estimated monthly searches)
const DESTINATION_SCORES = {
  paris: 100,
  london: 100,
  barcelona: 90,
  rome: 85,
  amsterdam: 80,
  venice: 75,
  prague: 70,
  lisbon: 70,
  madrid: 65,
  berlin: 65,
  vienna: 60,
  budapest: 55,
  dublin: 55,
  edinburgh: 50,
  florence: 50,
  copenhagen: 45,
  brussels: 40,
  athens: 40,
  // Lower priority destinations
  valencia: 30,
  seville: 30,
  porto: 25,
  lyon: 20,
};

// Accommodation type scores (based on search volume)
const ACCOMMODATION_SCORES = {
  hotels: 100,
  apartments: 80,
  'boutique-hotels': 60,
  'bed-breakfast': 50,
  hostels: 40,
  villas: 35,
  guesthouses: 30,
};

// Audience scores (based on search volume + commercial intent)
const AUDIENCE_SCORES = {
  couples: 100,
  families: 90,
  business: 80,
  luxury: 75,
  budget: 70,
  adventure: 60,
  solo: 50,
  groups: 45,
};

function parseSlug(slug) {
  // Extract parts from slug like: best-apartments-couples-barcelona
  const parts = slug.split('-');
  
  if (parts[0] !== 'best') return null;
  
  // Find accommodation type
  let accommodation = null;
  let audience = null;
  let destination = null;
  
  // Patterns: best-{accommodation}-{audience}-{destination}
  // Or: best-{accommodation}-{destination}
  
  if (parts.length >= 4) {
    accommodation = parts.slice(1, -2).join('-'); // everything before last 2
    audience = parts[parts.length - 2];
    destination = parts[parts.length - 1];
  } else if (parts.length === 3) {
    accommodation = parts[1];
    destination = parts[2];
  }
  
  return { accommodation, audience, destination };
}

function scoreGuide(slug) {
  const parsed = parseSlug(slug);
  if (!parsed) return 0;
  
  const { accommodation, audience, destination } = parsed;
  
  const destScore = DESTINATION_SCORES[destination] || 10;
  const accomScore = ACCOMMODATION_SCORES[accommodation] || 20;
  const audScore = audience ? (AUDIENCE_SCORES[audience] || 30) : 50; // default if no audience
  
  // Weighted score: destination > audience > accommodation
  return (destScore * 0.5) + (audScore * 0.3) + (accomScore * 0.2);
}

async function identifyPriorityGuides() {
  const appDir = path.join(__dirname, '../app');
  const entries = fs.readdirSync(appDir, { withFileTypes: true });
  
  const guides = entries
    .filter(e => e.isDirectory() && e.name.startsWith('best-'))
    .map(e => {
      const slug = e.name;
      const score = scoreGuide(slug);
      return { slug, score };
    })
    .sort((a, b) => b.score - a.score);
  
  console.log(`Total guides: ${guides.length}\n`);
  console.log('Top 50 Priority Guides:\n');
  
  const top50 = guides.slice(0, 50);
  top50.forEach((guide, i) => {
    console.log(`${i + 1}. ${guide.slug} (score: ${guide.score.toFixed(1)})`);
  });
  
  // Write to file for indexing script
  const output = {
    generatedAt: new Date().toISOString(),
    totalGuides: guides.length,
    top50: top50.map(g => ({
      slug: g.slug,
      url: `https://besttrips.org/${g.slug}/`,
      score: Math.round(g.score),
    })),
  };
  
  fs.writeFileSync(
    path.join(__dirname, '../priority-guides.json'),
    JSON.stringify(output, null, 2)
  );
  
  console.log('\n✅ Priority guides saved to priority-guides.json');
}

identifyPriorityGuides();
