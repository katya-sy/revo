import { BenefitItem } from './benefit-item'

const benefits = [
  {
    url: '/benefit-1.svg',
    title: 'Nguồn gốc',
    text: 'Những hạt cà phê Arabica, Robusta đạt chất lượng theo tiêu chuẩn quốc tế.',
  },
  {
    url: '/benefit-2.svg',
    title: 'Chất lượng',
    text: 'Từng một hạt cà phê là cả một quá trình tập trung cao độ của nghệ nhân cà phê.',
  },
  {
    url: '/benefit-3.svg',
    title: 'Các loại hạt',
    text: '70% chất lượng tách cà phê đến từ nguồn gốc và chất lượng green bean.',
  },
  {
    url: '/benefit-4.svg',
    title: 'Pha chế',
    text: 'Những hạt cà phê được lột xác qua quá trình rang xay kỹ lưỡng và nghiêm ngặt.',
  },
]

export const Benefits = () => {
  return (
    <div className="flex flex-col gap-16 py-24 container">
      <div className="flex flex-col items-center gap-2 text-blue">
        <h2 className="font-bold text-xl">Your Personalized Coffee</h2>
        <h3 className="font-black font-montserrat text-3xl text-center uppercase">
          COFFEE BUILD YOUR BASE
        </h3>
      </div>
      <div className="gap-16 grid grid-cols-1 md:grid-cols-4 xs:grid-cols-2">
        {benefits.map((item) => (
          <BenefitItem
            key={item.url}
            url={item.url}
            title={item.title}
            text={item.text}
          />
        ))}
      </div>
    </div>
  )
}
