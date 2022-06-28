import React, { FC, Fragment } from 'react'
import { SwitchHorizontal } from '@styled-icons/heroicons-solid/SwitchHorizontal'
import { Pencil } from '@styled-icons/boxicons-solid/Pencil'
import { TrashFill } from '@styled-icons/bootstrap/TrashFill'

import { Button, Picture, Text } from 'Components/Atoms'

import { ProfileListItemProps } from './ProfileListItem.props'
import * as Styled from './ProfileListItem.style'

export const ProfileListItem: FC<ProfileListItemProps> = ({
  profile,
  buttons,
}) => {
  const buttonsComponents = {
    select: () => (
      <Button rounded dark>
        <SwitchHorizontal />
      </Button>
    ),

    edit: () => (
      <Button rounded dark>
        <Pencil />
      </Button>
    ),

    delete: () => (
      <Button rounded dark>
        <TrashFill />
      </Button>
    ),
  }

  return (
    <Styled.ProfileItem>
      <Picture
        image={profile?.picture}
        alt={profile?.name}
        size={40}
        hasBorder
      />

      <Styled.ProfileText>
        <Text lh={1.4}>{profile?.name}</Text>

        <Text lh={1.4} fc="grayMedium" fs="12px">
          @{profile?.url}
        </Text>
      </Styled.ProfileText>

      {buttons?.length && (
        <Styled.ProfileButtons>
          {buttons.map((buttonItem) => {
            return (
              <Fragment key={buttonItem}>
                {buttonsComponents[buttonItem]()}
              </Fragment>
            )
          })}
        </Styled.ProfileButtons>
      )}
    </Styled.ProfileItem>
  )
}
