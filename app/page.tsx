import { Benefits } from '@/components/benefits'
import { ComboProducts } from '@/components/combo-products'
import { Footer } from '@/components/footer'
import { Giftsets } from '@/components/giftsets'
import { Header } from '@/components/header'
import { Products } from '@/components/products'
import { Product } from '@/types/product'
import { getData } from '@/utils/api'

export default async function Home() {
  const products = (await getData()) as Product[]

  return (
    <div className="bg-beige-light overflow-x-hidden">
      <Header />
      <Benefits />
      <Products data={products} />
      <Giftsets />
      <ComboProducts />
      <Footer />
    </div>
  )
}
