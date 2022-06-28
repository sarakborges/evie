import React, { FC } from 'react'

import { HomeSidebar, ChatsList } from 'Components/Organisms'

import * as Styled from './Home.style'

export const HomeTemplate: FC = () => {
  return (
    <Styled.HomeTemplate>
      <HomeSidebar />

      <Styled.ChatBar>
        <ChatsList title="Messages" />
      </Styled.ChatBar>
    </Styled.HomeTemplate>
  )
}
