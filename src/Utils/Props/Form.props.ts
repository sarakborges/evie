export type FormIdsType =
  | 'register_name'
  | 'register_email'
  | 'register_password'
  | 'register_confirm_password'
  | 'register_gender'
  | 'login_email'
  | 'login_password'
  | 'register_profile_name'

export interface FormProps {
  ID: FormIdsType
  TYPE: 'text' | 'password' | 'select'
  LABEL: string
  PLACEHOLDER: string
  OPTIONS?: string[]
  REQUIRED?: boolean
  REQUIRED_ERROR?: string
}

export interface FormItemProps {
  id: FormIdsType
  value: string
  warning: string
}
