'use client'
import * as Tabs from '@radix-ui/react-tabs'
import { BlockTitle } from './block-title'
import { TabTrigger } from './ui/tab-trigger'
import { useEffect, useState } from 'react'
import { TabContent } from './ui/tab-content'
import { Giftset } from '@/types/gifset'
import { useGiftsetStore } from '@/store/giftset-store'
import { useTranslations } from 'next-intl'

interface GiftsetsProps {
  data: Giftset[]
}

export const Giftsets = ({ data }: GiftsetsProps) => {
  const [value, setValue] = useState('tab1')
  const giftsets = useGiftsetStore((state) => state.giftsets)
  const setGiftsets = useGiftsetStore((state) => state.setGiftsets)
  const t = useTranslations('giftsets')

  useEffect(() => setGiftsets(data), [data])

  return (
    <div
      id="giftset"
      className="relative before:top-0 before:bottom-0 md:before:left-[80%] before:left-[90%] before:absolute max-sm:before:hidden bg-grey before:bg-beige-light py-24 md:before:w-[calc(100vw-80%)] before:w-[calc(100vw-90%)]"
    >
      <div className="flex flex-col gap-16 container">
        <BlockTitle title={t('title')} subtitle={t('subtitle')} />
        <Tabs.Root
          className="z-[2] flex md:flex-row-reverse flex-col"
          value={value}
          onValueChange={(val) => setValue(val)}
          defaultValue={value}
        >
          <Tabs.List
            className="flex md:flex-col w-full md:w-16 lg:w-20"
            aria-label="Show giftsets"
          >
            {giftsets &&
              giftsets.map((item) => (
                <TabTrigger
                  key={item.id}
                  activeValue={value}
                  value={`tab${item.id}`}
                >
                  {item.id}
                </TabTrigger>
              ))}
          </Tabs.List>
          <div className="w-full">
            {giftsets &&
              giftsets.map((item) => (
                <TabContent
                  key={item.id}
                  activeValue={value}
                  value={`tab${item.id}`}
                  content={item}
                />
              ))}
          </div>
        </Tabs.Root>
      </div>
    </div>
  )
}
