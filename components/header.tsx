import Image from 'next/image'

export const Header = () => {
  return (
    <div className="bg-beige-light">
      <div className="flex container">
        <div className="flex flex-col justify-between pt-16">
          <Image src="/logo.svg" width={110} height={36} alt="Logo" />
          <p className="flex flex-col font-black font-montserrat text-[54px] text-blue uppercase">
            <span>Your</span>
            <span className="relative after:top-0 after:-right-4 after:bottom-0 after:-left-4 z-10 after:-z-10 after:absolute flex justify-center items-center after:bg-beige text-white">
              personalized
            </span>
            <span>coffee</span>
          </p>
        </div>
        <div className="ml-auto">
          <Image src="/header-image.png" width={688} height={768} alt="Image" />
        </div>
        <div className="bg-blue">
          <div></div>
          <nav>
            <ul className="uppercase">
              <li>Trang Chu</li>
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
