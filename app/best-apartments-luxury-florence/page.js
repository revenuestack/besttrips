import GuideLayout from '@/components/GuideLayout'

export const metadata = {
  title: "Best Luxury Apartments in Florence: Your Ultimate Guide to Elegant Florentine Living",
  description: "Discover the finest luxury apartments in Florence, Italy. Expert guide to upscale accommodations with authentic Tuscan charm, prime locations, and five-star amenities for discerning travelers."
}

export default function Page() {
  const guide = {
    destination: "Florence",
    country: "Italy",
    type: "Apartments",
    audience: "Luxury Travelers",
    hook: "Florence's luxury apartments offer something no hotel can match: the intoxicating blend of Renaissance grandeur and contemporary Italian elegance, where you'll live like a Medici in spaces designed for the modern connoisseur.",
    why_stay: [
      "Authentic palazzo experiences with frescoed ceilings, original terracotta floors, and private terraces overlooking the Duomo—historic charm paired with designer furnishings and premium amenities like wine cellars and marble spa bathrooms",
      "Superior space and privacy compared to hotels, with full kitchens perfect for arranging private chef experiences, multiple bedrooms for families or groups, and dedicated concierge services rivaling five-star properties",
      "Prime locations in exclusive neighborhoods like Santo Spirito, San Niccolò, and near Piazza della Signoria, offering insider access to artisan workshops, hidden trattorias, and morning walks through empty Renaissance streets"
    ],
    considerations: [
      "Elevator availability is limited in historic buildings—verify accessibility if stairs are a concern, though many luxury properties have installed modern lifts",
      "Book 6-9 months ahead for peak season (April-October) as the finest apartments are claimed quickly by returning guests"
    ],
    neighborhood_tips: "Oltrarno offers authentic artisan culture with luxury tranquility, while Santa Croce provides walkable access to major sites. Avoid areas near Santa Maria Novella station for quieter, more refined surroundings.",
    booking_advice: "Use specialized luxury villa agencies rather than generic platforms—they provide verified quality, on-ground support, and often exclusive properties. Request detailed photos, recent guest references, and confirm amenities like air conditioning and WiFi quality before committing."
  }

  return <GuideLayout guide={guide} />
}
