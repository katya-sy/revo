'use client'
import * as Form from '@radix-ui/react-form'
import { FormField } from '../ui/form-field'
import { Button } from '../ui/button'
import { Close } from '@radix-ui/react-dialog'
import { useState } from 'react'

export const EditProductForm = ({ product }: any) => {
  const [formData, setFormData] = useState({
    title: product.title,
    description: product.description,
    price: product.price,
  })

  async function updateProduct(data) {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL
    if (apiUrl) {
      const res = await fetch(`${apiUrl}/products/${product.id}`, {
        method: 'PATCH',
        body: JSON.stringify({
          title: data.title,
          description: data.description,
          price: data.price,
        }),
        next: {
          revalidate: false,
          tags: ['products'],
        },
      })

      if (!res.ok) {
        throw new Error('Failed to fetch data')
      }
      return res.json()
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
    console.log(name, value)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
    const res = await updateProduct(formData)
    console.log(res)
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
