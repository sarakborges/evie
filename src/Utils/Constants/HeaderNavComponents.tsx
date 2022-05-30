import {
  HeaderNotifications,
  HeaderSettings,
  HeaderMessages,
  HeaderUser,
} from 'Components/Organisms'

export const HEADER_NAV_COMPONENTS = [
  {
    ID: 'messags',
    COMPONENT: <HeaderMessages />,
  },

  {
    ID: 'notifications',
    COMPONENT: <HeaderNotifications />,
  },

  {
    ID: 'settings',
    COMPONENT: <HeaderSettings />,
  },

  {
    ID: 'user',
    COMPONENT: <HeaderUser />,
  },
]
