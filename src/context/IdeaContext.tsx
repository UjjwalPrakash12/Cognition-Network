import React, { createContext, useContext, useEffect, useState, ReactNode } from "react"
import { Idea } from "../types"
import { streamIdeas, createIdea as fbCreateIdea, deleteIdea as fbDeleteIdea } from "../services/ideaService"

interface IdeaContextType {
  ideas: Idea[]
  loading: boolean
  addIdea: (idea: Omit<Idea, "id" | "createdAt">) => Promise<void>
  removeIdea: (id: string) => Promise<void>
}

const IdeaContext = createContext<IdeaContextType | null>(null)

export const useIdeasContext = () => {
  const context = useContext(IdeaContext)
  if (!context) throw new Error("useIdeasContext must be used within an IdeaProvider")
  return context
}

export const IdeaProvider = ({ children }: { children: ReactNode }) => {
  const [ideas, setIdeas] = useState<Idea[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = streamIdeas((newIdeas) => {
      setIdeas(newIdeas)
      setLoading(false)
    })
    return () => unsubscribe()
  }, [])

  const addIdea = async (idea: Omit<Idea, "id" | "createdAt">) => {
    await fbCreateIdea(idea)
  }

  const removeIdea = async (id: string) => {
    await fbDeleteIdea(id)
  }

  return (
    <IdeaContext.Provider value={{ ideas, loading, addIdea, removeIdea }}>
      {children}
    </IdeaContext.Provider>
  )
}
