import { Navigate } from "react-router-dom"
import { useAuthStore } from "../store/auth.store"
import { useEffect, useState } from "react";

const ProtectedRoute = ({ children }: { children: React.ReactNode}) => {
  const token = useAuthStore((s) => s.token);

  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    setHydrated(true)
  }, [])

  if (!hydrated) return null


  if (!token) {
    return <Navigate to="/login" replace />
  }

  return <>{children}</>
}

export default ProtectedRoute
