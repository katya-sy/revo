import Image from 'next/image'
import { Cart } from './shared/cart'

export const Header = () => {
  return (
    <div className="bg-beige-light">
      <div className="relative after:top-0 after:bottom-0 after:left-[calc(100%-16px)] after:absolute flex items-stretch max-md:after:hidden after:bg-blue max-md:pr-0 after:w-[calc((100vw-100%)/2+20px)] container">
        <div className="relative flex flex-col justify-between mt-16 max-md:mt-10">
          <Image
            src="/logo.svg"
            width={110}
            height={36}
            alt="Logo"
            className="min-w-max"
          />
          <p className="bottom-0 absolute flex flex-col mb-16 max-md:mb-10 font-black font-montserrat text-[54px] text-blue max-md:text-5xl uppercase max-md:leading-tight">
            <span>Your</span>
            <span className="relative after:top-0 after:-right-4 after:bottom-0 after:-left-4 z-10 after:-z-10 after:absolute flex justify-center items-center after:bg-beige text-white">
              personalized
            </span>
            <span>coffee</span>
          </p>
        </div>
        <div className="flex flex-shrink ml-auto max-md:w-3/5 max-[880px]:max-w-sm max-[1100px]:max-w-lg">
          <Image
            className="max-w-full object-cover"
            src="/header-image.png"
            width={688}
            height={768}
            alt="Image"
          />
        </div>
        <div className="flex flex-col flex-shrink-0 gap-28 max-md:hidden bg-blue py-16 pr-6 pl-14 max-lg:pl-8">
          <button className="relative w-max">
            <Cart />
            <div className="-top-3 -right-3 absolute flex justify-center items-center bg-beige rounded-full w-5 h-5 text-grey text-sm">
              2
            </div>
          </button>
          <nav>
            <ul className="flex flex-col gap-8 font-light font-nunito text-grey uppercase">
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
    </div>
  )
}
