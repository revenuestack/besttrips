import fs from 'fs'
import path from 'path'

/**
 * Dynamically discover all travel guide pages
 * Returns array of {slug, title, destination, type, audience}
 */
export function getAllGuides() {
  const appDir = path.join(process.cwd(), 'app')
  
  // Get all directories that start with "best-"
  const entries = fs.readdirSync(appDir, { withFileTypes: true })
  const guideSlugs = entries
    .filter(e => e.isDirectory() && e.name.startsWith('best-'))
    .map(e => e.name)
  
  const guides = guideSlugs.map(slug => {
    // Parse slug: best-{type}-{audience}-{destination}
    // e.g., "best-hotels-families-barcelona"
    const parts = slug.replace('best-', '').split('-')
    
    let type = parts[0] // hotels, apartments, b-and-bs
    let audience = parts.slice(1, -1).join(' ') // families, couples, etc.
    let destination = parts[parts.length - 1] // barcelona
    
    // Capitalize
    type = type.charAt(0).toUpperCase() + type.slice(1)
    audience = audience.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
    destination = destination.charAt(0).toUpperCase() + destination.slice(1)
    
    const title = `Best ${type} for ${audience} in ${destination}`
    
    return {
      slug,
      title,
      destination,
      type,
      audience,
      url: `/${slug}`
    }
  })
  
  return guides
}

/**
 * Group guides by destination
 */
export function getGuidesByDestination() {
  const guides = getAllGuides()
  const byDestination = {}
  
  guides.forEach(guide => {
    if (!byDestination[guide.destination]) {
      byDestination[guide.destination] = []
    }
    byDestination[guide.destination].push(guide)
  })
  
  return byDestination
}

/**
 * Get featured destinations (top 12 by guide count)
 */
export function getFeaturedDestinations() {
  const byDestination = getGuidesByDestination()
  
  return Object.entries(byDestination)
    .map(([destination, guides]) => ({
      destination,
      count: guides.length,
      guides: guides.slice(0, 3) // Top 3 guides per destination
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 12)
}
