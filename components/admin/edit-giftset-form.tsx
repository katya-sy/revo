'use client'
import * as Form from '@radix-ui/react-form'
import { FormField } from '../ui/form-field'
import { Button } from '../ui/button'
import { Close } from '@radix-ui/react-dialog'
import { useState } from 'react'
import { updateGiftset } from '@/utils/api'
import { Giftset } from '@/types/gifset'
import { useGiftsetStore } from '@/store/giftset-store'
import { EditCharacteristicsForm } from './edit-characteristics-form'

interface EditGiftsetFormProps {
  giftset: Giftset
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const EditGiftsetForm = ({ giftset, setOpen }: EditGiftsetFormProps) => {
  const giftsets = useGiftsetStore((state) => state.giftsets)
  const setGiftsets = useGiftsetStore((state) => state.setGiftsets)
  const [formData, setFormData] = useState({
    title: giftset.title,
    description: giftset.description,
    price: giftset.price,
  })
  const [characteristics, setCharacteristics] = useState(
    giftset.characteristics,
  )

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const updated = await updateGiftset(giftset.id, {
        ...formData,
        price: Number(formData.price),
      })
      setGiftsets(
        giftsets.map((giftset) =>
          giftset.id === updated.id ? updated : giftset,
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
            maxLength: 40,
            onChange: handleInputChange,
            value: formData.title,
          }}
        />
        <FormField
          fieldName="description"
          inputProps={{
            required: true,
            maxLength: 275,
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
      <div className="flex justify-between gap-4">
        {characteristics.map((characteristic) => (
          <EditCharacteristicsForm
            key={characteristic.title}
            characteristic={characteristic}
          />
        ))}
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
