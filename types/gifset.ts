import { Product } from './product'

interface Characteristics {
  iconName: string
  title: string
  desc: string
}

export interface Giftset extends Product {
  characteristics: Characteristics[]
}
