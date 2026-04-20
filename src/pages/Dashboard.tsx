import React, { useState } from "react"
import { motion } from "framer-motion"
import { Navbar } from "../components/layout/Navbar"
import { IdeaCard } from "../components/idea/IdeaCard"
import { IdeaForm } from "../components/idea/IdeaForm"
import { useIdeasContext } from "../context/IdeaContext"
import { useAuth } from "../context/AuthContext"
import { Skeleton } from "../components/ui/Skeleton"

export default function Dashboard() {
  const { user } = useAuth()
  const { ideas, loading, addIdea, removeIdea } = useIdeasContext()
  const [showForm, setShowForm] = useState(false)

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-blue-500/30">
      <Navbar />
      
      <main className="pt-32 pb-20 px-8 max-w-7xl mx-auto">
        <header className="flex justify-between items-end mb-12">
          <div>
            <h1 className="text-5xl font-black tracking-tight mb-2">Network Feed</h1>
            <p className="text-slate-500 font-medium">
              Welcome back, <span className="text-blue-400">{user?.displayName || "Investigator"}</span>. Exploring the cognition web.
            </p>
          </div>
          
          <button 
            onClick={() => setShowForm(!showForm)}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-500 rounded-2xl font-bold transition-all shadow-xl shadow-blue-900/20"
          >
            {showForm ? "Close Editor" : "New Insight"}
          </button>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2, 3, 4].map(i => <Skeleton key={i} className="h-64 rounded-3xl" />)}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {ideas.map(idea => (
                  <IdeaCard 
                    key={idea.id} 
                    idea={idea} 
                    onVote={(type) => console.log("Vote", type, "on", idea.id)}
                    onDelete={() => removeIdea(idea.id)}
                  />
                ))}
                {ideas.length === 0 && (
                  <div className="col-span-2 py-20 text-center border-2 border-dashed border-slate-900 rounded-[3rem]">
                    <p className="text-slate-600 font-bold uppercase tracking-widest">No insights found in the network.</p>
                  </div>
                )}
              </div>
            )}
          </div>

          <aside className="lg:col-span-4 flex flex-col gap-8">
            {showForm && (
              <IdeaForm onSubmit={async (data) => {
                await addIdea({
                  ...data,
                  creatorId: user?.uid || "anonymous",
                  confidenceScore: 50,
                  stabilityScore: 100
                })
                setShowForm(false)
              }} />
            )}

            <div className="bg-slate-900/40 border border-slate-900 p-8 rounded-[2rem]">
              <h2 className="text-xl font-bold mb-6">Trending Tags</h2>
              <div className="flex flex-wrap gap-2">
                {["Zero Knowledge", "LLMs", "DeFi", "Physics", "BioTech", "Energy"].map(tag => (
                  <button key={tag} className="px-4 py-1.5 bg-slate-800/50 hover:bg-slate-800 border border-slate-800 rounded-full text-sm text-slate-400 hover:text-white transition-all">
                    #{tag}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600/20 to-cyan-500/20 border border-blue-500/20 p-8 rounded-[2rem] relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="font-bold text-lg mb-2">Network Score</h3>
                <p className="text-sm text-slate-400 mb-4 leading-relaxed">Permanent storage on Firestore ensures your research persists forever.</p>
                <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden">
                  <div className="h-full w-[85%] bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  )
}
