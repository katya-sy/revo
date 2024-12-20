'use client'
import { useEffect } from 'react'
import { Giftset } from '@/types/gifset'
import { useGiftsetStore } from '@/store/giftset-store'
import { GiftsetCard } from './giftset-card'
import { GiftsetEditDialog } from './giftset-edit-dialog'
import { useTranslations } from 'next-intl'

interface AdminGiftsetListProps {
  data: Giftset[]
}

export const AdminGiftsetList = ({ data }: AdminGiftsetListProps) => {
  const giftsets = useGiftsetStore((state) => state.giftsets)
  const setGiftsets = useGiftsetStore((state) => state.setGiftsets)
  const t = useTranslations('admin');

  useEffect(() => setGiftsets(data), [data])

  return (
    <div className="relative before:top-0 before:bottom-0 md:before:left-[80%] before:left-[90%] before:absolute max-sm:before:hidden bg-grey before:bg-beige-light py-24 md:before:w-[calc(100vw-80%)] before:w-[calc(100vw-90%)]">
      <div className="flex flex-col gap-16 container">
        <h3 className="font-black font-montserrat text-3xl text-blue text-center uppercase">
          {t('giftsets')}
        </h3>
        <div className="gap-8 grid grid-cols-1">
          {giftsets &&
            giftsets.map((item) => (
              <div className="relative" key={item.id}>
                <GiftsetCard key={item.id} content={item} />
                <GiftsetEditDialog giftset={item} />
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
