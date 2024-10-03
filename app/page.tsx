import { Benefits } from '@/components/benefits'
import { ComboProducts } from '@/components/combo-products'
import { Footer } from '@/components/footer'
import { Giftsets } from '@/components/giftsets'
import { Header } from '@/components/header'
import { Products } from '@/components/products'

export default function Home() {
  return (
    <div className="bg-beige-light overflow-x-hidden">
      <Header />
      <Benefits />
      <Products />
      <Giftsets />
      <ComboProducts />
      <Footer />
    </div>
  )
}
