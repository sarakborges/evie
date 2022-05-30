import { HeaderUser } from 'Components/Molecules'

import {
  HeaderNotifications,
  HeaderSettings,
  HeaderMessages,
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
