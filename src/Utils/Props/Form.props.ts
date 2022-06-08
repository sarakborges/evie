export interface FormProps {
  ID:
    | 'register_name'
    | 'register_email'
    | 'register_password'
    | 'register_confirm_password'
    | 'register_gender'
    | 'login_email'
    | 'login_password'
    | 'register_profile_name'
  TYPE: 'text' | 'password' | 'select'
  LABEL: string
  PLACEHOLDER: string
  OPTIONS?: string[]
}
