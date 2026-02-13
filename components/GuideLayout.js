// Compatibility wrapper for generated pages
// Maps GuideLayout API to TravelGuidePage component
import TravelGuidePage from './TravelGuidePage'

export default function GuideLayout({ guide = {} }) {
  // Transform GuideLayout props to TravelGuidePage format
  const content = {
    quickSummary: guide.hook || '',
    
    atAGlance: {
      bestFor: `${guide.audience || ''} seeking ${guide.type ? guide.type.toLowerCase() : 'accommodations'} in ${guide.destination || ''}`,
      keyHighlights: guide.why_stay || []
    },
    
    overview: `<p>${guide.hook || ''}</p>`,
    
    topPlaces: [], // Could be populated if guide has recommendations
    
    practicalInfo: {
      gettingAround: guide.neighborhood_tips || '',
      bookingTips: guide.booking_advice || '',
      considerations: guide.considerations || []
    }
  }
  
  return <TravelGuidePage content={content} />
}
