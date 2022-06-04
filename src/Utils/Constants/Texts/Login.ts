import { SITE_NAME } from 'Utils/Constants'

export const LOGIN = {
  WELCOME: `Welcome to ${SITE_NAME.PLAIN}!`,
  SIGNIN: `Log in`,
  SUBMIT: `Advance`,
  NOT_REGISTERED: `I don't have a account`,

  FORM: [
    {
      ID: `login_email`,
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
