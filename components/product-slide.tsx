import { ProductCard } from '@/components/product-card'

interface ProductSlideProps {
  transparent?: boolean
  items: {
    id: number
    imgUrl: string
    title: string
    price: number
    description: string
  }[]
}

export const ProductSlide = ({ transparent, items }: ProductSlideProps) => {
  return (
    <div
      className={`${transparent ? 'opacity-30' : ''} mr-8 last:mr-0 transition-opacity duration-300 flex sm:flex-col flex-grow-0 flex-shrink-0 sm:gap-8 max-sm:justify-between gap-4 sm:basis-[48%] max-[1170px]:basis-[70%] max-[820px]:basis-full`}
    >
      {items.map((item) => (
        <ProductCard
          key={item.id}
          imgUrl={item.imgUrl}
          title={item.title}
          price={item.price}
          description={item.description}
        />
      ))}
    </div>
  )
}
