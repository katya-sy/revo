'use client'
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'
import { Arrow } from './shared/arrow'
import { EmblaCarouselType } from 'embla-carousel'
import { BlockTitle } from './block-title'
import { Button } from './ui/button'
import { ComboProductSlide } from './combo-product-slide'
import { ComboProduct } from '@/types/combo-product'
import { useComboProductStore } from '@/store/combo-product-store'

interface ComboProductProps {
  data: ComboProduct[]
}

export const ComboProducts = ({ data }: ComboProductProps) => {
  const comboProducts = useComboProductStore((state) => state.comboProducts)
  const setComboProducts = useComboProductStore(
    (state) => state.setComboProducts,
  )
  const [emblaRef, emblaApi] = useEmblaCarousel()
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  useEffect(() => setComboProducts(data), [data])

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
    <div
      id="combo"
      className="relative before:top-0 before:bottom-0 md:before:left-[80%] before:left-[90%] before:absolute max-sm:before:hidden before:bg-blue py-24 md:before:w-[calc(100vw-80%)] before:w-[calc(100vw-90%)]"
    >
      <div className="flex flex-col gap-16 container">
        <BlockTitle
          title="Your Personalized Coffee"
          subtitle="COMBO PHIN PHÊ"
        />
        <div className="relative z-[2]" ref={emblaRef}>
          <div className="flex">
            {comboProducts.map((combo, index) => (
              <ComboProductSlide
                key={index}
                product={combo}
                transparent={
                  index === 0
                    ? nextBtnDisabled
                    : index === comboProducts.length - 1
                      ? prevBtnDisabled
                      : undefined
                }
              />
            ))}
          </div>
          <Button
            className={`top-1/2 ${prevBtnDisabled ? 'opacity-0' : 'opacity-100'} max-[1260px]:left-0 -left-10 absolute max-xs:top-[40%] max-xs:-translate-y-[60%] -translate-y-1/2 rotate-180`}
            intent="icon"
            onClick={scrollPrev}
          >
            <Arrow />
          </Button>
          <Button
            className={`top-1/2 ${nextBtnDisabled ? 'opacity-0' : 'opacity-100'} -right-10 max-[1260px]:right-0 absolute max-xs:top-[40%] max-xs:-translate-y-[60%] -translate-y-1/2`}
            intent="icon"
            onClick={scrollNext}
          >
            <Arrow />
          </Button>
        </div>
      </div>
    </div>
  )
}
