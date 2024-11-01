import { Benefits } from '@/components/benefits'
import { ComboProducts } from '@/components/combo-products'
import { Footer } from '@/components/footer'
import { Giftsets } from '@/components/giftsets'
import { Header } from '@/components/header'
import { Products } from '@/components/products'
import { ComboProduct } from '@/types/combo-product'
import { Product } from '@/types/product'
import { getComboProductData, getProductData } from '@/utils/api'

export default async function Home() {
  const products = (await getProductData()) as Product[]
  const comboProducts = (await getComboProductData()) as ComboProduct[]

  return (
    <div className="bg-beige-light overflow-x-hidden">
      <Header />
      <Benefits />
      <Products data={products} />
      <Giftsets />
      <ComboProducts data={comboProducts} />
      <Footer />
    </div>
  )
}
