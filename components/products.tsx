'use client'
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'
import { Arrow } from './shared/arrow'
import { EmblaCarouselType } from 'embla-carousel'
import { ProductSlide } from '@/components/product-slide'
import { BlockTitle } from './block-title'
import { Button } from './ui/button'
import { useProductStore } from '@/store/product-store'
import { Product } from '@/types/product'
import { useCartStore } from '@/store/cart-store'

interface ProductsProps {
  data: Product[]
}

export const Products = ({ data }: ProductsProps) => {
  const products = useProductStore((state) => state.products)
  const setProducts = useProductStore((state) => state.setProducts)
  const setCartProducts = useCartStore((state) => state.setCartProducts)
  const [emblaRef, emblaApi] = useEmblaCarousel()
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)
  const [slides, setSlides] = useState<Product[][]>([])

  useEffect(() => {
    setProducts(data)
    const cartData = localStorage.getItem('cart')
    if (cartData) setCartProducts(JSON.parse(cartData))
    else setCartProducts([])
  }, [data])

  useEffect(() => {
    for (let i = 0; i < products?.length; i += 2) {
      const items = products.slice(i, i + 2)
      setSlides((prevSlides) => [...prevSlides, items])
    }
  }, [products])

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
      id="products"
      className="relative before:top-0 before:right-[93%] before:bottom-0 before:absolute flex flex-col gap-16 max-sm:before:hidden before:bg-blue py-24 before:w-[calc(100vw-93%)] container"
    >
      <BlockTitle title="Choose Your Favorite" subtitle="CHUẨN GU ĐÚNG VỊ" />
      <div className="relative z-[2]" ref={emblaRef}>
        <div className="flex">
          {slides &&
            slides.map((slide, index) => (
              <ProductSlide
                key={index}
                items={slide}
                transparent={
                  index === 0
                    ? nextBtnDisabled
                    : index === slides.length - 1
                      ? prevBtnDisabled
                      : undefined
                }
              />
            ))}
        </div>
        <Button
          className={`top-1/2 ${prevBtnDisabled ? 'opacity-0' : 'opacity-100'} max-[1220px]:left-0 max-xs:top-[35%] max-xs:-translate-y-[65%] -left-5 absolute -translate-y-1/2 rotate-180`}
          intent="icon"
          onClick={scrollPrev}
        >
          <Arrow />
        </Button>
        <Button
          className={`top-1/2 ${nextBtnDisabled ? 'opacity-0' : 'opacity-100'} -right-5 max-[1220px]:right-0 absolute max-xs:top-[35%] max-xs:-translate-y-[65%] -translate-y-1/2`}
          intent="icon"
          onClick={scrollNext}
        >
          <Arrow />
        </Button>
      </div>
    </div>
  )
}
