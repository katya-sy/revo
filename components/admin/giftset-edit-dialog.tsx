'use client'
import * as Dialog from '@radix-ui/react-dialog'
import { CustomDialogPortal } from '../ui/custom-dialog-portal'
import { Button } from '../ui/button'
import { Edit } from '../shared/edit'
import { useState } from 'react'
import { Giftset } from '@/types/gifset'
import { EditGiftsetForm } from './edit-giftset-form'

interface GiftsetEditDialogProps {
  giftset: Giftset
}

export const GiftsetEditDialog = ({ giftset }: GiftsetEditDialogProps) => {
  const [open, setOpen] = useState(false)

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <Button className="top-2 right-2 absolute" intent="icon">
          <Edit />
        </Button>
      </Dialog.Trigger>
      <CustomDialogPortal setOpen={setOpen}>
        <EditGiftsetForm setOpen={setOpen} giftset={giftset} />
      </CustomDialogPortal>
    </Dialog.Root>
  )
}
