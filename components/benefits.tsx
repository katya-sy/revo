import { BenefitItem } from './benefit-item'
import { BlockTitle } from './block-title'
import { useTranslations } from 'next-intl'

export const Benefits = () => {
  const t = useTranslations('benefits');

  const benefits = [
    {
      url: '/benefit-1.svg',
      title: t('items.1.title'),
      text: t('items.1.text'),
    },
    {
      url: '/benefit-2.svg',
      title: t('items.2.title'),
      text: t('items.2.text'),
    },
    {
      url: '/benefit-3.svg',
      title: t('items.3.title'),
      text: t('items.3.text'),
    },
    {
      url: '/benefit-4.svg',
      title: t('items.4.title'),
      text: t('items.4.text'),
    },
  ]

  return (
    <div className="flex flex-col gap-16 py-24 container">
      <BlockTitle
        title={t('title')}
        subtitle={t('subtitle')}
      />
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
