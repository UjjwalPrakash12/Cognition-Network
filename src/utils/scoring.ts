/**
 * scoring.ts
 * Mathematical models for calculating idea metrics.
 */

export const calculateConfidence = (votes: number, forks: number, supports: number) => {
  return votes * 2 + forks * 3 + supports * 2
}

export const calculateStability = (versions: number, edits: number) => {
  return Math.max(0, 100 - edits * 5 + versions * 2)
}
