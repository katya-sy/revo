'use client'
import * as Form from '@radix-ui/react-form'
import { FormField } from '../ui/form-field'
import { Button } from '../ui/button'
import { Close } from '@radix-ui/react-dialog'
import { useState } from 'react'
import { Characteristics } from '@/types/gifset'

interface EditCharacteristicsFormProps {
  characteristic: Characteristics
  // setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const EditCharacteristicsForm = ({
  characteristic,
}: EditCharacteristicsFormProps) => {
  const [formData, setFormData] = useState({
    title: characteristic.title,
    description: characteristic.desc,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
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
            maxLength: 10,
            onChange: handleInputChange,
            value: formData.title,
          }}
        />
        <FormField
          fieldName="description"
          inputProps={{
            required: true,
            maxLength: 20,
            onChange: handleInputChange,
            value: formData.description,
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
