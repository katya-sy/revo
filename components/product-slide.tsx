import { ProductCard } from '@/components/product-card'
import { Product } from '@/types/produst'

interface ProductSlideProps {
  transparent?: boolean
  items: Product[]
}

export const ProductSlide = ({ transparent, items }: ProductSlideProps) => {
  return (
    <div
      className={`${transparent ? 'opacity-30' : ''} mr-8 last:mr-0 transition-opacity duration-300 flex sm:flex-col flex-grow-0 flex-shrink-0 sm:gap-8 max-sm:justify-between gap-4 sm:basis-[48%] max-[1170px]:basis-[70%] max-[820px]:basis-full`}
    >
      {items.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  )
}
