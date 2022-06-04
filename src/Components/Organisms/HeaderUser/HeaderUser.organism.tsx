import React, { ElementRef, FC, Fragment, useContext, useRef } from 'react'
import { CaretDown } from '@styled-icons/ionicons-sharp/CaretDown'

import { HEADER_USER_BUTTONS, PROFILE } from 'Utils/Constants'

import { UserContext } from 'Contexts'

import { Button, Picture } from 'Components/Atoms'
import { ProfileListItem, Dropdown } from 'Components/Molecules'
import { ProfilesList } from 'Components/Organisms/ProfilesList'

import * as Styled from './HeaderUser.style'

export const HeaderUser: FC = () => {
  const dropdownRef = useRef<ElementRef<typeof Dropdown>>(null)
  const dropdownWrapperRef = useRef<HTMLDivElement>(null)

  const {
    userState: { currentProfile, name },
  } = useContext(UserContext)

  return (
    <div ref={dropdownWrapperRef}>
      <Dropdown
        ref={dropdownRef}
        wrapperRef={dropdownWrapperRef}
        title={PROFILE.TITLE.replace('[name]', name)}
        hasCloseButton
      >
        <ProfileListItem profile={currentProfile} buttons={['edit']} />
        <ProfilesList />

        <Styled.Buttons>
          {HEADER_USER_BUTTONS.map((buttonItem) => {
            return (
              <Fragment key={buttonItem._id}>{buttonItem.component()}</Fragment>
            )
          })}
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
