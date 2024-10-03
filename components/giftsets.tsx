'use client'
import * as Tabs from '@radix-ui/react-tabs'
import { BlockTitle } from './block-title'
import { TabTrigger } from './ui/tab-trigger'
import { useState } from 'react'
import { TabContent } from './ui/tab-content'

export const Giftsets = () => {
  const [value, setValue] = useState('tab0')
  const tabContent = [
    {
      title: 'Giftset "Cà phê phin Việt Nam"',
      price: 285000,
      description:
        'Món quà tuyệt vời dành cho người sành cà phê. Hạt cà phê được Revo cẩn trọng chọn lựa, rang xay theo công nghệ và bí quyết học hỏi từ những nghệ nhân nổi tiếng, cùng với tình yêu, sự đam mê của người làm cà phê… tạo ra những tách cà phê tinh khiết chỉ dành riêng cho bạn.',
    },
    {
      title: 'weg',
      price: 285000,
      description:
        'Món quà tuyệt vời dành cho người sành cà phê. Hạt cà phê được Revo cẩn trọng chọn lựa, rang xay theo công nghệ và bí quyết học hỏi từ những nghệ nhân nổi tiếng, cùng với tình yêu, sự đam mê của người làm cà phê… tạo ra những tách cà phê tinh khiết chỉ dành riêng cho bạn.',
    },
    {
      title: 'sfdgfh',
      price: 285000,
      description:
        'Món quà tuyệt vời dành cho người sành cà phê. Hạt cà phê được Revo cẩn trọng chọn lựa, rang xay theo công nghệ và bí quyết học hỏi từ những nghệ nhân nổi tiếng, cùng với tình yêu, sự đam mê của người làm cà phê… tạo ra những tách cà phê tinh khiết chỉ dành riêng cho bạn.',
    },
  ]

  return (
    <div className="relative before:top-0 before:bottom-0 before:left-[80%] before:absolute flex flex-col gap-16 bg-grey before:bg-beige-light py-24 before:w-[calc(100vw-80%)]">
      <div className="flex flex-col gap-16 py-24 container">
        <BlockTitle title="Best Gift For Best Friend" subtitle="GIFTSET" />
        <Tabs.Root
          className="z-[2] flex flex-row-reverse"
          value={value}
          onValueChange={(val) => setValue(val)}
          defaultValue={value}
        >
          <Tabs.List
            className="flex flex-col w-[80px]"
            aria-label="Show giftsets"
          >
            {tabContent.map((_item, index) => (
              <TabTrigger key={index} activeValue={value} value={`tab${index}`}>
                {index + 1}
              </TabTrigger>
            ))}
          </Tabs.List>
          <div className="w-full">
            {tabContent.map((item, index) => (
              <TabContent
                key={index}
                activeValue={value}
                value={`tab${index}`}
                content={item}
              />
            ))}
          </div>
        </Tabs.Root>
      </div>
    </div>
  )
}
