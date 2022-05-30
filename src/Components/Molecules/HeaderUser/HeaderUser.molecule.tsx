import React, { FC, useContext } from 'react'
import { CaretDown } from '@styled-icons/ionicons-sharp/CaretDown'

import { UserContext } from 'Contexts'

import { Button, Picture } from 'Components/Atoms'

import * as Styled from './HeaderUser.style'

export const HeaderUser: FC = () => {
  const {
    userState: { currentProfile },
  } = useContext(UserContext)

  return (
    <div>
      <Button transparent>
        <Picture
          image={currentProfile?.picture}
          alt={currentProfile?.name}
          size={48}
          hasBorder
        />

        <Styled.Dropdown>
          <CaretDown />
        </Styled.Dropdown>
      </Button>
    </div>
  )
}
