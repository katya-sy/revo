import Image from 'next/image'

interface ProductCardProps {
  imgUrl: string
  title: string
  price: number
  description: string
}

export const ProductCard: React.FC<ProductCardProps> = ({
  imgUrl,
  title,
  price,
  description,
}) => {
  return (
    <div className="flex hover:shadow-product-card-shadow transition-shadow">
      <div className="bg-grey w-max">
        <Image src={imgUrl} width={235} height={256} alt="product" />
      </div>
      <div className="flex flex-col justify-between bg-white p-10 grow">
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-beige text-xl">{price}</p>
          <h4 className="font-bold text-2xl text-blue-dark">{title}</h4>
        </div>
        <p className="font-light text-blue-dark">{description}</p>
        <div className="flex justify-between">
          <button className="bg-beige px-4 py-2 rounded-3xl font-bold text-grey uppercase">
            MUA NGAY
          </button>
          <button className="px-3 py-2 rounded-3xl font-bold text-blue uppercase">
            CHI TIẾT
          </button>
        </div>
      </div>
    </div>
  )
}
