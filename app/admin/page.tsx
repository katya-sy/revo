import { AdminProductList } from '@/components/admin/admin-product-list'
import { Product } from '@/types/product'

async function getData() {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL
    if (apiUrl) {
      const res = await fetch(apiUrl + '/products', {
        next: {
          revalidate: false,
          tags: ['products'],
        },
      })

      if (!res.ok) {
        throw new Error('Failed to fetch data')
      }
      return res.json()
    }
  } catch (error) {
    console.error(error)
  }
}

export default async function Admin() {
  const products = (await getData()) as Product[]

  return (
    <div className="bg-beige-light overflow-x-hidden">
      <AdminProductList data={products} />
    </div>
  )
}
