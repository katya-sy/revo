'use client'
import * as Dialog from '@radix-ui/react-dialog'
import { CustomDialogPortal } from '../ui/custom-dialog-portal'
import { Button } from '../ui/button'
import { Edit } from '../shared/edit'
import { useState } from 'react'
import { ComboProduct } from '@/types/combo-product'
import { EditComboForm } from './edit-combo-form'

interface ComboEditDialogProps {
  product: ComboProduct
}

export const ComboEditDialog = ({ product }: ComboEditDialogProps) => {
  const [open, setOpen] = useState(false)

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <Button className="top-2 right-2 absolute" intent="icon">
          <Edit />
        </Button>
      </Dialog.Trigger>
      <CustomDialogPortal setOpen={setOpen}>
        <EditComboForm setOpen={setOpen} product={product} />
      </CustomDialogPortal>
    </Dialog.Root>
  )
}
