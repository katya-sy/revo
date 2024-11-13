import { Benefits } from '@/components/benefits'
import { ComboProducts } from '@/components/combo-products'
import { Footer } from '@/components/footer'
import { Giftsets } from '@/components/giftsets'
import { Header } from '@/components/header'
import { Products } from '@/components/products'
import { ComboProduct } from '@/types/combo-product'
import { Giftset } from '@/types/gifset'
import { Product } from '@/types/product'
import {
  getComboProductData,
  getGiftsetData,
  getProductData,
} from '@/utils/api'

export default async function Home() {
  const products = (await getProductData()) as Product[]
  const comboProducts = (await getComboProductData()) as ComboProduct[]
  const giftsets = (await getGiftsetData()) as Giftset[]

  return (
    <div className="bg-beige-light overflow-x-hidden">
      <Header />
      <Benefits />
      <Products data={products} />
      <Giftsets data={giftsets} />
      <ComboProducts data={comboProducts} />
      <Footer />
    </div>
  )
}
