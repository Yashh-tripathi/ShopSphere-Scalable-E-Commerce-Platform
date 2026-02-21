import { create } from "zustand";

interface CartState{
    refresh: number
    count: number
    triggerRefresh: () => void
    setCount: (count: number) => void
}

export const useCartStore = create<CartState>((set) => ({
    refresh:0,
    count: 0,
    triggerRefresh: () => set((s) => ({ refresh: s.refresh + 1})),
    setCount: (count) => set({ count })
}));
