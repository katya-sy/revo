import { AdminComboProductList } from '@/components/admin/admin-combo-product-list'
import { AdminGiftsetList } from '@/components/admin/admin-gifset-list'
import { AdminProductList } from '@/components/admin/admin-product-list'
import { ComboProduct } from '@/types/combo-product'
import { Giftset } from '@/types/gifset'
import { Product } from '@/types/product'
import {
  getComboProductData,
  getGiftsetData,
  getProductData,
} from '@/utils/api'
import { getLocale } from 'next-intl/server'

export default async function Admin() {
  const locale = await getLocale()
  const products = (await getProductData(locale)) as Product[]
  const comboProducts = (await getComboProductData(locale)) as ComboProduct[]
  const giftsets = (await getGiftsetData(locale)) as Giftset[]

  return (
    <div className="bg-beige-light overflow-x-hidden">
      <AdminProductList data={products} />
      <AdminComboProductList data={comboProducts} />
      <AdminGiftsetList data={giftsets} />
    </div>
  )
}
