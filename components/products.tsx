'use client'
import useEmblaCarousel from 'embla-carousel-react'
import { EmblaOptionsType } from 'embla-carousel'
import { useCallback } from 'react'
import { ProductCard } from './product-card'
import { Arrow } from './shared/arrow'

export const Products = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
  })

  const scrollPrev = useCallback(() => {
    if (emblaApi)
      if (emblaApi.canScrollPrev()) {
        emblaApi.scrollPrev()
      }
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi)
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext()
      }
  }, [emblaApi])

  return (
    <div className="relative before:top-0 before:right-[85%] before:bottom-0 before:absolute flex flex-col gap-16 before:bg-blue py-24 before:w-[calc(100vw-85%)] container">
      <div className="flex flex-col items-center gap-2 text-blue">
        <h2 className="font-bold text-xl">Choose Your Favorite</h2>
        <h3 className="font-black font-montserrat text-3xl text-center uppercase">
          CHUẨN GU ĐÚNG VỊ
        </h3>
      </div>
      <div className="relative z-[2]" ref={emblaRef}>
        <div className="flex gap-8">
          <div className="flex flex-col flex-grow-0 flex-shrink-0 gap-8 basis-[calc(50%-32px)]">
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
          <div className="flex flex-col flex-grow-0 flex-shrink-0 gap-8 basis-[calc(50%-32px)]">
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
          <div className="flex flex-col flex-grow-0 flex-shrink-0 gap-8 basis-[calc(50%-32px)]">
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
        <button
          className="top-1/2 -left-5 absolute flex justify-center items-center bg-beige rounded-full w-12 h-12 text-white -translate-y-1/2 rotate-180"
          onClick={scrollPrev}
        >
          <Arrow />
        </button>
        <button
          className="top-1/2 -right-5 absolute flex justify-center items-center bg-beige rounded-full w-12 h-12 text-white -translate-y-1/2"
          onClick={scrollNext}
        >
          <Arrow />
        </button>
      </div>
    </div>
  )
}
