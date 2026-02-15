#!/usr/bin/env node
/**
 * Generate sitemap for BestTrips.org
 * Scans app/ directory for all page.js files
 */

const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://besttrips.org';
const APP_DIR = path.join(__dirname, '../app');
const OUTPUT_DIR = path.join(__dirname, '../public');

function escapeXml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function findPageFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      findPageFiles(filePath, fileList);
    } else if (file === 'page.js' || file === 'page.jsx') {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

function main() {
  console.log('🗺️  BESTTRIPS SITEMAP GENERATION');
  console.log('================================\n');
  
  // Find all page files
  console.log('📁 Scanning app directory...');
  const pageFiles = findPageFiles(APP_DIR);
  console.log(`   Found ${pageFiles.length} pages\n`);
  
  // Extract slugs from paths
  const slugs = pageFiles.map(file => {
    const relativePath = path.relative(APP_DIR, file);
    const slug = path.dirname(relativePath);
    return slug === '.' ? '' : slug;
  }).filter(slug => slug !== '');
  
  console.log(`📝 Generating sitemap with ${slugs.length} URLs...\n`);
  
  // Ensure output directory exists
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }
  
  const today = new Date().toISOString().split('T')[0];
  
  // Generate main sitemap
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  // Homepage
  xml += '  <url>\n';
  xml += `    <loc>${SITE_URL}/</loc>\n`;
  xml += `    <lastmod>${today}</lastmod>\n`;
  xml += '    <changefreq>weekly</changefreq>\n';
  xml += '    <priority>1.0</priority>\n';
  xml += '  </url>\n';
  
  // All guide pages
  slugs.forEach(slug => {
    xml += '  <url>\n';
    xml += `    <loc>${SITE_URL}/${escapeXml(slug)}/</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += '    <changefreq>monthly</changefreq>\n';
    xml += '    <priority>0.8</priority>\n';
    xml += '  </url>\n';
  });
  
  xml += '</urlset>\n';
  
  const sitemapPath = path.join(OUTPUT_DIR, 'sitemap.xml');
  fs.writeFileSync(sitemapPath, xml);
  
  console.log('✅ Sitemap generation complete!\n');
  console.log('📊 Summary:');
  console.log(`   Homepage: 1`);
  console.log(`   Guide pages: ${slugs.length}`);
  console.log(`   Total URLs: ${slugs.length + 1}`);
  console.log('');
  console.log('📁 Files created:');
  console.log(`   ${sitemapPath}`);
  console.log('');
  console.log('🚀 Next steps:');
  console.log('   1. Commit and push to deploy');
  console.log('   2. Submit sitemap to Google Search Console');
  console.log(`   3. Verify at: ${SITE_URL}/sitemap.xml`);
}

main();
