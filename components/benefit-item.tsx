import Image from 'next/image'

interface BenefitItemProps {
  url: string
  title: string
  text: string
}

export const BenefitItem = ({ url, title, text }: BenefitItemProps) => {
  return (
    <div className="flex flex-col items-center gap-10">
      <Image src={url} width="80" height="80" alt="Benefit" />
      <div className="flex flex-col items-center gap-3">
        <h4 className="font-bold text-2xl text-blue-dark">{title}</h4>
        <p className="font-light text-blue text-center">{text}</p>
      </div>
    </div>
  )
}
