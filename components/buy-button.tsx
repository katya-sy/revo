'use client'
import { Product } from '@/types/product'
import { Button } from './ui/button'
import { Giftset } from '@/types/gifset'
import { ComboProduct } from '@/types/combo-product'
import { useCartStore } from '@/store/cart-store'
import { useEffect, useState } from 'react'

interface BuyButtonProps {
  product: Product | Giftset | ComboProduct
  className?: string
}

export const BuyButton = ({ product, className }: BuyButtonProps) => {
  const cartProducts = useCartStore((state) => state.cartProducts)
  const setCartProducts = useCartStore((state) => state.setCartProducts)
  const [count, setCount] = useState<number>(1)

  useEffect(() => {
    const currentProduct = cartProducts.find(
      (prod) =>
        prod.product.id === product.id && prod.product.title === product.title,
    )
    if (currentProduct) setCount(currentProduct.count)
  }, [product])

  const addCart = () => {
    setCartProducts([...cartProducts, { product, count: 1 }])
    setCount(1)
    // cartProducts.find(
    //   (prod) => prod.id === product.id && prod.title === product.title,
    // )
  }

  const increaseProduct = () => {
    const currCount = count + 1
    setCount(currCount)
    setCartProducts(
      cartProducts.map((prod) => {
        if (
          prod.product.id === product.id &&
          prod.product.title === product.title
        ) {
          return { product: prod.product, count: currCount }
        }
        return prod
      }),
    )
  }

  const decreaseProduct = () => {
    if (count === 1) {
      const pr = cartProducts.find(
        (prod) =>
          prod.product.id === product.id &&
          prod.product.title === product.title,
      )
      setCartProducts(cartProducts.filter((prod) => prod !== pr))
      setCount(0)
    } else {
      const currCount = count - 1
      setCount(currCount)
      setCartProducts(
        cartProducts.map((prod) => {
          if (
            prod.product.id === product.id &&
            prod.product.title === product.title
          ) {
            return { product: prod.product, count: currCount }
          }
          return prod
        }),
      )
    }
  }

  return cartProducts.find(
    (prod) =>
      prod.product.id === product.id && prod.product.title === product.title,
  ) ? (
    <div className="flex justify-between items-center gap-3 bg-beige px-4 py-1 rounded-3xl h-10 font-bold text-grey uppercase whitespace-nowrap">
      <button
        className="flex justify-center items-center opacity-70 hover:opacity-100 rounded-full w-6 h-6 text-3xl transition-opacity duration-300"
        onClick={decreaseProduct}
      >
        -
      </button>
      <span>{count}</span>
      <button
        className="flex justify-center items-center opacity-70 hover:opacity-100 rounded-full w-6 h-6 text-3xl transition-opacity duration-300"
        onClick={increaseProduct}
      >
        +
      </button>
    </div>
  ) : (
    <Button className={className} onClick={addCart}>
      MUA NGAY
    </Button>
  )
}
