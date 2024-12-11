'use client'
import { useCartStore } from '@/store/cart-store'
import { Product } from '@/types/product'
import { useEffect } from 'react'
import { Giftset } from '@/types/gifset'
import { ComboProduct } from '@/types/combo-product'
import { CartCard } from './cart-card'

interface CartListProps {
  data?: {
    products: Product[]
    comboProducts: ComboProduct[]
    giftsets: Giftset[]
  }
}

export const CartList = ({ data }: CartListProps) => {
  const cartProducts = useCartStore((state) => state.cartProducts)
  const setCartProducts = useCartStore((state) => state.setCartProducts)

  useEffect(() => {
    const products = localStorage.getItem('cart')
    if (products) setCartProducts(JSON.parse(products))
    else setCartProducts([])
  }, [localStorage.getItem('cart')])

  return (
    <div className="relative before:top-0 before:right-[93%] before:bottom-0 before:absolute flex flex-col gap-16 max-sm:before:hidden before:bg-blue py-24 before:w-[calc(100vw-93%)] container">
      <h3 className="font-black font-montserrat text-3xl text-blue text-center uppercase">
        Your cart
      </h3>
      <div className="gap-8 grid grid-cols-2 max-[1130px]:grid-cols-1 max-sm:grid-cols-2 max-xs:grid-cols-1">
        {cartProducts &&
          cartProducts.map((product) => (
            <div className="relative" key={`${product.id}${product.title}`}>
              <CartCard product={product} />
            </div>
          ))}
      </div>
    </div>
  )
}
