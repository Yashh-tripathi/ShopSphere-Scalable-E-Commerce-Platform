import { create } from "zustand"

interface Product {
  _id: string
  title: string
  description: string
  price: number
  category: string
}

interface ProductState {
  products: Product[]
  setProducts: (products: Product[]) => void
}

export const useProductStore = create<ProductState>((set) => ({
  products: [],   // 👈 ensures map works
  setProducts: (products) => set({ products })
}))
