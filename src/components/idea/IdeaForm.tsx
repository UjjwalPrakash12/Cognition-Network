import React, { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "../ui/Button"
import { Input } from "../ui/Input"

export const IdeaForm = ({ onSubmit }: { onSubmit: (data: any) => void }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    tags: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({
      ...formData,
      tags: formData.tags.split(",").map(t => t.trim()).filter(Boolean)
    })
  }

  return (
    <motion.form 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      onSubmit={handleSubmit}
      className="bg-slate-900 border border-slate-800 p-8 rounded-[2rem] shadow-2xl flex flex-col gap-6"
    >
      <div className="flex flex-col gap-1">
        <h2 className="text-2xl font-bold text-slate-100">Publish New Idea</h2>
        <p className="text-slate-500 text-sm">Your idea will be etched into the Arweave blockchain.</p>
      </div>

      <Input 
        label="Idea Title"
        placeholder="e.g. Decentralized Proof of Compute"
        value={formData.title}
        onChange={(e) => setFormData(p => ({ ...p, title: e.target.value }))}
      />

      <div className="flex flex-col gap-1.5 w-full">
        <label className="text-sm font-medium text-slate-400 px-1">Detailed Description</label>
        <textarea 
          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-600/50 focus:border-blue-600 transition-all min-h-[120px]"
          placeholder="Describe your breakthrough concept..."
          value={formData.description}
          onChange={(e) => setFormData(p => ({ ...p, description: e.target.value }))}
        />
      </div>

      <Input 
        label="Tags (comma separated)"
        placeholder="AI, Blockchain, UX"
        value={formData.tags}
        onChange={(e) => setFormData(p => ({ ...p, tags: e.target.value }))}
      />

      <Button type="submit" variant="primary" size="lg" className="mt-2">
        Broadcast to Network
      </Button>
    </motion.form>
  )
}
