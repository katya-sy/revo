import { ComboProduct } from '@/types/combo-product'
import { Giftset } from '@/types/gifset'
import { Product } from '@/types/product'
import { create } from 'zustand'

interface CartStoreProps {
  cartProducts: {
    product: Product | Giftset | ComboProduct
    count: number
  }[]
  setCartProducts: (
    products: {
      product: Product | Giftset | ComboProduct
      count: number
    }[],
  ) => void
}

export const useCartStore = create<CartStoreProps>()((set) => ({
  cartProducts: [],
  setCartProducts: (products) => {
    set({ cartProducts: products })
    localStorage.setItem('cart', JSON.stringify(products))
  },
}))
