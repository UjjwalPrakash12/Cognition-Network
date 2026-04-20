import React from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"

export const Navbar = () => {
  const { user, signOut } = useAuth()

  return (
    <nav className="fixed top-0 left-0 right-0 h-20 bg-slate-950/80 backdrop-blur-xl border-b border-slate-900 z-40 px-8 flex items-center justify-between">
      <Link to="/dashboard" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-900/20">
          <span className="text-white font-bold text-xl">C</span>
        </div>
        <span className="text-xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
          Cognition Network
        </span>
      </Link>

      <div className="hidden md:flex items-center gap-8">
        <Link to="/dashboard" className="text-slate-400 hover:text-white transition-colors font-medium">Dashboard</Link>
        <Link to="/graph" className="text-slate-400 hover:text-white transition-colors font-medium">Graph View</Link>
        <Link to="/battle" className="text-slate-400 hover:text-white transition-colors font-medium">Battle Arena</Link>
        
        {user ? (
          <button 
            onClick={() => signOut()}
            className="px-5 py-2 bg-red-950/20 border border-red-900/40 rounded-xl text-red-400 hover:bg-red-900/40 transition-all font-bold text-xs uppercase tracking-widest"
          >
            Sign Out
          </button>
        ) : (
          <button className="px-5 py-2 bg-slate-900 border border-slate-800 rounded-xl text-slate-100 hover:bg-slate-800 transition-all font-bold text-xs uppercase tracking-widest">
            Sign In
          </button>
        )}
      </div>

      <div className="flex items-center gap-4">
        {user && (
          <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center overflow-hidden shadow-lg shadow-blue-500/10">
            <img src={user.photoURL || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.displayName}`} alt="Avatar" />
          </div>
        )}
      </div>
    </nav>
  )
}
