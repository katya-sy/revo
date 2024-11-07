import * as Form from '@radix-ui/react-form'

interface FormFieldProps {
  fieldName: string
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>
}

export const FormField = ({ fieldName, inputProps }: FormFieldProps) => {
  return (
    <Form.Field className="flex flex-col gap-1" name={fieldName}>
      <div className="flex items-baseline gap-4">
        <Form.Label className="text-grey text-lg uppercase">
          {fieldName}
        </Form.Label>
        <Form.Message
          className="text-red-400 text-xs sm:text-sm"
          match="valueMissing"
        >
          Please enter {fieldName}
        </Form.Message>
      </div>
      <Form.Control asChild>
        <input
          className="bg-grey px-4 py-1 rounded-full text-blue-dark invalid:outline-red-400"
          {...inputProps}
        />
      </Form.Control>
    </Form.Field>
  )
}
