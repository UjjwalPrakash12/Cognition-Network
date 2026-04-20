import React, { Suspense, lazy } from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { IdeaProvider } from "./context/IdeaContext"
import { AuthProvider } from "./context/AuthContext"
import { ProtectedRoute } from "./components/ProtectedRoute"

const Login = lazy(() => import("./pages/Login"))
const Dashboard = lazy(() => import("./pages/Dashboard"))
const GraphPage = lazy(() => import("./pages/GraphPage"))
const IdeaBattle = lazy(() => import("./pages/IdeaBattle"))

function App() {
  return (
    <AuthProvider>
      <IdeaProvider>
        <Router>
          <Suspense fallback={
            <div className="min-h-screen bg-slate-950 flex items-center justify-center">
              <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
            </div>
          }>
            <Routes>
              <Route path="/login" element={<Login />} />
              
              <Route path="/dashboard" element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } />
              
              <Route path="/graph" element={
                <ProtectedRoute>
                  <GraphPage />
                </ProtectedRoute>
              } />
              
              <Route path="/battle" element={
                <ProtectedRoute>
                  <IdeaBattle />
                </ProtectedRoute>
              } />

              <Route path="/" element={<Navigate to="/login" replace />} />
            </Routes>
          </Suspense>
        </Router>
      </IdeaProvider>
    </AuthProvider>
  )
}

export default App
