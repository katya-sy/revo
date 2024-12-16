'use client'
import { Product } from '@/types/product'
import { ProductCard } from '../product-card'
import { ProductEditDialog } from './product-edit-dialog'
import { useProductStore } from '@/store/product-store'
import { useEffect } from 'react'
import { useTranslations } from 'next-intl'

interface AdminProductListProps {
  data: Product[]
}

export const AdminProductList = ({ data }: AdminProductListProps) => {
  const products = useProductStore((state) => state.products)
  const setProducts = useProductStore((state) => state.setProducts)
  const t = useTranslations('admin');

  useEffect(() => setProducts(data), [data])

  return (
    <div className="relative before:top-0 before:right-[93%] before:bottom-0 before:absolute flex flex-col gap-16 max-sm:before:hidden before:bg-blue py-24 before:w-[calc(100vw-93%)] container">
      <h3 className="font-black font-montserrat text-3xl text-blue text-center uppercase">
        {t('products')}
      </h3>
      <div className="gap-8 grid grid-cols-2 max-[1130px]:grid-cols-1 max-sm:grid-cols-2 max-xs:grid-cols-1">
        {products &&
          products.map((product) => (
            <div className="relative" key={product.id}>
              <ProductCard product={product} />
              <ProductEditDialog product={product} />
            </div>
          ))}
      </div>
    </div>
  )
}
