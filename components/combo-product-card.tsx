import Image from 'next/image'
import { Button } from './ui/button'

interface ProductCardProps {
  imgUrl: string
  title: string
  price: number
  discountPrice: number
  description: string
}

export const ComboProductCard = ({
  imgUrl,
  title,
  price,
  discountPrice,
  description,
}: ProductCardProps) => {
  return (
    <div className="flex flex-col hover:shadow-product-card-shadow transition-shadow">
      <div className="flex justify-center bg-grey w-full overflow-hidden">
        <Image src={imgUrl} width={360} height={300} alt="combo product" />
      </div>
      <div className="flex flex-col gap-8 bg-white xs:py-10 p-5 sm:p-10">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <p className="font-semibold text-beige text-xl">{discountPrice}</p>
            <p className="font-light text-blue text-sm line-through">{price}</p>
          </div>
          <h4 className="font-bold text-blue-dark text-xl sm:text-2xl">
            {title}
          </h4>
          <p className="font-light text-blue-dark">{description}</p>
        </div>
        <div className="flex justify-between gap-2">
          <Button>MUA NGAY</Button>
          <Button intent="secondary">CHI TIẾT</Button>
        </div>
      </div>
    </div>
  )
}
