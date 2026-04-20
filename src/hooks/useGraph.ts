import { useMemo } from "react"

export const useGraph = (ideas: any[], relationships: any[]) => {
  return useMemo(() => {
    const nodes = ideas.map(i => ({
      id: i.id,
      title: i.title,
      val: i.confidenceScore || 1,
      group: i.tags?.[0] || "default"
    }))

    const links = relationships.map(r => ({
      source: r.source_idea_id,
      target: r.target_idea_id,
      type: r.type
    }))

    return { nodes, links }
  }, [ideas, relationships])
}
