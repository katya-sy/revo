'use client'
import Image from 'next/image'
import { Cart } from './shared/cart'
import { useState } from 'react'

export const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="md:relative after:top-0 after:bottom-0 after:left-[calc(100%-16px)] after:absolute flex items-stretch max-md:after:hidden after:bg-blue max-md:pr-0 max-sm:pl-0 after:w-[calc((100vw-100%)/2+20px)] container">
        <div
          onClick={() => setOpen(false)}
          className={`${
            open ? 'absolute md:hidden inset-0 z-[3] bg-black/60' : 'hidden'
          } md:hidden`}
        />
        <div className="relative max-sm:top-10 max-sm:absolute max-sm:inset-4 flex flex-col justify-between max-sm:gap-5 mt-16 max-sm:mt-0 max-md:mt-10">
          <Image
            src="/logo.svg"
            width={110}
            height={36}
            alt="Logo"
            className="min-w-max"
          />
          <h1 className="bottom-0 absolute flex flex-col mb-16 max-sm:mb-0 max-md:mb-10 font-black font-montserrat text-[54px] text-grey sm:text-blue max-sm:text-4xl max-md:text-5xl max-[330px]:text-3xl uppercase max-md:leading-tight">
            <span>Your</span>
            <span className="relative after:top-0 max-sm:after:-right-2 after:-right-4 after:bottom-0 max-sm:after:-left-2 after:-left-4 z-[2] after:-z-[2] after:absolute flex justify-center items-center after:bg-beige max-sm:w-max text-grey">
              personalized
            </span>
            <span>coffee</span>
          </h1>
        </div>
        <div className="flex flex-shrink sm:ml-auto max-sm:w-screen max-sm:max-w-[575px] max-[880px]:max-w-sm max-[1100px]:max-w-lg max-sm:h-screen">
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
          className="top-10 right-2 absolute md:hidden text-grey hover:text-beige transition-colors"
        >
          <Cart />
        </button>
        <div
          className={`${
            open
              ? 'max-md:right-0 max-md:flex'
              : 'max-md:-right-full max-md:hidden'
          } max-md:absolute flex flex-col flex-shrink-0 gap-28 bg-blue py-16 pr-6 pl-14 max-lg:pl-8 max-md:px-14 max-md:gap-16 max-md:py-10 max-md:h-full max-md:z-[3]`}
        >
          <button className="relative w-max text-grey">
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
              <li>Coffee</li>
              <li>Phin Ma Mau</li>
              <li>Combo Phin Phe</li>
              <li>Giftset</li>
              <li>Lien He</li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}
