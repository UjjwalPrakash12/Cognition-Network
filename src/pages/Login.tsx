import React, { useState } from "react"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import { Button } from "../components/ui/Button"

export default function Login() {
  const { signIn } = useAuth()
  const navigate = useNavigate()
  const [error, setError] = useState<string | null>(null)

  const handleLogin = async () => {
    try {
      await signIn()
      navigate("/dashboard")
    } catch (err: any) {
      console.error(err)
      setError(err.message || "An unknown error occurred during sign in.")
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-8 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-600/20 rounded-full blur-[120px] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full text-center relative z-10"
      >
        <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl mx-auto mb-8 flex items-center justify-center shadow-2xl shadow-blue-900/40">
          <span className="text-white font-black text-4xl">C</span>
        </div>
        
        <h1 className="text-4xl font-black text-white mb-4 tracking-tight">Access the Grid</h1>
        <p className="text-slate-400 mb-12 leading-relaxed">
          The Decentralized Ideation Network. Secure your insights on the permanent web.
        </p>

        {error && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-sm font-medium">
            {error}
          </div>
        )}

        <div className="space-y-4">
          <Button 
            variant="primary" 
            size="lg" 
            className="w-full py-4 text-lg"
            onClick={handleLogin}
          >
            Sign in with Google
          </Button>
          <div className="flex items-center gap-4 py-2">
            <div className="h-px bg-slate-800 flex-1" />
            <span className="text-slate-600 text-xs font-bold uppercase tracking-widest">or</span>
            <div className="h-px bg-slate-800 flex-1" />
          </div>
          <Button 
            variant="outline" 
            size="lg" 
            className="w-full py-4 text-lg border-slate-800 hover:bg-slate-900"
            onClick={() => navigate("/dashboard")}
          >
            Continue as Guest (View Mode)
          </Button>
        </div>

        <p className="mt-12 text-slate-600 text-sm">
          Secured by <span className="text-slate-400 font-bold">Firebase Auth</span>
        </p>
      </motion.div>
    </div>
  )
}
