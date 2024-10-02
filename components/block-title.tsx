interface BlockTitleProps {
  title: string
  subtitle: string
}

export const BlockTitle = ({ title, subtitle }: BlockTitleProps) => {
  return (
    <div className="flex flex-col items-center gap-2 text-blue">
      <h2 className="font-bold text-xl">{title}</h2>
      <h3 className="font-black font-montserrat text-3xl text-center uppercase">
        {subtitle}
      </h3>
    </div>
  )
}
