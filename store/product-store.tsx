import { Product } from '@/types/product'
import { create } from 'zustand'

interface ProductStoreProps {
  products: Product[]
  setProducts: (products: Product[]) => void
}

export const useProductStore = create<ProductStoreProps>()((set) => ({
  products: [],
  setProducts: (products) => set({ products: products }),
}))
