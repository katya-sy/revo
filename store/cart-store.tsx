import { ComboProduct } from '@/types/combo-product'
import { Giftset } from '@/types/gifset'
import { Product } from '@/types/product'
import { create } from 'zustand'

interface CartStoreProps {
  cartProducts: Product[] | Giftset[] | ComboProduct[]
  setCartProducts: (products: Product[] | Giftset[] | ComboProduct[]) => void
}

export const useCartStore = create<CartStoreProps>()((set) => ({
  cartProducts: [],
  setCartProducts: (products) => set({ cartProducts: products }),
}))
