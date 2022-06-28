import { NotificationProps } from 'Utils/Props'

import { ProfilesMock } from './Profiles.mock'

export const NotificationsMock: NotificationProps[] = [
  {
    _id: '0',
    type: 'newConnection',
    time: new Date('Mon Jun 27 2022 22:02:06 GMT-0300'),

    profile: { ...ProfilesMock[1] },
  },
]
