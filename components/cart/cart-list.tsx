'use client'
import { useCartStore } from '@/store/cart-store'
import { useEffect, useState } from 'react'
import { CartCard } from './cart-card'
import { Button } from '../ui/button'
import * as Dialog from '@radix-ui/react-dialog'
import { CustomDialogPortal } from '../ui/custom-dialog-portal'
import { formatPrice } from '@/utils/format-price'
import { useTranslations } from 'next-intl'

export const CartList = () => {
  const cartProducts = useCartStore((state) => state.cartProducts)
  const setCartProducts = useCartStore((state) => state.setCartProducts)
  const [open, setOpen] = useState(false)
  const t = useTranslations('cart');

  useEffect(() => {
    const products = localStorage.getItem('cart')
    if (products) setCartProducts(JSON.parse(products))
    else setCartProducts([])
  }, [localStorage.getItem('cart')])

  return (
    <div className="relative before:top-0 before:right-[93%] before:bottom-0 before:absolute flex flex-col gap-16 max-sm:before:hidden before:bg-blue py-24 before:w-[calc(100vw-93%)] min-h-dvh container">
      <h3 className="font-black font-montserrat text-3xl text-blue text-center uppercase">
        {t('title')}
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
      {cartProducts.length > 0 ? (
        <div className="flex justify-end gap-5">
          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
              <Button>{t('pay')}</Button>
            </Dialog.Trigger>
            <CustomDialogPortal setOpen={setOpen}>
              <div className="flex flex-col gap-5">
                <Dialog.Title asChild>
                  <h2 className="font-black font-montserrat text-2xl text-center text-grey uppercase">
                    {t('modalTitle')}
                  </h2>
                </Dialog.Title>
                <Dialog.Description asChild>
                  <p className="font-light text-grey text-lg">
                    {t('modalDesc')}{' '}
                    {formatPrice(
                      cartProducts.reduce(
                        (sum, prod) => (sum += prod.product.price * prod.count),
                        0,
                      ),
                    )}
                  </p>
                </Dialog.Description>
              </div>
            </CustomDialogPortal>
          </Dialog.Root>
          <Button intent="secondary" onClick={() => setCartProducts([])}>
            {t('clear')}
          </Button>
        </div>
      ) : (
        <h3 className="font-light text-2xl text-blue text-center">
          {t('empty')}
        </h3>
      )}
    </div>
  )
}
