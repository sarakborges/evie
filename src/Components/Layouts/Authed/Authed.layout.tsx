import React, { FC, ReactNode, useCallback, useContext, useEffect } from 'react'

import { UserAPI } from 'Apis'

import { UserContext } from 'Contexts'

import { Header } from 'Components/Organisms'

import * as Styled from './Authed.style'

export const Authed: FC<{ children: ReactNode }> = ({ children }) => {
  const { setUserState } = useContext(UserContext)

  const getUser = useCallback(async () => {
    const currentUser = await UserAPI.getUserById('0')

    setUserState?.({ ...currentUser, currentProfile: currentUser?.profiles[0] })
  }, [])

  useEffect(() => {
    getUser()
  }, [getUser])

  return (
    <Styled.Layout>
      <Header />

      <Styled.Content>{children}</Styled.Content>
    </Styled.Layout>
  )
}
