import * as Dialog from '@radix-ui/react-dialog'
import { ReactNode } from 'react'
import { Close } from '../shared/close'

interface CustomDialogPortalProps {
  children: ReactNode
}

export const CustomDialogPortal = ({ children }: CustomDialogPortalProps) => {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black/60" />
      <Dialog.Content className="top-1/2 left-1/2 fixed flex justify-center items-center bg-blue p-5 rounded-xl w-[calc(100%-32px)] sm:w-3/4 md:w-1/2 max-w-screen-md -translate-x-1/2 -translate-y-1/2">
        {children}
        <Dialog.Close
          asChild
          className="top-4 right-4 absolute text-grey hover:text-beige cursor-pointer"
        >
          <Close />
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
