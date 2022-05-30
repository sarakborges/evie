import React, { ElementRef, FC, useRef } from 'react'
import { Message3 } from '@styled-icons/remix-line/Message3'

import { MESSAGES } from 'Utils/Constants'

import { Button, Text } from 'Components/Atoms'
import { Dropdown } from 'Components/Molecules'

import * as Styled from './HeaderMessages.style'

export const HeaderMessages: FC = () => {
  const dropdownRef = useRef<ElementRef<typeof Dropdown>>(null)
  const dropdownWrapperRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={dropdownWrapperRef}>
      <Dropdown
        ref={dropdownRef}
        wrapperRef={dropdownWrapperRef}
        title={MESSAGES.TITLE}
        hasCloseButton
      >
        <div>
          <Styled.NoMessages>
            <Text lh={1.4}>{MESSAGES.NONE}</Text>
          </Styled.NoMessages>
        </div>
      </Dropdown>

      <Button
        transparent
        onClick={() => {
          dropdownRef?.current?.toggleDropdown()
        }}
      >
        <Message3 />
      </Button>
    </div>
  )
}
