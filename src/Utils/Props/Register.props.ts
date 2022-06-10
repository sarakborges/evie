import { FormItemProps, FormProps } from './Form.props'

export interface RegisterProps {
  step: number
  form: FormItemProps[]
}

export interface RegisterFormInterface {
  ERROR: string

  STEPS: {
    TEXT: string

    FIELDS: FormProps[]
  }[]
}
