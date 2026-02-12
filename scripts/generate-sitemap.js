#!/usr/bin/env node
/**
 * Generate XML sitemaps for BestTrips.org
 * Follows Google best practices:
 * - <50K URLs per sitemap
 * - lastmod, changefreq, priority tags
 * - Sitemap index for organization
 */

const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://besttrips.org';
const OUTPUT_DIR = path.join(__dirname, '../public');
const GUIDES_DIR = path.join(__dirname, '../app');

// Ensure public directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

/**
 * Get lastmod date from directory stat
 */
function getLastMod(dirPath) {
  try {
    const stats = fs.statSync(dirPath);
    return stats.mtime.toISOString().split('T')[0]; // YYYY-MM-DD format
  } catch (e) {
    return new Date().toISOString().split('T')[0];
  }
}

/**
 * Generate guides sitemap
 */
function generateGuidesSitemap() {
  const guides = fs.readdirSync(GUIDES_DIR)
    .filter(dir => {
      // Skip special Next.js directories
      if (['api', 'fonts', 'layout.js', 'page.js', 'globals.css'].includes(dir)) {
        return false;
      }
      
      const dirPath = path.join(GUIDES_DIR, dir);
      return fs.statSync(dirPath).isDirectory() && 
             fs.existsSync(path.join(dirPath, 'page.js'));
    });

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

  guides.forEach(slug => {
    const dirPath = path.join(GUIDES_DIR, slug);
    const lastmod = getLastMod(dirPath);
    
    xml += `  <url>
    <loc>${SITE_URL}/${slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
`;
  });

  xml += `</urlset>`;

  fs.writeFileSync(path.join(OUTPUT_DIR, 'sitemap-guides.xml'), xml);
  console.log(`✅ Generated sitemap-guides.xml (${guides.length} guides)`);
  
  return guides.length;
}

/**
 * Generate static pages sitemap
 */
function generateStaticSitemap() {
  const staticPages = [
    { url: '/', changefreq: 'daily', priority: '1.0' },
    { url: '/about', changefreq: 'monthly', priority: '0.5' },
  ];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

  const today = new Date().toISOString().split('T')[0];

  staticPages.forEach(page => {
    xml += `  <url>
    <loc>${SITE_URL}${page.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`;
  });

  xml += `</urlset>`;

  fs.writeFileSync(path.join(OUTPUT_DIR, 'sitemap-static.xml'), xml);
  console.log(`✅ Generated sitemap-static.xml (${staticPages.length} pages)`);
}

/**
 * Generate sitemap index
 */
function generateSitemapIndex(guideCount) {
  const today = new Date().toISOString().split('T')[0];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${SITE_URL}/sitemap-static.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${SITE_URL}/sitemap-guides.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
</sitemapindex>`;

  fs.writeFileSync(path.join(OUTPUT_DIR, 'sitemap.xml'), xml);
  console.log(`✅ Generated sitemap.xml (index)`);
  console.log(`\n📊 Total URLs: ${guideCount + 2}`);
  console.log(`\n🔗 Submit to Google Search Console:`);
  console.log(`   ${SITE_URL}/sitemap.xml`);
}

/**
 * Main execution
 */
function main() {
  console.log('🗺️  Generating sitemaps for BestTrips.org...\n');
  
  const guideCount = generateGuidesSitemap();
  generateStaticSitemap();
  generateSitemapIndex(guideCount);
  
  console.log('\n✅ All sitemaps generated successfully!');
  console.log(`📁 Location: ${OUTPUT_DIR}/`);
}

main();
