import { ProductCard } from '@/components/product-card'

interface ProductSlideProps {
  transparent?: boolean
}

export const ProductSlide = ({ transparent }: ProductSlideProps) => {
  return (
    <div
      className={`${transparent ? 'opacity-30' : ''} mr-8 last:mr-0 transition-opacity duration-300 flex sm:flex-col flex-grow-0 flex-shrink-0 sm:gap-8 max-sm:justify-between gap-4 sm:basis-[48%] max-[1170px]:basis-[70%] max-[820px]:basis-full`}
    >
      <ProductCard
        imgUrl="/product-1.png"
        title="REVO Morning"
        price={99000}
        description="đắng, hậu ngọt, hương hoa"
      />
      <ProductCard
        imgUrl="/product-1.png"
        title="REVO Morning"
        price={99000}
        description="đắng, hậu ngọt, hương hoa"
      />
    </div>
  )
}
