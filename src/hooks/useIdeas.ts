import { useState, useEffect } from "react"
import { Idea } from "../types"

export const useIdeas = () => {
  const [ideas, setIdeas] = useState<Idea[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Mock simulation of fetching data
    const timer = setTimeout(() => {
      setIdeas([
        {
          id: "1",
          title: "Initial Concept",
          description: "A placeholder idea to get you started.",
          tags: ["Genesis"],
          creatorId: "system",
          createdAt: Date.now(),
          confidenceScore: 100,
          stabilityScore: 100
        }
      ])
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return { ideas, isLoading }
}
