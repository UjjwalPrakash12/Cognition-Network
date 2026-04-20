import { Vote } from "../types"

export const castVote = async (vote: Partial<Vote>): Promise<void> => {
  console.log("Casting vote:", vote)
}

export const getVotesForIdea = async (ideaId: string): Promise<Vote[]> => {
  return []
}
