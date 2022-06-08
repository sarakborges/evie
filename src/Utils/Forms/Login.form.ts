import { LoginFormProps } from 'Utils/Props'

export const LOGIN_FORM: LoginFormProps = {
  FIELDS: [
    {
      ID: `login_email`,
      TYPE: `text`,
      LABEL: `Your email`,
      PLACEHOLDER: `user@example.com`,
    },

    {
      ID: `login_password`,
      TYPE: `password`,
      LABEL: `Your password`,
      PLACEHOLDER: `Very secure password`,
    },
  ],
}
