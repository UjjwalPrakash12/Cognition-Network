/**
 * validators.ts
 * Validation logic for project inputs.
 */

export const validateIdea = (idea: { title: string; description: string }) => {
  if (!idea.title || idea.title.length < 3) return "Invalid title"
  if (!idea.description) return "Description required"
  return null
}
