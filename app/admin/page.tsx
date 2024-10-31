import { AdminProductList } from '@/components/admin/admin-product-list'
import { Product } from '@/types/product'
import { getData } from '@/utils/api'

export default async function Admin() {
  const products = (await getData()) as Product[]

  return (
    <div className="bg-beige-light overflow-x-hidden">
      <AdminProductList data={products} />
    </div>
  )
}
