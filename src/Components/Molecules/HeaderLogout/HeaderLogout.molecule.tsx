import React, { FC } from 'react'
import { useRouter } from 'next/router'
import { Logout } from '@styled-icons/material-outlined/Logout'

import { Button } from 'Components/Atoms'
import { ROUTES } from 'Utils/Constants'

export const HeaderLogout: FC = () => {
  const router = useRouter()

  const doLogout = () => {
    router.push(ROUTES.LOGIN.PATH)
  }

  return (
    <Button transparent onClick={doLogout}>
      <Logout />
      <>Log out</>
    </Button>
  )
}
