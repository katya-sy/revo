'use client'
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback } from 'react'
import { ProductCard } from './product-card'

export const Products = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start' })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="relative before:top-0 before:right-[85%] before:bottom-0 before:absolute flex flex-col gap-16 before:bg-blue py-24 before:w-[calc(100vw-85%)] container">
      <div className="flex flex-col items-center gap-2 text-blue">
        <h2 className="font-bold text-xl">Choose Your Favorite</h2>
        <h3 className="font-black font-montserrat text-3xl text-center uppercase">
          CHUẨN GU ĐÚNG VỊ
        </h3>
      </div>
      <div className="z-[2] flex flex-col gap-5" ref={emblaRef}>
        <div className="flex gap-8">
          <div className="flex flex-col flex-grow-0 flex-shrink-0 gap-8 basis-1/2">
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
          <div className="flex flex-col flex-grow-0 flex-shrink-0 gap-8 basis-1/2">
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
          <div className="flex flex-col flex-grow-0 flex-shrink-0 gap-8 basis-1/2">
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
        </div>
        <div className="flex justify-center gap-2">
          <button className="embla__prev" onClick={scrollPrev}>
            Prev
          </button>
          <button className="embla__next" onClick={scrollNext}>
            Next
          </button>
        </div>
      </div>
    </div>
  )
}