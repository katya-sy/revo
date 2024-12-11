import { CartList } from '@/components/cart/cart-list'
import { ComboProduct } from '@/types/combo-product'
import { Giftset } from '@/types/gifset'
import { Product } from '@/types/product'
import {
  getComboProductData,
  getGiftsetData,
  getProductData,
} from '@/utils/api'

export default async function CartPage() {
  const products = (await getProductData()) as Product[]
  const comboProducts = (await getComboProductData()) as ComboProduct[]
  const giftsets = (await getGiftsetData()) as Giftset[]

  return (
    <div className="bg-beige-light overflow-x-hidden">
      <CartList data={{ products, comboProducts, giftsets }} />
    </div>
  )
}
