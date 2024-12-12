'use client'
import { useCartStore } from '@/store/cart-store'
import { useEffect } from 'react'
import { CartCard } from './cart-card'

export const CartList = () => {
  const cartProducts = useCartStore((state) => state.cartProducts)
  const setCartProducts = useCartStore((state) => state.setCartProducts)

  useEffect(() => {
    const products = localStorage.getItem('cart')
    if (products) setCartProducts(JSON.parse(products))
    else setCartProducts([])
  }, [localStorage.getItem('cart')])

  return (
    <div className="relative before:top-0 before:right-[93%] before:bottom-0 before:absolute flex flex-col gap-16 max-sm:before:hidden before:bg-blue py-24 before:w-[calc(100vw-93%)] min-h-dvh container">
      <h3 className="font-black font-montserrat text-3xl text-blue text-center uppercase">
        Your cart
      </h3>
      <div className="items-stretch gap-8 grid grid-cols-2 max-[1130px]:grid-cols-1 max-sm:grid-cols-2 max-xs:grid-cols-1">
        {cartProducts &&
          cartProducts.map((product) => (
            <div
              className="relative"
              key={`${product.product.id}${product.product.title}`}
            >
              <CartCard product={product.product} />
            </div>
          ))}
      </div>
    </div>
  )
}
