import { PRONOUNS } from 'Utils/Constants'
import { RegisterFormInterface } from 'Utils/Props'

export const REGISTER_FORM: RegisterFormInterface = {
  ERROR: `All required fields need to be filled before we can advance.`,

  STEPS: [
    {
      TEXT: `First off. The most important stuff. This is only used by us to communicate with you. Other users can't see this.`,

      FIELDS: [
        {
          ID: `register_name`,
          TYPE: `text`,
          LABEL: `How should we call you?`,
          PLACEHOLDER: `The name you identify yourself`,
          REQUIRED: true,
          REQUIRED_ERROR: `You need to fill this before we can advance.`,
        },

        {
          ID: `register_gender`,
          TYPE: `select`,
          LABEL: `Your pronouns <If you haven't identified yourself with any of those, please talk to us. We want to adapt and improve!>`,
          PLACEHOLDER: `The way you identify yourself`,
          OPTIONS: [...PRONOUNS],
          REQUIRED: true,
          REQUIRED_ERROR: `You need to fill this before we can advance.`,
        },
      ],
    },

    {
      TEXT: `Alright, [register_name]! Great to know you! Now, we will need you to input your login info.`,

      FIELDS: [
        {
          ID: `register_email`,
          TYPE: `text`,
          LABEL: `Your email`,
          PLACEHOLDER: `user@email.com`,
          REQUIRED: true,
          REQUIRED_ERROR: `You need to fill this before we can advance.`,
        },

        {
          ID: `register_password`,
          TYPE: `password`,
          LABEL: `Your password`,
          PLACEHOLDER: `Very secure password`,
          REQUIRED: true,
          REQUIRED_ERROR: `You need to fill this before we can advance.`,
        },

        {
          ID: `register_confirm_password`,
          TYPE: `password`,
          LABEL: `Confirm your password`,
          PLACEHOLDER: `Repeat that same very secure password`,
          REQUIRED: true,
          REQUIRED_ERROR: `You need to fill this before we can advance.`,
        },
      ],
    },

    {
      TEXT: `Now, we need to create your profile.`,

      FIELDS: [
        {
          ID: `register_profile_name`,
          TYPE: `text`,
          LABEL: `Profile name`,
          PLACEHOLDER: `Name displayed on your profile`,
          REQUIRED: true,
          REQUIRED_ERROR: `You need to fill this before we can advance.`,
        },
      ],
    },
  ],
}
