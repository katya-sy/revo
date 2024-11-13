'use client'
import { ProductCard } from '../product-card'
import { ProductEditDialog } from './product-edit-dialog'
import { useEffect } from 'react'
import { Giftset } from '@/types/gifset'
import { useGiftsetStore } from '@/store/giftset-store'

interface AdminGiftsetListProps {
  data: Giftset[]
}

export const AdminGiftsetList = ({ data }: AdminGiftsetListProps) => {
  const giftsets = useGiftsetStore((state) => state.giftsets)
  const setGiftsets = useGiftsetStore((state) => state.setGiftsets)

  useEffect(() => setGiftsets(data), [data])

  return (
    <div className="relative before:top-0 before:right-[93%] before:bottom-0 before:absolute flex flex-col gap-16 max-sm:before:hidden before:bg-blue py-24 before:w-[calc(100vw-93%)] container">
      <h3 className="font-black font-montserrat text-3xl text-blue text-center uppercase">
        Edit giftsets
      </h3>
      <div className="gap-8 grid grid-cols-2 max-[1130px]:grid-cols-1 max-sm:grid-cols-2 max-xs:grid-cols-1">
        {giftsets &&
          giftsets.map((giftset) => (
            <div className="relative" key={giftset.id}>
              <ProductCard product={giftset} />
              <ProductEditDialog product={giftset} />
            </div>
          ))}
      </div>
    </div>
  )
}
