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

export default async function Admin() {
  const products = (await getProductData()) as Product[]
  const comboProducts = (await getComboProductData()) as ComboProduct[]
  const giftsets = (await getGiftsetData()) as Giftset[]

  return (
    <div className="bg-beige-light overflow-x-hidden">
      <AdminProductList data={products} />
      <AdminComboProductList data={comboProducts} />
      <AdminGiftsetList data={giftsets} />
    </div>
  )
}
