import { FormProps } from './Form.props'

export interface RegisterProps {
  step: number
  hasError: boolean

  form: {
    id:
      | 'register_name'
      | 'register_email'
      | 'register_password'
      | 'register_confirm_password'
      | 'register_gender'
      | 'register_profile_name'
    value: string
    error: string
  }[]
}

export interface RegisterFormInterface {
  ERROR: string

  STEPS: {
    TEXT: string

    FIELDS: FormProps[]
  }[]
}
