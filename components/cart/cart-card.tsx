'use client'
import Image from 'next/image'
import * as motion from 'framer-motion/client'
import { animateCard } from '@/utils/animate-config'
import { Product } from '@/types/product'
import { formatPrice } from '@/utils/format-price'
import { Giftset } from '@/types/gifset'
import { ComboProduct } from '@/types/combo-product'
import { BuyButton } from '../buy-button'

interface CartCardProps {
  product: Product | Giftset | ComboProduct
}

export const CartCard = ({ product }: CartCardProps) => {
  return (
    <motion.div
      whileInView="show"
      initial="hidden"
      variants={animateCard}
      className="flex max-sm:flex-col hover:shadow-product-card-shadow transition-shadow"
    >
      <div className="flex justify-center items-center bg-grey w-max max-[535px]:w-full max-[535px]:overflow-hidden">
        <Image src={product.imgUrl} width={235} height={256} alt="product" />
      </div>
      <div className="flex flex-col sm:justify-between gap-3 xs:gap-5 bg-white xs:py-10 p-5 sm:p-10 grow">
        <div className="flex flex-col gap-1 xs:gap-2">
          <p className="font-semibold text-beige text-xl">
            {formatPrice(product.price)}
          </p>
          <h4 className="font-bold text-blue-dark text-xl sm:text-2xl">
            {product.title}
          </h4>
        </div>
        <div className="flex max-sm:flex-col sm:justify-between gap-2">
          <BuyButton product={product} />
        </div>
      </div>
    </motion.div>
  )
}
