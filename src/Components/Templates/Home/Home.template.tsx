import React, { FC } from 'react'

import { HomeSidebar } from 'Components/Organisms'

import * as Styled from './Home.style'

export const HomeTemplate: FC = () => {
  return (
    <Styled.HomeTemplate>
      <HomeSidebar />
    </Styled.HomeTemplate>
  )
}
