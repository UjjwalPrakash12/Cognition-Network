import React from "react"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  icon?: React.ReactNode
}

export const Input = ({ label, error, icon, className = "", ...props }: InputProps) => {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && (
        <label className="text-sm font-medium text-slate-400 px-1">
          {label}
        </label>
      )}
      <div className="relative group">
        {icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-500 transition-colors">
            {icon}
          </div>
        )}
        <input
          className={`
            w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 placeholder:text-slate-600
            focus:outline-none focus:ring-2 focus:ring-blue-600/50 focus:border-blue-600 transition-all
            ${icon ? "pl-11" : ""}
            ${error ? "border-red-500 focus:ring-red-500/50" : ""}
            ${className}
          `}
          {...props}
        />
      </div>
      {error && (
        <span className="text-xs text-red-500 px-1 mt-0.5">
          {error}
        </span>
      )}
    </div>
  )
}
