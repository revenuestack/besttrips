export const metadata = {
  title: 'Best Apartments for Luxury in Barcelona',
  description: 'Barcelona\'s luxury apartment scene offers discerning travelers an unparalleled blend of modernist architecture, Mediterranean charm, and world-class amenities.'
}

export default function Page() {
  const content = {
    "intro": "Barcelona's luxury apartment scene offers discerning travelers an unparalleled blend of modernist architecture, Mediterranean charm, and world-class amenities. From Gaudí-adorned boulevards to exclusive beachfront properties, the city's premium accommodations provide the perfect base for experiencing Catalonia's vibrant capital. These meticulously designed spaces combine historic elegance with contemporary comfort, offering privacy and sophistication that hotels simply cannot match.",
    "why_stay": [
      "Experience authentic Barcelonan living with spacious terraces, private pools, and personalized concierge services at your fingertips.",
      "Enjoy prime locations in architectural masterpieces, many featuring original period details alongside cutting-edge smart home technology.",
      "Benefit from complete privacy and flexibility with full kitchens, allowing intimate dining experiences with private chefs."
    ],
    "neighborhoods": [
      "Eixample: Home to Gaudí's masterpieces, wide boulevards, and stunning modernist buildings with high ceilings and ornate details.",
      "Barceloneta: Exclusive beachfront living with Mediterranean views, upscale dining, and immediate access to golden sand beaches.",
      "Gràcia: Charming bohemian village atmosphere with boutique shopping, artisan cafés, and beautifully renovated historic apartments."
    ],
    "tips": [
      "Book apartments with rooftop access for private sunset views over Sagrada Família and guaranteed summer breeze.",
      "Consider properties offering dedicated parking and airport transfers, as Barcelona's narrow streets can challenge luxury vehicles."
    ],
    "cta": "Discover your perfect Barcelona luxury apartment today and unlock an exclusive Mediterranean lifestyle where Catalan culture meets five-star comfort."
  }
  
  return <div>{JSON.stringify(content)}</div>
}
