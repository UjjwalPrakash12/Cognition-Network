import React from "react"
import { motion } from "framer-motion"
import { Idea } from "../../types"
import { useAuth } from "../../context/AuthContext"

interface IdeaCardProps {
  idea: Idea
  onVote: (type: "up" | "down") => void
  onDelete?: () => void
}

export const IdeaCard = ({ idea, onVote, onDelete }: IdeaCardProps) => {
  const { user } = useAuth()
  const isOwner = user?.uid === idea.creatorId

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-6 rounded-3xl hover:bg-slate-900/80 transition-all group relative"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex gap-2">
          {idea.tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-blue-600/10 text-blue-400 text-xs font-bold rounded-full border border-blue-600/20 uppercase tracking-tighter">
              {tag}
            </span>
          ))}
        </div>
        
        {isOwner && onDelete && (
          <button 
            onClick={onDelete}
            className="p-2 opacity-0 group-hover:opacity-100 text-slate-600 hover:text-red-500 transition-all"
            title="Delete this insight"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
          </button>
        )}
      </div>

      <h3 className="text-xl font-bold text-slate-100 mb-2 leading-tight">
        {idea.title}
      </h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
        {idea.description}
      </p>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-slate-950/50 rounded-2xl p-3 border border-slate-800">
          <span className="text-[10px] font-bold text-slate-500 uppercase block mb-1">Confidence</span>
          <span className="text-lg font-mono text-cyan-400 font-bold">{idea.confidenceScore ?? 0}%</span>
        </div>
        <div className="bg-slate-950/50 rounded-2xl p-3 border border-slate-800">
          <span className="text-[10px] font-bold text-slate-500 uppercase block mb-1">Stability</span>
          <span className="text-lg font-mono text-emerald-400 font-bold">{idea.stabilityScore ?? 0}%</span>
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-slate-800/50">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => onVote("up")}
            className="flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
            <span className="font-bold text-sm">UP</span>
          </button>
          <button 
            onClick={() => onVote("down")}
            className="flex items-center gap-2 text-slate-400 hover:text-red-400 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            <span className="font-bold text-sm">DOWN</span>
          </button>
        </div>
        
        <button className="text-blue-500 font-bold text-xs hover:underline uppercase tracking-widest px-1">
          Details →
        </button>
      </div>
    </motion.div>
  )
}
