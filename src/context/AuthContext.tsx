import React, { createContext, useContext, useEffect, useState, ReactNode } from "react"
import { User } from "firebase/auth"
import { subscribeToAuthChanges, loginWithGoogle, logout } from "../services/authService"

interface AuthContextType {
  user: User | null
  loading: boolean
  signIn: () => Promise<User>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | null>(null)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error("useAuth must be used within an AuthProvider")
  return context
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = subscribeToAuthChanges((u) => {
      setUser(u)
      setLoading(false)
    })
    return () => unsubscribe()
  }, [])

  const signIn = async () => {
    const user = await loginWithGoogle()
    return user
  }

  const signOutUser = async () => {
    await logout()
  }

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signOut: signOutUser }}>
      {children}
    </AuthContext.Provider>
  )
}
