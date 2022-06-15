import { GenericFormStepsProps } from 'Utils/Props'

export const LOGIN_FORM: GenericFormStepsProps = {
  STEPS: [
    {
      SUBMIT_TEXT: `Advance`,

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
    },
  ],
}
