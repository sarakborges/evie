import { UserPlus } from '@styled-icons/fa-solid/UserPlus'
import { Cog } from '@styled-icons/heroicons-solid/Cog'
import { Logout } from '@styled-icons/material-outlined/Logout'

import { Button } from 'Components/Atoms'

export const HEADER_USER_BUTTONS = [
  {
    _id: 'newProfile',
    component: () => (
      <Button transparent>
        <UserPlus />
        <>Create new profile</>
      </Button>
    ),
  },

  {
    _id: 'accountSettings',
    component: () => (
      <Button transparent>
        <Cog />
        <>Account settings</>
      </Button>
    ),
  },

  {
    _id: 'logout',
    component: () => (
      <Button transparent>
        <Logout />
        <>Log out</>
      </Button>
    ),
  },
]
