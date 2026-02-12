#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const csvPath = path.join(__dirname, '../feeds/travel.csv.gz');
const appDir = path.join(__dirname, '../app');

// Read and decompress CSV
const gzipped = fs.readFileSync(csvPath);
const csvContent = zlib.gunzipSync(gzipped).toString();

// Simple CSV parse
const lines = csvContent.split('\n');
const headers = lines[0].split(',').map(h => h.trim().replace(/"/g, ''));
const pending = [];

for (let i = 1; i < lines.length && pending.length < 10; i++) {
  const line = lines[i];
  if (!line.trim()) continue;
  
  // Simple CSV split (won't handle quoted commas perfectly, but good enough)
  const values = line.split(',').map(v => v.trim().replace(/^"|"$/g, ''));
  const record = {};
  headers.forEach((h, idx) => {
    record[h] = values[idx] || '';
  });
  
  const hotelName = record.product_name;
  if (!hotelName) continue;
  
  // Generate slug
  const slug = hotelName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
  
  const pagePath = path.join(appDir, slug, 'page.js');
  
  if (!fs.existsSync(pagePath)) {
    pending.push({
      name: hotelName,
      id: record.merchant_product_id,
      slug,
      description: record.description,
      price: record.search_price,
      merchant: record.merchant_name,
      category: record.merchant_category
    });
  }
}

console.log(JSON.stringify(pending, null, 2));
