/**
 * Get hero image URL for a destination
 * Uses direct Unsplash URLs that work without API key
 */

// Working Unsplash photo URLs (verified)
const DESTINATION_IMAGES = {
  london: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&h=600&fit=crop&q=80',
  paris: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=600&fit=crop&q=80',
  rome: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1200&h=600&fit=crop&q=80',
  barcelona: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=1200&h=600&fit=crop&q=80',
  amsterdam: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=1200&h=600&fit=crop&q=80',
  berlin: 'https://images.unsplash.com/photo-1560930950-5cc20e80e392?w=1200&h=600&fit=crop&q=80',
  madrid: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=1200&h=600&fit=crop&q=80',
  lisbon: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1200&h=600&fit=crop&q=80',
  prague: 'https://images.unsplash.com/photo-1541849546-216549ae216d?w=1200&h=600&fit=crop&q=80',
  vienna: 'https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=1200&h=600&fit=crop&q=80',
  budapest: 'https://images.unsplash.com/photo-1541725677488-e4d1b6294ad0?w=1200&h=600&fit=crop&q=80',
  athens: 'https://images.unsplash.com/photo-1555993539-1732b0258235?w=1200&h=600&fit=crop&q=80',
  dublin: 'https://images.unsplash.com/photo-1549918864-48ac978761a4?w=1200&h=600&fit=crop&q=80',
  florence: 'https://images.unsplash.com/photo-1541017006979-4c1c8e782b33?w=1200&h=600&fit=crop&q=80',
  venice: 'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=1200&h=600&fit=crop&q=80',
  copenhagen: 'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=1200&h=600&fit=crop&q=80',
  edinburgh: 'https://images.unsplash.com/photo-1549041542-89b465eff72c?w=1200&h=600&fit=crop&q=80',
  lyon: 'https://images.unsplash.com/photo-1524396309943-e03f5249f002?w=1200&h=600&fit=crop&q=80',
  porto: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1200&h=600&fit=crop&q=80',
  brussels: 'https://images.unsplash.com/photo-1558564367-6d78869e5f5b?w=1200&h=600&fit=crop&q=80'
}

export function getDestinationImage(destination) {
  const city = destination.toLowerCase()
  const imageUrl = DESTINATION_IMAGES[city]
  
  if (!imageUrl) {
    // Default fallback - generic European cityscape
    return {
      url: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&h=600&fit=crop&q=80',
      alt: `${destination} cityscape`,
      credit: 'Photo by Unsplash'
    }
  }
  
  return {
    url: imageUrl,
    alt: `${destination} cityscape`,
    credit: 'Photo by Unsplash'
  }
}
