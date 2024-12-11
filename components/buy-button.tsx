'use client'
import { Product } from '@/types/product'
import { Button } from './ui/button'
import { Giftset } from '@/types/gifset'
import { ComboProduct } from '@/types/combo-product'
import { useCartStore } from '@/store/cart-store'

interface BuyButtonProps {
  product: Product | Giftset | ComboProduct
  className?: string
}

export const BuyButton = ({ product, className }: BuyButtonProps) => {
  const cartProducts = useCartStore((state) => state.cartProducts)
  const setCartProducts = useCartStore((state) => state.setCartProducts)

  const addCart = () => {
    setCartProducts([...cartProducts, product])
    // cartProducts.find(
    //   (prod) => prod.id === product.id && prod.title === product.title,
    // )
  }

  return cartProducts.find(
    (prod) => prod.id === product.id && prod.title === product.title,
  ) ? (
    <Button className={className} onClick={addCart}>
      1
    </Button>
  ) : (
    <Button className={className} onClick={addCart}>
      MUA NGAY
    </Button>
  )
}
