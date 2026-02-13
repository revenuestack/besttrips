import SimpleGuide from '@/components/SimpleGuide'

export const metadata = {
  title: 'Best Apartments for Dog Owners in Rome',
  description: 'Rome welcomes four-legged travelers with open arms, offering numerous dog-friendly apartments perfect for extended stays.'
}

export default function Page() {
  const content = {
    "intro": "Rome welcomes four-legged travelers with open arms, offering numerous dog-friendly apartments perfect for extended stays. From villa rentals near ancient parks to modern flats with easy access to green spaces, the Eternal City provides comfortable bases for you and your canine companion. Many apartments feature terraces, nearby dog parks, and proximity to pet-friendly restaurants and attractions.",
    "why_stay": [
      "Spacious apartments with balconies or terraces give your dog room to relax after exploring Rome's historic streets.",
      "Kitchen facilities let you prepare meals for dietary needs and save money compared to pet-friendly hotel dining.",
      "Neighborhood immersion provides authentic local experiences and regular walking routes your dog will love exploring daily."
    ],
    "neighborhoods": [
      "Trastevere: Charming cobblestone streets, Villa Sciarra park nearby, and numerous dog-friendly cafes with outdoor seating areas.",
      "Prati: Residential area near Vatican City with wide sidewalks, Villa Borghese gardens within reach, and local markets.",
      "Testaccio: Authentic Roman neighborhood featuring Monte Testaccio park, dog-loving locals, and traditional trattorias welcoming pets outside."
    ],
    "tips": [
      "Book apartments near Rome's major parks like Villa Borghese, Villa Ada, or Villa Pamphili for daily exercise and socialization opportunities.",
      "Verify building policies regarding dogs, elevator access, and whether your apartment has easy street-level access for quick bathroom breaks."
    ],
    "cta": "Start your Roman holiday by browsing dog-friendly apartment rentals today and experience la dolce vita with your beloved pet!"
  }
  
  return <SimpleGuide content={content} destination="Rome" slug="best-apartments-dog-owners-rome" title="Best Apartments for Dog Owners in Rome" />
}
