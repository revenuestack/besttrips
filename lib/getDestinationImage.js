/**
 * Get hero image URL for a destination using Unsplash
 * Falls back to a default if unavailable
 */

const UNSPLASH_ACCESS_KEY = 'your_access_key_here' // Free tier: 50 requests/hour

// Destination-specific photo IDs from Unsplash (curated)
const DESTINATION_PHOTOS = {
  london: 'EVaVivxoZtw',
  paris: 'Q0-fOL2nqZc',
  rome: 'TgF7cVlJMbM',
  barcelona: 'CdVAUADdqEc',
  amsterdam: 'VW2oU90I7PM',
  berlin: 'VW2oU90I7PM',
  madrid: '9yb_b0mNxKQ',
  lisbon: 'bKRUXh3cNbw',
  prague: 'NdGC98x3SBY',
  vienna: 'JmuyB_LibRo',
  budapest: 'cNDKfXlpKSc',
  athens: 'D04Y57I5L_A',
  dublin: 'VHxfQc8JPNQ',
  florence: 'hgO1wFPXl3I',
  venice: 'Q41gHq5NNQA',
  copenhagen: 'cNDKfXlpKSc',
  edinburgh: 'iioDwPMn6dc',
  lyon: '7M2hZnIGV0E',
  porto: 'zlgmNTgEjS8',
  brussels: 'vSlUgjV2a0M'
}

export function getDestinationImage(destination) {
  const city = destination.toLowerCase()
  const photoId = DESTINATION_PHOTOS[city]
  
  if (!photoId) {
    // Default fallback image
    return {
      url: `https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&h=600&fit=crop`,
      alt: `${destination} cityscape`,
      credit: 'Photo by Unsplash'
    }
  }
  
  return {
    url: `https://images.unsplash.com/photo-${photoId}?w=1200&h=600&fit=crop&auto=format`,
    alt: `${destination} cityscape`,
    credit: `Photo by Unsplash`
  }
}
