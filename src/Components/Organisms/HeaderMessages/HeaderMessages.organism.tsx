import React, { ElementRef, FC, useRef } from 'react'
import { Message3 } from '@styled-icons/remix-line/Message3'
import Link from 'next/link'

import { MESSAGES, ROUTES } from 'Utils/Constants'

import { Button } from 'Components/Atoms'
import { Dropdown } from 'Components/Molecules'
import { ChatsList } from 'Components/Organisms/ChatsList'

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
        <Styled.ChatsList>
          <ChatsList onlyUnread />
        </Styled.ChatsList>

        <Styled.SeeAll>
          <Link href={ROUTES.MESSAGES.PATH.replace('[url]', '')}>
            <a>{MESSAGES.SEE_ALL}</a>
          </Link>
        </Styled.SeeAll>
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
