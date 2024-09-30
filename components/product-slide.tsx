import { ProductCard } from '@/components/product-card'

interface ProductSlideProps {
  transparent?: boolean
}

export const ProductSlide = ({ transparent }: ProductSlideProps) => {
  return (
    <div
      className={`${transparent ? 'opacity-30' : ''} mr-8 transition-opacity duration-300 flex flex-col flex-grow-0 flex-shrink-0 gap-8 basis-[48%]`}
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
