export const metadata = {
  title: 'Best Apartments for Adventure Seekers in Prague',
  description: 'Prague\'s historic heart beats with adventure opportunities, from rock climbing limestone cliffs to kayaking the Vltava River.'
}

export default function Page() {
  const content = {
  "intro": "Prague's historic heart beats with adventure opportunities, from rock climbing limestone cliffs to kayaking the Vltava River. Staying in a local apartment puts you closer to authentic experiences while providing the freedom and flexibility adventure seekers crave. Base yourself like a local and unlock the Czech capital's adrenaline-fueled secrets.",
  "why_stay": [
    "Apartments offer gear storage space, laundry facilities, and early-morning departure flexibility for multi-day hiking trips nearby.",
    "Cook your own meals to fuel adventures and save money for experiences like paragliding or caving expeditions.",
    "Stay in residential neighborhoods near trailheads, climbing spots, and the river for immediate outdoor access daily."
  ],
  "neighborhoods": [
    "Holešovice – trendy riverside district with bike paths, climbing gyms, and direct access to Stromovka Park's trails",
    "Vinohrady – elevated neighborhood offering hill runs, nearby Riegrovy Sady beer garden, and excellent cycling routes",
    "Smíchov – affordable area near Petřín Hill's hiking trails, with kayak rental points along the waterfront"
  ],
  "tips": [
    "Book apartments near metro stations for easy access to Bohemian Paradise and Saxon Switzerland day trips.",
    "Choose places with bike storage since Prague's extensive cycling infrastructure makes two wheels essential for exploration."
  ],
  "cta": "Find your Prague adventure basecamp today and discover why this medieval city is Central Europe's outdoor playground."
}

  return <div>{JSON.stringify(content)}</div>
}
