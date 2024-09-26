import { Benefits } from '@/components/benefits'
import { Header } from '@/components/header'
import { Products } from '@/components/products'

export default function Home() {
  return (
    <div className="bg-beige-light overflow-x-hidden">
      <Header />
      <Benefits />
      <Products />
    </div>
  )
}
