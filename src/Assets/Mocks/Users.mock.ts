import { ProfilesMock } from './Profiles.mock'

import { UserProps } from 'Utils/Props'

export const UsersMock: UserProps[] = [
  {
    _id: '0',
    profiles: [...ProfilesMock],

    currentProfile: {
      ...ProfilesMock[0],
    },
  },
]
