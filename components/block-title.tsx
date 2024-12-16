'use client'
import { animateBlockTitle } from '@/utils/animate-config'
import * as motion from 'framer-motion/client'

interface BlockTitleProps {
  title: string
  subtitle: string
}

export const BlockTitle = ({ title, subtitle }: BlockTitleProps) => {
  return (
    <motion.div
      whileInView="show"
      initial="hidden"
      variants={animateBlockTitle}
      className="flex flex-col items-center gap-2 text-blue"
    >
      <motion.h2 variants={animateBlockTitle} className="font-bold text-center text-xl">
        {title}
      </motion.h2>
      <motion.h3
        variants={animateBlockTitle}
        className="font-black font-montserrat text-3xl text-center uppercase"
      >
        {subtitle}
      </motion.h3>
    </motion.div>
  )
}
