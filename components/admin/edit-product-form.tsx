'use client'
import * as Form from '@radix-ui/react-form'
import { FormField } from '../ui/form-field'
import { Button } from '../ui/button'
import { Close } from '@radix-ui/react-dialog'
import { useState } from 'react'
import { Product } from '@/types/product'
import { useProductStore } from '@/store/product-store'
import { updateProduct } from '@/utils/api'
import { useLocale, useTranslations } from 'next-intl'

interface EditProductFormProps {
  product: Product
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const EditProductForm = ({ product, setOpen }: EditProductFormProps) => {
  const products = useProductStore((state) => state.products)
  const setProducts = useProductStore((state) => state.setProducts)
  const [formData, setFormData] = useState({
    title: product.title,
    description: product.description,
    price: product.price,
  })
  const t = useTranslations('buttons')
  const locale = useLocale()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const updated = await updateProduct(locale, product.id, {
        ...formData,
        price: Number(formData.price),
      })
      setProducts(
        products.map((product) =>
          product.id === updated.id ? updated : product,
        ),
      )
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
            maxLength: 45,
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
