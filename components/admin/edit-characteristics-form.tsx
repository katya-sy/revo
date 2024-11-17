'use client'
import * as Form from '@radix-ui/react-form'
import { FormField } from '../ui/form-field'
import { Button } from '../ui/button'
import { Dispatch, SetStateAction, useState } from 'react'
import { Characteristics } from '@/types/gifset'
import { CharacteristicIcons } from '../shared/characteristic-icons'

interface EditCharacteristicsFormProps {
  characteristic: Characteristics
  prevCharacteristics: Characteristics[]
  setCharacteristics: Dispatch<SetStateAction<Characteristics[]>>
}

export const EditCharacteristicsForm = ({
  characteristic,
  prevCharacteristics,
  setCharacteristics,
}: EditCharacteristicsFormProps) => {
  const [formData, setFormData] = useState({
    title: characteristic.title,
    desc: characteristic.desc,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = async () => {
    setCharacteristics(
      prevCharacteristics.map((char) =>
        char.title === characteristic.title
          ? { ...characteristic, ...formData }
          : char,
      ),
    )
  }

  return (
    <Form.Root className="flex flex-col gap-5 w-full">
      <div className="flex flex-col gap-2">
        <CharacteristicIcons
          iconName={characteristic.iconName}
          className="text-white"
        />
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
          fieldName="desc"
          inputProps={{
            required: true,
            maxLength: 20,
            onChange: handleInputChange,
            value: formData.desc,
          }}
        />
      </div>
      <div className="flex justify-between gap-2">
        <Button
          type="button"
          onClick={handleSubmit}
          className="px-2 py-1 text-sm"
        >
          Save changes
        </Button>
      </div>
    </Form.Root>
  )
}
