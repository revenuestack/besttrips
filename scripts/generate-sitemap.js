#!/usr/bin/env node
// Generate XML sitemap for all BestTrips pages

const fs = require('fs')
const path = require('path')

const SITE_URL = 'https://besttrips.org'

function getAllPages() {
  const appDir = path.join(__dirname, '../app')
  const pages = []
  
  // Get all directories in app/
  const entries = fs.readdirSync(appDir, { withFileTypes: true })
  
  entries.forEach(entry => {
    if (entry.isDirectory() && entry.name.startsWith('best-')) {
      // Check if page.js exists
      const pagePath = path.join(appDir, entry.name, 'page.js')
      if (fs.existsSync(pagePath)) {
        pages.push({
          url: `${SITE_URL}/${entry.name}`,
          lastmod: new Date().toISOString().split('T')[0],
          changefreq: 'weekly',
          priority: '0.8'
        })
      }
    }
  })
  
  // Add hotel pages
  const hotelDirs = entries.filter(e => e.isDirectory() && (
    e.name.startsWith('hotel') || 
    e.name.startsWith('park-inn') ||
    e.name.startsWith('radisson') ||
    e.name.startsWith('palace')
  ))
  
  hotelDirs.forEach(entry => {
    const pagePath = path.join(appDir, entry.name, 'page.js')
    if (fs.existsSync(pagePath)) {
      pages.push({
        url: `${SITE_URL}/${entry.name}`,
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: 'monthly',
        priority: '0.6'
      })
    }
  })
  
  // Add homepage
  pages.unshift({
    url: SITE_URL,
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'daily',
    priority: '1.0'
  })
  
  return pages
}

function generateSitemap(pages) {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`
  
  return xml
}

// Generate and save sitemap
const pages = getAllPages()
const sitemap = generateSitemap(pages)
const outputPath = path.join(__dirname, '../public/sitemap.xml')

fs.writeFileSync(outputPath, sitemap, 'utf8')

console.log(`✅ Generated sitemap with ${pages.length} pages`)
console.log(`📝 Saved to: ${outputPath}`)
console.log(`🔗 URL: ${SITE_URL}/sitemap.xml`)
