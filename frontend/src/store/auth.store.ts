import { create } from "zustand"
import { persist } from "zustand/middleware"

interface AuthState {
  token: string | null
  role: string| null
  setAuth: (token: string, role: string) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      role: null,

      setAuth: (token,role) => set({ token, role }),

      logout: () => {
        localStorage.removeItem("auth-storage");
        set({ token: null, role: null });
      }
    }),
    {
      name: "auth-storage", // localStorage key,
      version: 2,
      migrate: (persistedState: any, version) => {
        if (version === 1) {
          return {
            token: persistedState.token,
            role: null
          }
        }
        return persistedState
      }
    }
  )
)
