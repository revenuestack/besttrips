#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://besttrips.org';
const appDir = path.join(__dirname, '..', 'app');
const publicDir = path.join(__dirname, '..', 'public');

// Get all page directories
const pages = fs.readdirSync(appDir)
  .filter(f => f.startsWith('best-') && fs.statSync(path.join(appDir, f)).isDirectory());

console.log(`Found ${pages.length} pages`);

// Generate sitemap XML
const today = new Date().toISOString().split('T')[0];

let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${BASE_URL}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
`;

for (const page of pages) {
  sitemap += `  <url>
    <loc>${BASE_URL}/${page}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
`;
}

sitemap += `</urlset>`;

// Ensure public directory exists
fs.mkdirSync(publicDir, { recursive: true });

// Write sitemap
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
console.log(`Generated sitemap.xml with ${pages.length + 1} URLs`);

// Generate robots.txt
const robots = `User-agent: *
Allow: /

Sitemap: ${BASE_URL}/sitemap.xml
`;

fs.writeFileSync(path.join(publicDir, 'robots.txt'), robots);
console.log('Generated robots.txt');

// Generate sitemap index for Google (in case we need to split later)
const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${BASE_URL}/sitemap.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
</sitemapindex>
`;

fs.writeFileSync(path.join(publicDir, 'sitemap-index.xml'), sitemapIndex);
console.log('Generated sitemap-index.xml');
