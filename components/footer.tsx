import { useTranslations } from 'next-intl'

export const Footer = () => {
  const t = useTranslations('footer');

  return (
    <footer className="flex justify-center items-center bg-grey h-14 font-light text-blue">
      © Revo {t('copyright')} - 2018
    </footer>
  )
}
