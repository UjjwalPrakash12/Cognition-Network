/**
 * aiService.ts
 * Modular AI processing logic.
 */

export const summarizeIdea = async (text: string) => {
  return text.slice(0, 120) + "..."
}

export const findSimilarIdeas = (ideas: any[], target: string) => {
  return ideas.filter(i =>
    i.description.toLowerCase().includes(target.toLowerCase())
  )
}

export const generateInsight = (idea: any) => {
  if (idea.stabilityScore > 80) return "Highly stable idea"
  if (idea.confidenceScore > 80) return "Highly trusted idea"
  return "Emerging idea"
}
