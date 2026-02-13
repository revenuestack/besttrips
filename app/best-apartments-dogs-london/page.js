import SimpleGuide from '@/components/SimpleGuide'

export const metadata = {
  title: 'Best Apartments for Dog Owners in London',
  description: 'London offers exceptional apartment living for dog owners, with numerous pet-friendly accommodations near sprawling parks.'
}

export default function Page() {
  const content = {
  "intro": "London offers exceptional apartment living for dog owners, with numerous pet-friendly accommodations near sprawling parks and green spaces. From Hyde Park to Hampstead Heath, you'll find the perfect base for exploring the city with your furry companion. Modern apartments combine convenience with canine-friendly amenities.",
  "why_stay": [
    "Access to world-class parks like Regent's Park and Richmond Park for daily walks and off-leash play areas.",
    "Pet-friendly public transport policies make exploring London's attractions with your dog convenient and stress-free throughout the city.",
    "Many apartments offer ground-floor access, private gardens, and proximity to veterinary clinics and pet supply stores."
  ],
  "neighborhoods": [
    "Notting Hill - Charming streets with communal gardens, close to Holland Park's dog-friendly areas and boutique pet shops.",
    "Canary Wharf - Modern apartments with river walks along the Thames Path, perfect for morning and evening dog walks.",
    "Clapham - Village atmosphere near Clapham Common's 220 acres, popular with dog owners and featuring dedicated play zones."
  ],
  "tips": [
    "Book apartments with confirmed pet policies in writing and check for weight restrictions, deposit requirements, and nearby dog-waste facilities before arrival.",
    "Download the All The Dogs app to find local dog-friendly cafes, pubs, and off-leash areas in your neighborhood for socializing opportunities."
  ],
  "cta": "Book your dog-friendly London apartment today and discover why this vibrant city is a paradise for pets and their owners alike!"
}

  return <SimpleGuide content={content} title="Best Apartments for Dog Owners in London" />
}
