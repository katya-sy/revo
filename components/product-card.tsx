'use client'
import Image from 'next/image'
import { Button } from './ui/button'
import * as motion from 'framer-motion/client'
import { animateCard } from '@/utils/animate-config'
import { Product } from '@/types/product'
import { formatPrice } from '@/utils/format-price'
import { BuyButton } from './buy-button'
import { useTranslations } from 'next-intl'

interface ProductCardProps {
  product: Product
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const t = useTranslations('buttons');

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
        <p className="font-light text-blue-dark">{product.description}</p>
        <div className="flex max-sm:flex-col sm:justify-between gap-2">
          <BuyButton product={product} />
          <Button intent="secondary">{t('more')}</Button>
        </div>
      </div>
    </motion.div>
  )
}
