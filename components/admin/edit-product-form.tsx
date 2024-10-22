'use client'
import * as Form from '@radix-ui/react-form'
import { FormField } from '../ui/form-field'
import { Button } from '../ui/button'
import { Close } from '@radix-ui/react-dialog'
import { useState } from 'react'
import { Product } from '@/types/produst'

interface EditProductFormProps {
  product: Product
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const EditProductForm = ({ product, setOpen }: EditProductFormProps) => {
  const [formData, setFormData] = useState({
    title: product.title,
    description: product.description,
    price: product.price,
  })

  async function updateProduct(data: {
    title: string
    description: string
    price: number
  }) {
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL
      if (apiUrl) {
        const res = await fetch(`${apiUrl}/products/${product.id}`, {
          method: 'PATCH',
          body: JSON.stringify({
            title: data.title,
            description: data.description,
            price: data.price,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
          next: {
            revalidate: false,
            tags: ['products'],
          },
        })

        if (!res.ok) {
          throw new Error('Failed to patch data')
        }
        return res.json()
      }
    } catch (error) {
      console.error(error)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
    console.log(name, value)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await updateProduct(formData)
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
          <Button>Save changes</Button>
        </Form.Submit>
        <Close asChild>
          <Button intent="secondary" className="bg-grey hover:bg-grey/70">
            Cancel
          </Button>
        </Close>
      </div>
    </Form.Root>
  )
}
