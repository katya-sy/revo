'use client'
import * as Form from '@radix-ui/react-form'
import { FormField } from '../ui/form-field'
import { Button } from '../ui/button'
import { Close } from '@radix-ui/react-dialog'
import { useState } from 'react'
import { updateComboProduct } from '@/utils/api'
import { ComboProduct } from '@/types/combo-product'
import { useComboProductStore } from '@/store/combo-product-store'
import { useLocale, useTranslations } from 'next-intl'

interface EditComboFormProps {
  product: ComboProduct
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const EditComboForm = ({ product, setOpen }: EditComboFormProps) => {
  const comboProducts = useComboProductStore((state) => state.comboProducts)
  const setComboProducts = useComboProductStore(
    (state) => state.setComboProducts,
  )
  const [formData, setFormData] = useState({
    title: product.title,
    description: product.description,
    price: product.price,
    discountPrice: product.discountPrice,
  })
  const t = useTranslations('buttons')
  const locale = useLocale()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
    console.log(name, value)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const updated = await updateComboProduct(locale, product.id, {
        ...formData,
        price: Number(formData.price),
        discountPrice: Number(formData.discountPrice),
      })
      setComboProducts(
        comboProducts.map((product) =>
          product.id === updated.id ? updated : product,
        ),
      )
      console.log('combo store', comboProducts)

      setOpen(false)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Form.Root
      onSubmit={(e) => handleSubmit(e)}
      className="flex flex-col gap-5 w-full"
    >
      <div className="flex flex-col gap-2">
        <FormField
          fieldName="title"
          inputProps={{
            required: true,
            maxLength: 20,
            onChange: handleInputChange,
            value: formData.title,
          }}
        />
        <FormField
          fieldName="description"
          inputProps={{
            required: true,
            maxLength: 75,
            onChange: handleInputChange,
            value: formData.description,
          }}
        />
        <FormField
          fieldName="price"
          inputProps={{
            required: true,
            type: 'number',
            onChange: handleInputChange,
            value: formData.price,
          }}
        />
        <FormField
          fieldName="discountPrice"
          inputProps={{
            required: true,
            type: 'number',
            onChange: handleInputChange,
            value: formData.discountPrice,
          }}
        />
      </div>
      <div className="flex justify-between gap-2">
        <Form.Submit asChild>
          <Button> {t('save')}</Button>
        </Form.Submit>
        <Close asChild>
          <Button intent="secondary" className="bg-grey hover:bg-grey/70">
            {t('cancel')}
          </Button>
        </Close>
      </div>
    </Form.Root>
  )
}
