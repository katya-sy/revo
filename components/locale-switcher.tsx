'use client'
import { usePathname, useRouter } from '@/i18n/routing'
import { useParams } from 'next/navigation'
import { useState, useTransition } from 'react'
import * as Select from '@radix-ui/react-select'
import { routing } from '@/i18n/routing'
import { useLocale, useTranslations } from 'next-intl'

export const LocaleSwitcher = () => {
  const t = useTranslations('localeSwitcher')
  const locale = useLocale()
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [value, setValue] = useState<string>()
  const pathname = usePathname()
  const params = useParams()

  const onValueChange = (val: string) => {
    setValue(val)

    const nextLocale = val
    startTransition(() => {
      router.replace({ pathname, params }, { locale: nextLocale })
    })
  }

  return (
    <Select.Root
      defaultValue={locale}
      value={value}
      onValueChange={(val) => onValueChange(val)}
      disabled={isPending}
    >
      <Select.Trigger className="flex items-center gap-2 uppercase">
        <Select.Value placeholder={t('label')} />
        <Select.Icon />
      </Select.Trigger>
      <Select.Portal>
        <Select.Content
          className="z-[5] bg-white p-1 rounded-xl"
          position="popper"
          sideOffset={5}
        >
          <Select.Viewport>
            {routing.locales.map((cur) => (
              <Select.Item
                key={cur}
                value={cur}
                className="p-1 text-blue-dark cursor-pointer"
              >
                <Select.ItemText>
                  {t('locale', { locale: cur })}
                </Select.ItemText>
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}
