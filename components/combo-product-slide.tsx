import { ComboProduct } from '@/types/combo-product'
import { ComboProductCard } from './combo-product-card'

interface ProductSlideProps {
  transparent?: boolean
  product: ComboProduct
}

export const ComboProductSlide = ({
  transparent,
  product,
}: ProductSlideProps) => {
  return (
    <div
      className={`${transparent ? 'opacity-30' : ''} mr-8 last:mr-0 transition-opacity duration-300 flex-grow-0 flex-shrink-0 lg:basis-[31%] max-lg:basis-[48%] max-[670px]:basis-full`}
    >
      <ComboProductCard product={product} />
    </div>
  )
}
