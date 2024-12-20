'use client'
import { useComboProductStore } from '@/store/combo-product-store'
import { ComboProduct } from '@/types/combo-product'
import { useEffect } from 'react'
import { ComboProductCard } from '../combo-product-card'
import { ComboEditDialog } from './combo-edit-dialog'
import { useTranslations } from 'next-intl'

interface AdminComboProductProps {
  data: ComboProduct[]
}

export const AdminComboProductList = ({ data }: AdminComboProductProps) => {
  const comboProducts = useComboProductStore((state) => state.comboProducts)
  const setComboProducts = useComboProductStore(
    (state) => state.setComboProducts,
  )
  const t = useTranslations('admin');

  useEffect(() => setComboProducts(data), [data])

  return (
    <div className="relative before:top-0 before:bottom-0 md:before:left-[80%] before:left-[90%] before:absolute max-sm:before:hidden before:bg-blue py-24 md:before:w-[calc(100vw-80%)] before:w-[calc(100vw-90%)]">
      <div className="flex flex-col gap-16 container">
        <h3 className="font-black font-montserrat text-3xl text-blue text-center uppercase">
          {t('combo')}
        </h3>
        <div className="gap-8 grid grid-cols-1 sm:grid-cols-2">
          {comboProducts &&
            comboProducts.map((product) => (
              <div className="relative" key={product.id}>
                <ComboProductCard product={product} />
                <ComboEditDialog product={product} />
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
