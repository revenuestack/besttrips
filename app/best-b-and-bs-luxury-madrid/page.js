export const metadata = {
  title: "Best Luxury B&Bs in Madrid: Boutique Charm Meets Spanish Elegance",
  description: "Discover Madrid's finest luxury bed and breakfasts. Intimate boutique accommodations in historic palaces and elegant townhouses with personalized service."
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Best Luxury B&Bs in Madrid</h1>
      
      <div className="prose prose-lg">
        <p className="lead text-xl mb-6">
          Madrid's luxury B&Bs offer discerning travelers an intimate alternative to grand hotels, combining the personalized service of a private residence with the sophistication of boutique accommodations. Nestled in restored 19th-century palaces, elegant townhouses, and charming heritage buildings, these exclusive retreats provide an authentic taste of Spanish hospitality in the heart of one of Europe's most vibrant capitals.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Why Stay Here</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Personalized service with attentive hosts who curate bespoke Madrid experiences and insider recommendations</li>
          <li>Historic architecture featuring original frescoes, ornate moldings, and period furnishings blended with modern luxury amenities</li>
          <li>Gourmet breakfasts showcasing Spanish specialties, artisan pastries, and locally-sourced ingredients served in intimate dining rooms</li>
          <li>Prime locations in prestigious neighborhoods like Salamanca, Chueca, and literary Barrio de las Letras, walking distance to museums and dining</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Things to Know</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Limited rooms mean advance booking is essential, especially during peak season (April-June, September-October)</li>
          <li>Most luxury B&Bs occupy historic buildings with original staircases; verify elevator availability if mobility is a concern</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">About the Area</h2>
        <p>
          Madrid's luxury B&Bs cluster in the city's most elegant barrios, where tree-lined boulevards, designer boutiques, and Michelin-starred restaurants create an atmosphere of refined cosmopolitan living within walking distance of the Prado, Retiro Park, and Royal Palace.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
          <p className="text-lg font-semibold">
            Book your intimate Madrid escape at a luxury B&B where Spanish elegance meets personalized hospitality.
          </p>
        </div>
      </div>
    </div>
  );
}
