import { useState, useMemo, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Navbar } from "../components/layout/Navbar"

export default function IdeaBattle() {
  const [votesA, setVotesA] = useState(0)
  const [votesB, setVotesB] = useState(0)

  // Optimization: useMemo for derived state
  const winner = useMemo(() => {
    if (votesA === votesB) return "Draw"
    return votesA > votesB ? "Quantum Caching" : "Neural Sync"
  }, [votesA, votesB])

  // Optimization: useCallback for event handlers
  const handleVoteA = useCallback(() => setVotesA(v => v + 1), [])
  const handleVoteB = useCallback(() => setVotesB(v => v + 1), [])

  return (
    <div className="min-h-screen bg-slate-950 p-8 text-white font-sans selection:bg-blue-500/30">
      <Navbar />
      
      <header className="mb-12 pt-20 text-center">
        <h1 className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent uppercase tracking-tight">
          Idea Battle Arena
        </h1>
        <p className="text-slate-500 mt-2 font-medium">Pit two concepts against each other and see which one prevails.</p>
      </header>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Idea A */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-[2.5rem] p-10 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 text-8xl font-black text-slate-800/20 pointer-events-none">A</div>
          <h2 className="text-2xl font-black mb-4 text-cyan-400 tracking-tight">Quantum Caching Strategy</h2>
          <p className="text-slate-400 mb-12 leading-relaxed font-medium">
            Utilizing probabilistic state management to predict data access patterns before they occur.
          </p>
          <div className="flex items-center justify-between">
            <button 
              onClick={handleVoteA}
              className="px-10 py-4 bg-cyan-600 hover:bg-cyan-500 transition-all rounded-2xl font-black shadow-xl shadow-cyan-900/20 active:scale-95"
            >
              Support A
            </button>
            <span className="text-4xl font-black tabular-nums text-cyan-400">{votesA}</span>
          </div>
        </motion.div>

        {/* Idea B */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-[2.5rem] p-10 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 text-8xl font-black text-slate-800/20 pointer-events-none">B</div>
          <h2 className="text-2xl font-black mb-4 text-blue-500 tracking-tight">Distributed Neural Sync</h2>
          <p className="text-slate-400 mb-12 leading-relaxed font-medium">
            Real-time synchronization of decentralized neural nodes for low-latency inference.
          </p>
          <div className="flex items-center justify-between">
            <button 
              onClick={handleVoteB}
              className="px-10 py-4 bg-blue-600 hover:bg-blue-500 transition-all rounded-2xl font-black shadow-xl shadow-blue-900/20 active:scale-95"
            >
              Support B
            </button>
            <span className="text-4xl font-black tabular-nums text-blue-500">{votesB}</span>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-16 text-center"
        >
          <div className="inline-block px-12 py-4 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl">
            <span className="text-slate-500 uppercase tracking-widest text-sm font-bold block mb-1">Current Leader</span>
            <span className="text-3xl font-bold text-white">{winner}</span>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
