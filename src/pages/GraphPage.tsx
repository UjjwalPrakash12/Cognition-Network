import React from "react"
import { Navbar } from "../components/layout/Navbar"
import GraphView from "../components/graph/GraphView"
import { useGraph } from "../hooks/useGraph"

export default function GraphPage() {
  // Mock Data
  const ideas = [
    { id: "1", title: "Idea 1", confidenceScore: 40, tags: ["AI"] },
    { id: "2", title: "Idea 2", confidenceScore: 60, tags: ["Blockchain"] },
    { id: "3", title: "Idea 3", confidenceScore: 80, tags: ["DeFi"] },
  ]
  const relationships = [
    { source_idea_id: "1", target_idea_id: "2", type: "supports" },
    { source_idea_id: "2", target_idea_id: "3", type: "contradicts" },
  ]

  const graphData = useGraph(ideas, relationships)

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col text-white">
      <Navbar />
      
      <main className="flex-1 pt-20 flex flex-col p-8">
        <header className="mb-8 flex justify-between items-end">
          <div>
            <h1 className="text-4xl font-black mb-2">Cognition Graph</h1>
            <p className="text-slate-500">Visualizing relationships and dependencies across the ideation network.</p>
          </div>
          
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-emerald-500" />
              <span className="text-xs text-slate-400 font-bold uppercase">Supports</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500" />
              <span className="text-xs text-slate-400 font-bold uppercase">Contradicts</span>
            </div>
          </div>
        </header>

        <div className="flex-1 min-h-[500px]">
          <GraphView data={graphData} onNodeClick={(id) => console.log("Node clicked:", id)} />
        </div>
      </main>
    </div>
  )
}
