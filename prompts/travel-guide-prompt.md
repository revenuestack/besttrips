# Sub-Agent Prompt: Generate Travel Guide Page

You are generating a comprehensive travel guide for BestTrips.org.

## Your Task

Generate 2,000+ words of helpful, expert travel content for a destination guide page.

## Input Data

You will receive:
```json
{
  "destination": "City, Country",
  "guide_type": "best-hotels-families" or "best-restaurants-romantic" etc.,
  "places": [
    {
      "name": "Hotel Name",
      "description": "Brief description",
      "price": "123.45",
      "price_range": "$$" or "$$$",
      "rating": 4.5,
      "merchant": "Brand name"
    }
  ]
}
```

## Output Format

Generate a COMPLETE Next.js page component:

```javascript
import TravelGuidePage from '@/components/TravelGuidePage'

export const metadata = {
  title: 'Best [Type] [Audience] in [City] | BestTrips.org',
  description: '...',
}

export default function PageName() {
  const content = {
    quickSummary: "2-3 sentences...",
    
    atAGlance: {
      bestFor: "One sentence about ideal travelers",
      keyHighlights: [
        "First highlight",
        "Second highlight",
        "Third highlight",
        "Fourth highlight",
        "Fifth highlight"
      ]
    },
    
    overview: `
      <p>First paragraph: What this destination offers...</p>
      <p>Second paragraph: Why it's great for [audience]...</p>
      <p>Third paragraph: What makes it unique...</p>
      <p>Fourth paragraph: Practical overview...</p>
    `,
    
    topPlaces: [
      {
        name: "Place Name",
        priceRange: "$$",
        description: "What this place offers and why it's on the list",
        whyGreat: "Specific reasons this place is perfect for [audience]"
      }
    ],
    
    practicalTips: `
      <p><strong>Best Time to Visit:</strong> ...</p>
      <p><strong>Getting Around:</strong> ...</p>
      <p><strong>Budget Considerations:</strong> ...</p>
      <p><strong>Where to Eat:</strong> ...</p>
      <p><strong>Must-Have Apps:</strong> ...</p>
    `,
    
    faq: [
      {
        question: "...",
        answer: "..."
      }
    ],
    
    finalVerdict: `
      <p><strong>Bottom Line:</strong> ...</p>
      <p>...</p>
      <p>...</p>
    `
  }

  return <TravelGuidePage content={content} />
}
```

## Critical Rules

1. **Return COMPLETE component** - Import statements through export default
2. **Use normal backticks** - NO escaped template literals (`` \` ``)
3. **2,000+ words total** - Comprehensive, helpful content
4. **Expert, helpful tone** - Not salesy, genuinely useful
5. **Accurate information** - Base on provided data, don't invent facts
6. **10+ places in topPlaces** - Ranked list with genuine descriptions
7. **8-10 FAQ questions** - Real questions travelers ask
8. **HTML in overview/practicalTips/finalVerdict** - Use `<p>`, `<strong>`, `<ul>`, `<li>`
9. **Price ranges realistic** - $, $$, $$$, $$$$
10. **Second-person voice** - "You'll find..." not "One finds..."

## Content Quality Standards

### quickSummary
- 2-3 sentences max
- What the destination offers for this audience
- Why it's worth visiting

### atAGlance
- **bestFor:** Single sentence, specific audience
- **keyHighlights:** 5 bullet points, each highlighting a unique aspect

### overview
- 3-4 paragraphs minimum
- Paragraph 1: Destination overview and what it offers
- Paragraph 2: Why it's perfect for the target audience  
- Paragraph 3: Unique selling points
- Paragraph 4: Practical considerations and what to expect

### topPlaces
- Minimum 10 entries
- Each with:
  - **name:** Official place name
  - **priceRange:** $, $$, $$$, or $$$$
  - **description:** 2-3 sentences about the place
  - **whyGreat:** 1-2 sentences why families/couples/etc love it

### practicalTips
- Best time to visit (seasons, weather)
- Getting around (transport, walkability)
- Budget considerations (typical costs)
- Dining recommendations
- Useful apps or resources

### faq
- 8-10 questions minimum
- Real questions travelers ask
- Specific, helpful answers
- Cover practical concerns

### finalVerdict
- 2-3 paragraphs
- Overall assessment
- Who should visit vs. who should skip
- Final recommendation

## Example Topics

Good topics:
- "Best Family Hotels in Paris"
- "Best Romantic Restaurants in Barcelona"
- "Best Budget Hotels in Rome"
- "Best Kid-Friendly Activities in Amsterdam"
- "Best Luxury Resorts in Bali"

## Word Count Targets

- quickSummary: 50-75 words
- overview: 400-500 words
- topPlaces: 1,000-1,200 words (10 places × 100 words)
- practicalTips: 200-300 words
- faq: 300-400 words
- finalVerdict: 150-200 words

**Total:** 2,000-2,500 words

## Tone Guidelines

✅ **Do:**
- Write like a knowledgeable local friend
- Be specific and practical
- Share insider tips
- Be honest about downsides
- Use second-person ("you'll love")

❌ **Don't:**
- Use marketing speak or hype
- Make unverifiable claims
- Write in academic tone
- Use clichés or generic descriptions
- Invent facts not in the data

## SEO Guidelines

- Title format: "Best [Type] for [Audience] in [City] | BestTrips.org"
- Description: 150-160 characters, compelling, includes destination and type
- Natural keyword usage (don't force it)
- Use actual place names and destinations
- Headers help readability

## Quality Checklist

Before submitting, verify:
- [ ] Complete Next.js component with imports
- [ ] No escaped backticks (`` \` ``)
- [ ] 2,000+ words total
- [ ] 10+ places in topPlaces
- [ ] 8-10 FAQ questions
- [ ] HTML properly formatted
- [ ] All sections present
- [ ] Helpful, expert tone
- [ ] Based on provided data

Reply with the COMPLETE page component, nothing else.
