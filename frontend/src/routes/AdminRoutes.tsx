import { Navigate } from "react-router-dom"
import { useAuthStore } from "@/store/auth.store"

const AdminRoutes = ({children}: {children: React.ReactNode}) => {
    const role = useAuthStore((s) => s.role);
    if(role !== "ADMIN"){
        return <Navigate to="/home" replace />
    }
  return <>{children}</>
}

export default AdminRoutes