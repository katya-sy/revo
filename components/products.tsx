'use client'
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'
import { Arrow } from './shared/arrow'
import { EmblaCarouselType } from 'embla-carousel'
import { ProductSlide } from '@/components/product-slide'

export const Products = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel()
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onSelect(emblaApi)
    emblaApi.on('reInit', onSelect).on('select', onSelect)
  }, [emblaApi, onSelect])

  return (
    <div className="relative before:top-0 before:right-[85%] before:bottom-0 before:absolute flex flex-col gap-16 before:bg-blue py-24 before:w-[calc(100vw-85%)] container">
      <div className="flex flex-col items-center gap-2 text-blue">
        <h2 className="font-bold text-xl">Choose Your Favorite</h2>
        <h3 className="font-black font-montserrat text-3xl text-center uppercase">
          CHUẨN GU ĐÚNG VỊ
        </h3>
      </div>
      <div className="relative z-[2]" ref={emblaRef}>
        <div className="flex">
          <ProductSlide transparent={nextBtnDisabled} />
          <ProductSlide />
          <ProductSlide transparent={prevBtnDisabled} />
        </div>
        <button
          className={`top-1/2 ${prevBtnDisabled ? 'opacity-0' : 'opacity-100'} duration-300 transition-opacity flex -left-5 absolute justify-center items-center bg-beige rounded-full w-12 h-12 text-white -translate-y-1/2 rotate-180`}
          onClick={scrollPrev}
        >
          <Arrow />
        </button>
        {!nextBtnDisabled && (
          <button
            className={`top-1/2 ${nextBtnDisabled ? 'opacity-0' : 'opacity-100'} duration-300 transition-opacity -right-5 absolute flex justify-center items-center bg-beige rounded-full w-12 h-12 text-white -translate-y-1/2`}
            onClick={scrollNext}
          >
            <Arrow />
          </button>
        )}
      </div>
    </div>
  )
}
