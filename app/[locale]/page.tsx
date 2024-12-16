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
import { getLocale } from 'next-intl/server'

export default async function Home() {
  const locale = await getLocale()
  const products = (await getProductData(locale)) as Product[]
  const comboProducts = (await getComboProductData(locale)) as ComboProduct[]
  const giftsets = (await getGiftsetData(locale)) as Giftset[]

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
