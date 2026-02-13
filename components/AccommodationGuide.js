// Compatibility wrapper for generated pages
// Maps AccommodationGuide API to TravelGuidePage component
import TravelGuidePage from './TravelGuidePage'

export default function AccommodationGuide({ 
  destination = '',
  country = '', 
  type = '',
  audience = '',
  hook = '',
  whyStay = [],
  considerations = [],
  neighborhoodTips = '',
  bookingAdvice = '',
  recommendations = []
}) {
  // Transform AccommodationGuide props to TravelGuidePage format
  const content = {
    quickSummary: hook || '',
    
    atAGlance: {
      bestFor: `${audience} seeking ${type ? type.toLowerCase() : 'accommodations'} in ${destination}`,
      keyHighlights: whyStay || []
    },
    
    overview: `<p>${hook || ''}</p>`,
    
    topPlaces: recommendations,
    
    practicalInfo: {
      gettingAround: neighborhoodTips || '',
      bookingTips: bookingAdvice || '',
      considerations: considerations || []
    }
  }
  
  return <TravelGuidePage content={content} />
}
