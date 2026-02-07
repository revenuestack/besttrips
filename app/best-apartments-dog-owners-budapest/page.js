export const metadata = {
  title: 'Best Apartments for Dog Owners in Budapest',
  description: 'Budapest offers an exceptional blend of pet-friendly culture and spacious apartment living for dog owners.'
}

export default function Page() {
  const content = {
    "intro": "Budapest offers an exceptional blend of pet-friendly culture and spacious apartment living for dog owners. The city features numerous parks, riverside paths along the Danube, and a welcoming attitude toward four-legged companions. Renting an apartment here means enjoying affordable living while accessing excellent veterinary care and dog-friendly amenities.",
    "why_stay": [
      "Budapest's parks like Margaret Island and City Park provide expansive green spaces for daily walks and socialization.",
      "Most apartment buildings accept dogs, and Hungarian landlords generally have flexible pet policies compared to Western Europe.",
      "Affordable veterinary services, pet shops, and dog-friendly cafés make Budapest convenient for long-term stays with pets."
    ],
    "neighborhoods": [
      "District V (Belváros-Lipótváros): Central location with easy access to Margaret Island's dog-friendly zones and Danube promenades for evening walks.",
      "District XIII (Újlipótváros): Family-oriented area near Margaret Island, featuring quiet streets, local parks, and numerous pet supply stores.",
      "District II (Rózsadomb): Hilly, residential district with spacious apartments, nearby Normafa hiking trails, and peaceful green spaces perfect for active dogs."
    ],
    "tips": [
      "Hungarian law requires dogs to be leashed in public spaces; bring waste bags as fines apply for not cleaning up.",
      "Check apartment contracts for pet deposits (typically one month's rent) and confirm weight/breed restrictions before booking."
    ],
    "cta": "Find your perfect dog-friendly Budapest apartment today and experience Central Europe's most welcoming city for pet owners."
  }
  
  return <div>{JSON.stringify(content)}</div>
}
