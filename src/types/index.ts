export interface Idea {
  id: string
  title: string
  description: string
  tags: string[]
  creatorId: string
  createdAt: number
  parentIdeaId?: string
  confidenceScore?: number
  stabilityScore?: number
}

export interface Vote {
  id: string
  ideaId: string
  userId: string
  type: "up" | "down"
  reasoning: string
}
