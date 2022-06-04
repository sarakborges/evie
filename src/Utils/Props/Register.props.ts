export interface RegisterProps {
  step: number
  hasError: boolean

  form: {
    register_name: {
      value: string
      error: string
    }

    register_email: {
      value: string
      error: string
    }

    register_password: {
      value: string
      error: string
    }

    register_confirm_password: {
      value: string
      error: string
    }
  }
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
        TYPE: string
        LABEL: string
        PLACEHOLDER: string
      }[]
    }[]
  }
}
