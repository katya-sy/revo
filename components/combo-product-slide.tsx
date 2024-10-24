import { ComboProductCard } from './combo-product-card'

interface ProductSlideProps {
  transparent?: boolean
}

const product = {
  id: 1,
  imgUrl: '/combo-1.png',
  title: 'Combo Revo Đậm Đà',
  price: 155000,
  discountPrice: 147000,
  description:
    'Hàm lượng caffein trong Revo Đậm Đà đủ mạnh để làm bạn tỉnh táo làm việc...',
}

export const ComboProductSlide = ({ transparent }: ProductSlideProps) => {
  return (
    <div
      className={`${transparent ? 'opacity-30' : ''} mr-8 last:mr-0 transition-opacity duration-300 flex-grow-0 flex-shrink-0 lg:basis-[31%] max-lg:basis-[48%] max-[670px]:basis-full`}
    >
      <ComboProductCard product={product} />
    </div>
  )
}
