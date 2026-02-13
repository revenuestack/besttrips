import SimpleGuide from '@/components/SimpleGuide'

export const metadata = {
  title: 'Best Apartments for Couples in Rome',
  description: 'Rome offers couples intimate apartment stays that blend authentic local living with romantic charm.'
}

export default function Page() {
  const content = {
  "intro": "Rome offers couples intimate apartment stays that blend authentic local living with romantic charm. From cobblestone streets to rooftop terraces overlooking ancient ruins, vacation rentals provide the privacy and comfort perfect for romantic getaways. Experience the Eternal City like a local while enjoying your own cozy retreat in historic neighborhoods.",
  "why_stay": [
    "Private kitchens let you prepare romantic candlelit meals with fresh ingredients from local markets and neighborhood trattorias.",
    "Spacious accommodations with separate living areas and balconies offer significantly more comfort and value than traditional hotel rooms.",
    "Authentic neighborhood experiences immerse couples in genuine Roman culture and daily life, away from overcrowded tourist hotel districts."
  ],
  "neighborhoods": [
    "Trastevere: Charming medieval quarter with narrow cobblestone streets, ivy-draped buildings, vibrant evening atmosphere, and authentic Roman trattorias perfect for romantic dinners.",
    "Monti: Bohemian artisan neighborhood near the Colosseum featuring independent boutique shops, cozy wine bars, vintage stores, and intimate romantic piazzas.",
    "Prati: Elegant upscale residential area near Vatican City offering sophisticated dining experiences, traditional local markets, peaceful tree-lined streets, and authentic charm."
  ],
  "tips": [
    "Book apartments with air conditioning and ceiling fans for summer stays, as Rome's temperatures can reach extreme levels June through August.",
    "Choose locations within walking distance of metro stations for convenient access to major attractions while enjoying the quieter charm of residential areas."
  ],
  "cta": "Discover your perfect Roman apartment today and create unforgettable romantic memories together in the heart of Italy's most enchanting and timeless city."
}

  return <SimpleGuide content={content} title="Best Apartments for Couples in Rome" />
}
