const NAME = 'Evie'

export const SITE_NAME = {
  PLAIN: NAME,
  PAGE_TITLE: `${NAME} - `,
}

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

export const CONNECTIONS = {
  TITLE: `Connections`,
  NONE: `You currently have no connections.`,
  SEE_ALL: `See all`,

  BUTTONS: {
    ACCEPT: `Accept`,
    REFUSE: `Refuse`,
  },
}

export const GROUPS = {
  TITLE: `Groups`,
  NONE: `You currently do not participate of any groups.`,
  SEE_ALL: `See all`,
}

export const PROFILE = {
  TITLE: `Hello, [name]!`,
}

export const NOTIFICATIONS = {
  TITLE: `Notifications`,
  NONE: `Nothing demanding your attention right now.`,
  NEW: ` wants to connect with you.`,
}

export const SETTINGS = {
  TITLE: `Settings`,

  THEME: {
    TITLE: `App theme:`,

    OPTIONS: {
      LIGHT: `Light`,
      DARK: `Dark`,
    },
  },

  COLOR: `App accent color:`,
}

export const MESSAGES = {
  TITLE: `Messages`,
  NONE: `No new messages.`,
}
