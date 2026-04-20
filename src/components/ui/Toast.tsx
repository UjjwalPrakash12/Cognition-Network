import React from "react"
import { motion, AnimatePresence } from "framer-motion"

interface ToastProps {
  message: string
  type?: "success" | "error" | "info"
  onClose: () => void
}

export const Toast = ({ message, type = "info", onClose }: ToastProps) => {
  const colors = {
    success: "bg-emerald-600 border-emerald-500 shadow-emerald-900/20",
    error: "bg-red-600 border-red-500 shadow-red-900/20",
    info: "bg-blue-600 border-blue-500 shadow-blue-900/20",
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className={`
        fixed bottom-6 right-6 px-6 py-3 rounded-2xl border text-white shadow-2xl z-50
        flex items-center gap-4 ${colors[type]}
      `}
    >
      <span className="font-medium">{message}</span>
      <button 
        onClick={onClose}
        className="text-white/60 hover:text-white transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
      </button>
    </motion.div>
  )
}
