import { NotificationProps } from 'Utils/Props'

import { ProfilesMock } from './Profiles.mock'

export const NotificationsMock: NotificationProps[] = [
  {
    _id: '0',
    type: 'newConnection',
    time: new Date(),

    profile: { ...ProfilesMock[1] },
  },
]
