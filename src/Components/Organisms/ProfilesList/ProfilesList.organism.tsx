import React, { FC, useContext } from 'react'

import { UserContext } from 'Contexts'

import { Button } from 'Components/Atoms'
import { ProfileListItem } from 'Components/Molecules/ProfileListItem'

import * as Styled from './ProfilesList.style'

export const ProfilesList: FC = () => {
  const {
    userState: { profiles, currentProfile },
  } = useContext(UserContext)

  const profilesList = [
    ...profiles.filter((profileItem) => profileItem._id !== currentProfile._id),
  ]

  return (
    <Styled.ProfilesList>
      {profilesList.map((profileItem) => {
        return (
          <Button key={profileItem?._id} transparent>
            <ProfileListItem profile={profileItem} buttons={['delete']} />
          </Button>
        )
      })}
    </Styled.ProfilesList>
  )
}
