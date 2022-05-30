import React, { ElementRef, FC, useContext, useRef } from 'react'
import { CaretDown } from '@styled-icons/ionicons-sharp/CaretDown'
import { Pencil } from '@styled-icons/boxicons-solid/Pencil'
import { Logout } from '@styled-icons/material-outlined/Logout'
import { UserPlus } from '@styled-icons/fa-solid/UserPlus'
import { TrashFill } from '@styled-icons/bootstrap/TrashFill'
import { Cog } from '@styled-icons/heroicons-solid/Cog'

import { PROFILE } from 'Utils/Constants'

import { UserContext } from 'Contexts'

import { Button, Picture, Text } from 'Components/Atoms'
import { Dropdown } from 'Components/Molecules'

import * as Styled from './HeaderUser.style'

export const HeaderUser: FC = () => {
  const dropdownRef = useRef<ElementRef<typeof Dropdown>>(null)
  const dropdownWrapperRef = useRef<HTMLDivElement>(null)

  const {
    userState: { profiles, currentProfile },
  } = useContext(UserContext)

  const profilesList = [
    ...profiles.filter((profileItem) => profileItem._id !== currentProfile._id),
  ]

  return (
    <div ref={dropdownWrapperRef}>
      <Dropdown
        ref={dropdownRef}
        wrapperRef={dropdownWrapperRef}
        title={PROFILE.TITLE.replace('[name]', currentProfile?.name)}
        hasCloseButton
      >
        <Styled.CurrentProfile>
          <Picture
            image={currentProfile?.picture}
            alt={currentProfile?.name}
            size={40}
          />

          <Styled.ProfileText>
            <Text lh={1.4}>{currentProfile?.name}</Text>

            <Text lh={1.4} fc="grayMedium" fs="12px">
              @{currentProfile?.url}
            </Text>
          </Styled.ProfileText>

          <Styled.ProfileButtons>
            <Button rounded dark>
              <Pencil />
            </Button>
          </Styled.ProfileButtons>
        </Styled.CurrentProfile>

        <Styled.ProfilesList>
          {profilesList.map((profileItem) => {
            return (
              <Button key={profileItem?._id} transparent>
                <Picture
                  image={profileItem?.picture}
                  alt={profileItem?.name}
                  size={40}
                />

                <Styled.ProfileText>
                  <Text lh={1.4}>{profileItem?.name}</Text>

                  <Text lh={1.4} fc="grayMedium" fs="12px">
                    @{profileItem?.url}
                  </Text>
                </Styled.ProfileText>

                <Styled.ProfileButtons>
                  <Button rounded dark>
                    <TrashFill />
                  </Button>
                </Styled.ProfileButtons>
              </Button>
            )
          })}
        </Styled.ProfilesList>

        <Styled.Buttons>
          <Button transparent>
            <UserPlus />
            <>Create new profile</>
          </Button>

          <Button transparent>
            <Cog />
            <>Account settings</>
          </Button>

          <Button transparent>
            <Logout />
            <>Log out</>
          </Button>
        </Styled.Buttons>
      </Dropdown>

      <Button
        transparent
        onClick={() => {
          dropdownRef?.current?.toggleDropdown()
        }}
      >
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
