import React, { FC, useContext } from 'react'
import Link from 'next/link'

import { ROUTES } from 'Utils/Constants'

import { UserContext } from 'Contexts'

import { Text, Picture } from 'Components/Atoms'

import * as Styled from './HomeSidebarUser.style'

export const HomeSidebarUser: FC = () => {
  const {
    userState: { currentProfile },
  } = useContext(UserContext)

  return (
    <Styled.User>
      <Link href={ROUTES.PROFILE.PATH.replace('[url]', currentProfile?.url)}>
        <a>
          <Picture
            image={currentProfile?.picture}
            alt={currentProfile?.name}
            size={148}
            hasBorder
            borderWidth={2}
          />

          <Styled.UserName>
            <Text fs="20px" fw={500} lh={1.2}>
              {currentProfile?.name}
            </Text>

            <Text fc="grayMedium" lh={1.2}>
              @{currentProfile?.url}
            </Text>
          </Styled.UserName>
        </a>
      </Link>
    </Styled.User>
  )
}
