'use client'
import Image from 'next/image'
import { Cart } from './shared/cart'
import { useEffect, useState } from 'react'
import * as motion from 'framer-motion/client'
import { useMenuAnimation } from '@/utils/use-menu-animation'
import { animateTitle } from '@/utils/animate-config'
import Link from 'next/link'

export const Header = () => {
  const [open, setOpen] = useState(false)
  const scope = useMenuAnimation(open)
  const isMobile = window.innerWidth < 768

  useEffect(() => {
    const body = document.querySelector('body')
    if (body) {
      body.style.overflowY = open ? 'hidden' : 'auto'
    }

    return () => {
      if (body) {
        body.style.overflowY = 'auto'
      }
    }
  }, [open])

  const handleLinkClick = () => setOpen(false)

  return (
    <>
      <div
        ref={scope}
        className="md:relative after:top-0 after:bottom-0 after:left-[calc(100%-17px)] after:absolute flex items-stretch max-md:after:hidden after:bg-blue max-md:pr-0 max-sm:pl-0 after:w-[calc((100vw-100%)/2+20px)] container"
      >
        <motion.div
          onClick={() => setOpen(false)}
          className={`${
            open ? 'absolute md:hidden inset-0 z-[3] bg-black/60' : 'hidden'
          } md:hidden overlay`}
        />
        <div className="relative max-sm:top-10 max-sm:z-[2] max-sm:absolute max-sm:inset-4 flex flex-col justify-between max-sm:gap-5 mt-16 max-sm:mt-0 max-md:mt-10">
          <Image
            src="/logo.svg"
            width={110}
            height={36}
            alt="Logo"
            className="min-w-max"
          />
          <motion.h1
            whileInView="show"
            initial="hidden"
            variants={animateTitle}
            className="bottom-0 absolute flex flex-col mb-16 max-sm:mb-0 max-md:mb-10 font-black font-montserrat text-[54px] text-grey sm:text-blue max-sm:text-4xl max-md:text-5xl max-[330px]:text-3xl uppercase max-md:leading-tight"
          >
            <motion.span variants={animateTitle}>Your</motion.span>
            <motion.span
              variants={animateTitle}
              className="relative after:top-0 max-sm:after:-right-2 after:-right-4 after:bottom-0 max-sm:after:-left-2 after:-left-4 z-[2] after:-z-[2] after:absolute flex justify-center items-center after:bg-beige max-sm:w-max text-grey"
            >
              personalized
            </motion.span>
            <motion.span variants={animateTitle}>coffee</motion.span>
          </motion.h1>
        </div>
        <div className="max-sm:relative after:absolute after:inset-0 flex flex-shrink sm:after:hidden after:bg-black/40 sm:ml-auto max-sm:w-screen max-sm:max-w-[575px] max-[880px]:max-w-sm max-[1100px]:max-w-lg max-sm:h-screen">
          <Image
            className="h-auto object-cover"
            src="/header-image.png"
            width={688}
            height={768}
            alt="Image"
          />
        </div>
        <button
          onClick={() => setOpen(true)}
          className="top-10 right-2 max-sm:z-[2] absolute md:hidden text-grey hover:text-beige transition-colors"
        >
          <Cart />
        </button>
        <motion.div
          initial={{
            clipPath: isMobile ? 'inset(0% 0% 0% 100%)' : 'inset(0% 0% 0% 0%)',
          }}
          className="max-md:right-0 max-md:z-[3] max-md:absolute flex flex-col flex-shrink-0 gap-28 max-md:gap-16 bg-blue max-md:px-14 py-16 max-md:py-10 md:[clip-path:inset(0%_0%_0%_0%)] pr-6 pl-14 max-lg:pl-8 max-md:h-full menu"
        >
          <button className="relative w-max text-grey animate-button">
            <div className="hover:text-beige transition-colors">
              <Cart />
            </div>
            <div className="-top-3 -right-3 absolute flex justify-center items-center bg-beige rounded-full w-5 h-5 text-sm">
              2
            </div>
          </button>
          <nav>
            <ul className="flex flex-col gap-8 font-light text-grey uppercase">
              <li className="font-bold">Trang Chu</li>
              <li className="hover:text-beige transition-colors">
                <Link onClick={handleLinkClick} href="#products">
                  Coffee
                </Link>
              </li>
              <li className="hover:text-beige transition-colors">
                <Link onClick={handleLinkClick} href="">
                  Phin Ma Mau
                </Link>
              </li>
              <li className="hover:text-beige transition-colors">
                <Link onClick={handleLinkClick} href="#combo">
                  Combo Phin Phe
                </Link>
              </li>
              <li className="hover:text-beige transition-colors">
                <Link onClick={handleLinkClick} href="#giftset">
                  Giftset
                </Link>
              </li>
              <li className="hover:text-beige transition-colors">
                <Link onClick={handleLinkClick} href="/admin">
                  Admin
                </Link>
              </li>
            </ul>
          </nav>
        </motion.div>
      </div>
    </>
  )
}
