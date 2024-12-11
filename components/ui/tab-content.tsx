'use client'
import { Content } from '@radix-ui/react-tabs'
import { Button } from './button'
import Image from 'next/image'
import { CharacteristicIcons } from '../shared/characteristic-icons'
import * as motion from 'framer-motion/client'
import { AnimatePresence } from 'framer-motion'
import { animateTab } from '@/utils/animate-config'
import { Giftset } from '@/types/gifset'
import { formatPrice } from './../../utils/format-price'
import { BuyButton } from '../buy-button'

interface TabContentProps {
  value: string
  activeValue: string
  content: Giftset
}

export const TabContent = ({
  value,
  activeValue,
  content,
}: TabContentProps) => {
  return (
    <Content
      className={`${value === activeValue ? 'flex' : 'hidden'} relative before:top-0 max-md:flex-col before:bottom-0 before:left-0 before:absolute lg:before:w-64 before:w-48 before:bg-grey max-md:before:hidden transition-all items-center justify-end bg-white duration-300 h-full`}
      value={value}
    >
      <AnimatePresence mode="wait">
        <motion.div
          animate="show"
          initial="hidden"
          variants={animateTab}
          className="z-[2] flex max-md:max-w-80 overflow-hidden"
        >
          <Image
            className="w-full"
            src={content.imgUrl}
            width={490}
            height={460}
            alt="product giftset"
          />
        </motion.div>
      </AnimatePresence>

      <div className="sm:box-content flex flex-col flex-grow flex-shrink-0 gap-11 bg-white px-5 sm:px-10 max-xl:py-6 lg:pr-16 md:pl-0 max-w-full md:max-w-xs lg:max-w-md">
        <AnimatePresence mode="wait">
          <motion.div
            animate="show"
            initial="hidden"
            exit="exit"
            variants={animateTab}
            className="flex flex-col flex-grow flex-shrink-0 gap-11"
          >
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <p className="font-semibold text-beige text-xl">
                  {formatPrice(content.price)}
                </p>
                <h4 className="font-bold text-blue-dark text-xl sm:text-2xl">
                  {content.title}
                </h4>
                <p className="font-light text-blue-dark">
                  {content.description}
                </p>
              </div>
              <div className="flex max-lg:flex-wrap gap-x-10 gap-y-4">
                {content.characteristics.map((item) => (
                  <div key={item.title} className="flex items-center gap-3">
                    <CharacteristicIcons
                      className="text-blue"
                      iconName={item.iconName}
                    />
                    <p className="flex flex-col text-blue">
                      <span className="font-light">{item.title}</span>
                      <span className="font-semibold">{item.desc}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex max-xs:flex-wrap justify-between gap-x-16 gap-y-4">
              <BuyButton product={content} className="w-full xs:w-48" />
              <Button className="w-full xs:w-48" intent="secondary">
                CHI TIẾT
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </Content>
  )
}
