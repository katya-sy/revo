'use client'
import * as Dialog from '@radix-ui/react-dialog'
import { CustomDialogPortal } from '../ui/custom-dialog-portal'
import { EditProductForm } from './edit-product-form'
import { Button } from '../ui/button'
import { Edit } from '../shared/edit'
import { useState } from 'react'

export const ProductEditDialog = ({ product }: any) => {
  const [open, setOpen] = useState(false)

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <Button className="top-2 right-2 absolute" intent="icon">
          <Edit />
        </Button>
      </Dialog.Trigger>
      <CustomDialogPortal setOpen={setOpen}>
        <EditProductForm setOpen={setOpen} product={product} />
      </CustomDialogPortal>
    </Dialog.Root>
  )
}
