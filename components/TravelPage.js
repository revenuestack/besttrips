// Compatibility wrapper for hotel/property pages with raw data format
import TravelGuidePage from './TravelGuidePage'

export default function TravelPage({ 
  hook = '',
  why_stay = [],
  watch_out = [],
  amenities = '',
  cta = '',
  content
}) {
  // If content is already formatted, use it directly
  if (content) {
    return <TravelGuidePage content={content} />
  }
  
  // Transform raw data format to content format
  const formattedContent = {
    quickSummary: hook,
    
    atAGlance: {
      bestFor: "Transit travelers and business visitors to Istanbul Airport",
      keyHighlights: why_stay
    },
    
    overview: `<p>${hook}</p>${amenities ? `<p>${amenities}</p>` : ''}`,
    
    topPlaces: [],
    
    practicalInfo: {
      considerations: watch_out,
      bookingTips: cta
    }
  }
  
  return <TravelGuidePage content={formattedContent} />
}
