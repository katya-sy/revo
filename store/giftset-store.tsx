import { Giftset } from '@/types/gifset'
import { create } from 'zustand'

interface GifsetStoreProps {
  giftsets: Giftset[]
  setGiftsets: (giftsets: Giftset[]) => void
}

export const useGiftsetStore = create<GifsetStoreProps>()((set) => ({
  giftsets: [],
  setGiftsets: (giftsets) => set({ giftsets: giftsets }),
}))
