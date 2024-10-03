import { Trigger } from '@radix-ui/react-tabs'

interface TabTriggerProps {
  value: string
  activeValue: string
  children: string | number
}

export const TabTrigger = ({
  value,
  activeValue,
  children,
}: TabTriggerProps) => {
  return (
    <Trigger
      className={`${value === activeValue ? 'bg-white opacity-100' : 'bg-transparent opacity-30'} transition-all duration-300 flex justify-center items-center h-40 font-black font-montserrat text-3xl text-blue-dark cursor-pointer`}
      value={value}
    >
      {children}
    </Trigger>
  )
}
