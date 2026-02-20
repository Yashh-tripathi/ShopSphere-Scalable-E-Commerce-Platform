import { create } from "zustand";

interface CartState{
    refresh: number
    triggerRefresh: () => void
}

export const useCartStore = create<CartState>((set) => ({
    refresh:0,
    triggerRefresh: () => set((s) => ({ refresh: s.refresh + 1}))
}));
