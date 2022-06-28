import React, { FC } from 'react'

import { MESSAGES } from 'Utils/Constants'

import { HomeSidebar, ChatsList } from 'Components/Organisms'

import * as Styled from './Home.style'

export const HomeTemplate: FC = () => {
  return (
    <Styled.HomeTemplate>
      <HomeSidebar />

      <Styled.ChatBar>
        <ChatsList title={MESSAGES.TITLE} hasFilter />
      </Styled.ChatBar>
    </Styled.HomeTemplate>
  )
}
