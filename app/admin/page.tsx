import { AdminComboProductList } from '@/components/admin/admin-combo-product-list'
import { AdminProductList } from '@/components/admin/admin-product-list'
import { ComboProduct } from '@/types/combo-product'
import { Product } from '@/types/product'
import { getComboProductData, getProductData } from '@/utils/api'

export default async function Admin() {
  const products = (await getProductData()) as Product[]
  const comboProducts = (await getComboProductData()) as ComboProduct[]

  return (
    <div className="bg-beige-light overflow-x-hidden">
      <AdminProductList data={products} />
      <AdminComboProductList data={comboProducts} />
    </div>
  )
}
