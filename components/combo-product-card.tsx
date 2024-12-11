'use client'
import Image from 'next/image'
import { Button } from './ui/button'
import * as motion from 'framer-motion/client'
import { animateCard } from '@/utils/animate-config'
import { ComboProduct } from '@/types/combo-product'
import { formatPrice } from '@/utils/format-price'
import { BuyButton } from './buy-button'

interface ComboProductCardProps {
  product: ComboProduct
}

export const ComboProductCard = ({ product }: ComboProductCardProps) => {
  return (
    <motion.div
      whileInView="show"
      initial="hidden"
      variants={animateCard}
      className="flex flex-col hover:shadow-product-card-shadow transition-shadow"
    >
      <div className="flex justify-center bg-grey w-full overflow-hidden">
        <Image
          src={product.imgUrl}
          width={360}
          height={300}
          alt="combo product"
        />
      </div>
      <div className="flex flex-col gap-8 bg-white xs:py-10 p-5 sm:p-10">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <p className="font-semibold text-beige text-xl">
              {formatPrice(product.discountPrice)}
            </p>
            <p className="font-light text-blue text-sm line-through">
              {formatPrice(product.price)}
            </p>
          </div>
          <h4 className="font-bold text-blue-dark text-xl sm:text-2xl">
            {product.title}
          </h4>
          <p className="font-light text-blue-dark">{product.description}</p>
        </div>
        <div className="flex justify-between gap-2">
          <BuyButton />
          <Button intent="secondary">CHI TIẾT</Button>
        </div>
      </div>
    </motion.div>
  )
}
