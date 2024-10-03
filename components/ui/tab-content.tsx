import { Content } from '@radix-ui/react-tabs'
import { Button } from './button'

interface TabContentProps {
  value: string
  activeValue: string
  content: {
    // imgUrl: string
    title: string
    price: number
    description: string
  }
}

export const TabContent = ({
  value,
  activeValue,
  content,
}: TabContentProps) => {
  return (
    <Content
      className={`${value === activeValue ? 'flex' : 'hidden'} transition-all bg-white duration-300 flex h-full`}
      value={value}
    >
      <div className="flex flex-col sm:justify-between gap-3 xs:gap-5 bg-white xs:py-10 p-5 sm:p-10 max-sm:max-w-[235px] grow">
        <div className="flex flex-col gap-1 xs:gap-2">
          <p className="font-semibold text-beige text-xl">{content.price}</p>
          <h4 className="font-bold text-blue-dark text-xl sm:text-2xl">
            {content.title}
          </h4>
        </div>
        <p className="font-light text-blue-dark">{content.description}</p>
        <div className="flex max-sm:flex-col sm:justify-between gap-2">
          <Button>MUA NGAY</Button>
          <Button intent="secondary">CHI TIẾT</Button>
        </div>
      </div>
    </Content>
  )
}
