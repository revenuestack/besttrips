// Accommodation type images for property cards
// Using Unsplash CDN - high quality, free

export const accommodationImages = {
  'Hotels': 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
  'Apartments': 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80',
  'Villas': 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
  'B&Bs': 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80',
  'Hostels': 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&q=80',
  'Resorts': 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80'
};

// Audience-specific lifestyle images for variety
export const audienceImages = {
  'Couples': 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&q=80',
  'Families': 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&q=80',
  'Solo Travelers': 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=800&q=80',
  'Business Travelers': 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80',
  'Budget Travelers': 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80',
  'Luxury Travelers': 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80',
  'Adventure Seekers': 'https://images.unsplash.com/photo-1533130061792-64b345e4a833?w=800&q=80',
  'Romantic Getaways': 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80',
  'Groups': 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80',
  'Seniors': 'https://images.unsplash.com/photo-1447069387593-a5de0862481e?w=800&q=80'
};

export function getAccommodationImage(type) {
  return accommodationImages[type] || accommodationImages['Hotels'];
}

export function getAudienceImage(audience) {
  // Try exact match first
  if (audienceImages[audience]) return audienceImages[audience];
  
  // Try partial match
  const key = Object.keys(audienceImages).find(k => 
    audience.toLowerCase().includes(k.toLowerCase().split(' ')[0])
  );
  return key ? audienceImages[key] : audienceImages['Couples'];
}
