import { ComponentPropsWithoutRef, Dispatch } from 'react'

import { GenericFormProps, GenericFormStepsProps } from 'Utils/Props'

export interface FormProps extends ComponentPropsWithoutRef<'form'> {
  form: GenericFormStepsProps
  step?: number
  formState: GenericFormProps
  setFormState: Dispatch<any> | null
  buttonStyles?: 'primary' | 'secondary'
}
