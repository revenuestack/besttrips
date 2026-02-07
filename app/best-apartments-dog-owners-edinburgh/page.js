export const metadata = {
  title: 'Best Apartments for Dog Owners in Edinburgh',
  description: 'Edinburgh welcomes four-legged travelers with open arms, offering numerous dog-friendly apartments perfect for exploring Scotland\'s historic capital.'
}

export default function Page() {
  const content = {
    "intro": "Edinburgh welcomes four-legged travelers with open arms, offering numerous dog-friendly apartments perfect for exploring Scotland's historic capital. From spacious flats near sprawling parks to cozy retreats in charming neighborhoods, you'll find ideal accommodations for you and your canine companion. The city's walkable streets, abundant green spaces, and pet-welcoming culture make it a tail-wagging destination.",
    "why_stay": [
      "Edinburgh boasts over 100 parks and green spaces, including Holyrood Park with off-leash areas for energetic pups.",
      "Many apartments feature private gardens or courtyards, providing convenient outdoor access for morning and evening walks.",
      "Pet-friendly cafes, pubs, and shops throughout the city mean your dog can join most adventures."
    ],
    "neighborhoods": [
      "Stockbridge: Charming village atmosphere with riverside walks along Water of Leith and numerous dog-friendly cafes.",
      "Portobello: Seaside neighborhood featuring a long beach where dogs can run free year-round.",
      "Newington: Residential area near The Meadows park, offering spacious apartments and excellent walking routes."
    ],
    "tips": [
      "Book apartments near Holyrood Park or The Meadows for easy access to off-leash areas and scenic hiking trails.",
      "Pack waste bags and check local dog control notices; Edinburgh requires leads in most public spaces."
    ],
    "cta": "Find your perfect dog-friendly Edinburgh apartment today and discover why Scotland's capital is a paradise for pups and their owners!"
  }
  
  return <div>{JSON.stringify(content)}</div>
}
