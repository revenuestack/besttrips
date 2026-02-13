import SimpleGuide from '@/components/SimpleGuide'

export const metadata = {
  title: 'Best Apartments for Dog Owners in Lyon',
  description: 'Discover pet-friendly apartments in Lyon with parks, riverside walks, and welcoming neighborhoods perfect for you and your furry companion.'
}

export default function Page() {
  const content = {
  "intro": "Lyon offers an exceptional blend of urban culture and dog-friendly living, making it one of France's most welcoming cities for travelers with pets. With expansive riverside parks along the Rhône and Saône, pedestrian-friendly streets, and a growing number of pet-accepting apartments, Lyon provides the perfect base for exploring with your four-legged companion. The city's relaxed attitude toward dogs in public spaces means you and your pup can enjoy café terraces, markets, and outdoor adventures together.",
  "why_stay": [
    "Lyon's numerous parks including Parc de la Tête d'Or with dedicated dog areas provide perfect spaces for daily exercise and socialization.",
    "Many apartment rentals feature ground-floor access or elevators and proximity to green spaces, making multiple daily walks effortless.",
    "The city's dog-friendly culture means restaurants with outdoor seating, boutique shops, and even some museums welcome well-behaved pets."
  ],
  "neighborhoods": [
    "Presqu'île: This central peninsula between two rivers offers easy access to quays perfect for morning and evening dog walks, plus countless pet-friendly café terraces where your dog can relax while you enjoy Lyon's famous cuisine.",
    "Croix-Rousse: Known for its village atmosphere and hilltop location, this bohemian neighborhood features quiet streets, small parks, and a weekly market where dogs are welcome, plus apartments with easier outdoor access than high-rise buildings.",
    "Confluence: Lyon's modern waterfront district boasts contemporary apartments with balconies, proximity to expansive riverside paths ideal for long walks, and the dog-friendly Parc de Saône where your pup can run and play."
  ],
  "tips": [
    "Book apartments near Parc de la Tête d'Or or along the riverside quays to ensure convenient access to off-leash areas and long walking routes.",
    "Check that your apartment has easy ground access or an elevator, and confirm pet policies including any size restrictions or additional cleaning fees before booking."
  ],
  "cta": "Find your perfect dog-friendly apartment in Lyon today and experience French culture with your best friend by your side!"
}

  return <SimpleGuide content={content} destination="Lyon" slug="best-apartments-dogs-lyon" title="Best Apartments for Dog Owners in Lyon" />
}
