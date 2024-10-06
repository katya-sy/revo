'use client'
import Image from 'next/image'
import * as motion from 'framer-motion/client'
import { animateBenefitItem } from '@/utils/animate-config'

interface BenefitItemProps {
  url: string
  title: string
  text: string
}

export const BenefitItem = ({ url, title, text }: BenefitItemProps) => {
  return (
    <motion.div
      whileInView="show"
      initial="hidden"
      variants={animateBenefitItem}
      className="flex flex-col items-center gap-10"
    >
      <motion.div variants={animateBenefitItem}>
        <Image src={url} width="80" height="80" alt="Benefit" />
      </motion.div>
      <motion.div
        variants={animateBenefitItem}
        className="flex flex-col items-center gap-3"
      >
        <h4 className="font-bold text-2xl text-blue-dark">{title}</h4>
        <p className="font-light text-blue text-center">{text}</p>
      </motion.div>
    </motion.div>
  )
}
