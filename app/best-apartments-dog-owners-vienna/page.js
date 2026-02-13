import SimpleGuide from '@/components/SimpleGuide'

export const metadata = {
  title: 'Best Apartments for Dog Owners in Vienna',
  description: 'Vienna welcomes four-legged travelers with open arms, offering pet-friendly apartments throughout the city.'
}

export default function Page() {
  const content = {
    "intro": "Vienna welcomes four-legged travelers with open arms, offering pet-friendly apartments throughout the city. From spacious gardens to nearby parks, Vienna's apartments provide excellent bases for dog owners exploring Austria's elegant capital. The city's dog-friendly culture makes apartment stays comfortable and convenient.",
    "why_stay": [
      "Many Viennese apartments feature balconies or garden access, perfect for your dog's morning routine and relaxation.",
      "Vienna's extensive public parks and the Prater offer endless walking opportunities within minutes of most apartments.",
      "Local shops, cafes, and restaurants welcome dogs, making apartment living convenient without leaving your companion behind."
    ],
    "neighborhoods": [
      "Leopoldstadt: Home to the massive Prater park with off-leash areas, this district offers numerous pet-friendly apartments near green spaces.",
      "Neubau: Trendy neighborhood with dog-friendly cafes, boutiques, and proximity to parks, ideal for cosmopolitan dog owners seeking urban charm.",
      "Döbling: Quieter residential area bordering Vienna Woods, perfect for nature-loving dog owners wanting spacious apartments near hiking trails."
    ],
    "tips": [
      "Purchase a Vienna Dog Bag dispenser tag (Hundekotbeutel) from pet shops; dog waste removal is strictly enforced with fines.",
      "Dogs ride free on Vienna's public transport but must be muzzled or carried in bags on U-Bahn, trams, and buses."
    ],
    "cta": "Book your dog-friendly Vienna apartment today and discover why this imperial city is a canine paradise!"
  }
  
  return <SimpleGuide content={content} destination="Vienna" slug="best-apartments-dog-owners-vienna" title="Best Apartments for Dog Owners in Vienna" />
}
