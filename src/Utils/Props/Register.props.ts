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
    value: string
    error: string
  }[]
}

export interface RegisterConstInterface {
  WELCOME: string
  PROCEED: string
  ALREADY_REGISTERED: string
  ADVANCE: string
  BACK: string
  SUBMIT: string

  FORM: {
    ERROR: string

    STEPS: {
      TEXT: string

      FIELDS: {
        ID:
          | 'register_name'
          | 'register_email'
          | 'register_password'
          | 'register_confirm_password'
          | 'register_gender'
        TYPE: 'text' | 'password' | 'select'
        LABEL: string
        PLACEHOLDER: string
        OPTIONS?: string[]
      }[]
    }[]
  }
}
