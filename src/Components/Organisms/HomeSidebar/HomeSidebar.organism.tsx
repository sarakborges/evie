import React, { FC, useContext } from 'react'

import { UserContext } from 'Contexts'

import { HomeSidebarUser, HomeSidebarList } from 'Components/Molecules'

import * as Styled from './HomeSidebar.style'

export const HomeSidebar: FC = () => {
  const {
    userState: { currentProfile },
  } = useContext(UserContext)

  return (
    <Styled.Sidebar>
      <HomeSidebarUser />

      <Styled.Lists>
        <HomeSidebarList
          list={currentProfile?.connections}
          type="connections"
        />

        <HomeSidebarList list={currentProfile?.groups} type="groups" />
      </Styled.Lists>
    </Styled.Sidebar>
  )
}
