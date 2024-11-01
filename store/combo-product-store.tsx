import { ComboProduct } from '@/types/combo-product'
import { create } from 'zustand'

interface ComboProductStoreProps {
  comboProducts: ComboProduct[]
  setComboProducts: (products: ComboProduct[]) => void
}

export const useComboProductStore = create<ComboProductStoreProps>()((set) => ({
  comboProducts: [],
  setComboProducts: (products) => set({ comboProducts: products }),
}))
