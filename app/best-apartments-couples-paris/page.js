export const metadata = {
  title: 'Best Apartments for Couples in Paris',
  description: 'Paris apartments offer couples an intimate home base for romance, combining local charm with privacy.'
}

export default function Page() {
  const content = {
  "intro": "Paris apartments offer couples an intimate home base for romance, combining local charm with privacy. Wake up to croissants from corner bakeries, sip wine on your private balcony, and live like Parisians in the City of Light. Apartments provide the perfect blend of independence and authentic neighborhood immersion.",
  "why_stay": [
    "Enjoy romantic mornings with fresh pastries and coffee in your own cozy kitchen space together.",
    "Experience genuine Parisian life in charming neighborhoods away from tourist-heavy hotel districts and crowds.",
    "Save money on dining out by preparing intimate dinners with fresh ingredients from local markets."
  ],
  "neighborhoods": [
    "Le Marais: Cobblestone streets, trendy cafés, and historic charm create the perfect romantic backdrop for couples.",
    "Saint-Germain-des-Prés: Sophisticated Left Bank elegance with art galleries, jazz clubs, and literary cafés abound.",
    "Montmartre: Bohemian hilltop village atmosphere with stunning city views and the iconic Sacré-Cœur Basilica nearby."
  ],
  "tips": [
    "Book apartments with balconies or courtyard views for romantic Eiffel Tower sunset views and morning coffee.",
    "Choose locations near metro stations for easy exploration while staying in quieter, residential romantic neighborhoods."
  ],
  "cta": "Discover your perfect Parisian love nest today and create unforgettable memories in the world's most romantic city!"
}

  return <div>{JSON.stringify(content)}</div>
}
