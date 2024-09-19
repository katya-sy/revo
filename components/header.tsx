import Image from 'next/image'
import { Cart } from './shared/cart'

export const Header = () => {
  return (
    <div className="bg-beige-light">
      <div className="relative after:top-0 after:bottom-0 after:left-[calc(100%-16px)] after:absolute flex items-stretch after:bg-blue after:w-[calc((100vw-100%)/2+7px)] container">
        <div className="relative flex flex-col justify-between mt-16">
          <Image src="/logo.svg" width={110} height={36} alt="Logo" />
          <p className="bottom-0 absolute flex flex-col mb-16 font-black font-montserrat text-[54px] text-blue uppercase">
            <span>Your</span>
            <span className="relative after:top-0 after:-right-4 after:bottom-0 after:-left-4 z-10 after:-z-10 after:absolute flex justify-center items-center after:bg-beige text-white">
              personalized
            </span>
            <span>coffee</span>
          </p>
        </div>
        <Image
          className="flex-shrink ml-auto"
          src="/header-image.png"
          width={688}
          height={768}
          alt="Image"
        />
        <div className="flex flex-col flex-shrink-0 gap-28 bg-blue py-16 pr-6 pl-14">
          <div className="relative w-max">
            <Cart />
            <div className="-top-3 -right-3 absolute flex justify-center items-center bg-beige rounded-full w-5 h-5 text-grey text-sm">
              2
            </div>
          </div>
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
