import SimpleGuide from '@/components/SimpleGuide'

export const metadata = {
  title: 'Best Apartments for Dog Owners in Lyon',
  description: 'Lyon offers exceptional apartments for dog owners, combining urban sophistication with abundant green spaces and a genuinely pet-welcoming culture.'
}

export default function Page() {
  const content = {
    "intro": "Lyon offers exceptional apartments for dog owners, combining urban sophistication with abundant green spaces and a genuinely pet-welcoming culture. The city's riverside parks, dog-friendly terraces, and relaxed approach to canine companions make it an ideal base for travelers with four-legged friends.",
    "why_stay": [
      "Lyon's Parc de la Tête d'Or features expansive off-leash areas where dogs can socialize and exercise freely.",
      "Most Lyon apartments welcome dogs, with many offering ground-floor access to courtyard gardens and nearby walking paths.",
      "The city's pedestrian-friendly streets and dog-tolerant café culture mean your pup can join daily adventures easily."
    ],
    "neighborhoods": [
      "Presqu'île: Central district with riverside promenades along the Rhône and Saône, perfect for morning and evening dog walks.",
      "Croix-Rousse: Hillside neighborhood offering quiet residential streets, local markets, and excellent access to parks and trails.",
      "Confluence: Modern waterfront area with contemporary apartments, dedicated dog parks, and scenic quayside paths for active pets."
    ],
    "tips": [
      "Book apartments near Parc de la Tête d'Or or along the riverbanks for easiest access to dog exercise areas and avoid stair-only buildings.",
      "Confirm pet policies in advance—most Lyon apartments charge a small cleaning fee but welcome dogs under 15kg more readily."
    ],
    "cta": "Find your perfect dog-friendly Lyon apartment today and discover why this Rhône-Alps gem is a tail-wagging paradise for traveling pet owners."
  }
  
  return <SimpleGuide content={content} title="Best Apartments for Dog Owners in Lyon" />
}
