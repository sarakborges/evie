import React, { ElementRef, FC, useRef } from 'react'
import { Bell } from '@styled-icons/entypo/Bell'

import { NotificationsMock } from 'Assets/Mocks'

import { NOTIFICATIONS } from 'Utils/Constants'
import { NotificationProps } from 'Utils/Props'

import { Button, CounterBubble, Text } from 'Components/Atoms'
import { Dropdown } from 'Components/Molecules'

import { NotificationItemConnection } from 'Components/Molecules'

import * as Styled from './HeaderNotifications.style'

export const HeaderNotifications: FC = () => {
  const notifications = [...NotificationsMock]

  const dropdownRef = useRef<ElementRef<typeof Dropdown>>(null)
  const dropdownWrapperRef = useRef<HTMLDivElement>(null)

  const notificationComponents = {
    newConnection: (item: NotificationProps) => (
      <NotificationItemConnection notification={item} />
    ),
  }

  return (
    <div ref={dropdownWrapperRef}>
      <Dropdown
        ref={dropdownRef}
        wrapperRef={dropdownWrapperRef}
        hasCloseButton
        title={NOTIFICATIONS.TITLE}
      >
        {notifications.length > 0 ? (
          <Styled.NotificationsList>
            {notifications.map((notificationItem) => {
              return notificationComponents[notificationItem.type](
                notificationItem
              )
            })}
          </Styled.NotificationsList>
        ) : (
          <Styled.NoNotifications>
            <Text lh={1.4}>{NOTIFICATIONS.NONE}</Text>
          </Styled.NoNotifications>
        )}
      </Dropdown>

      <Button
        transparent
        onClick={() => {
          dropdownRef?.current?.toggleDropdown()
        }}
      >
        <Bell />

        {notifications.length > 0 && (
          <CounterBubble>{notifications.length}</CounterBubble>
        )}
      </Button>
    </div>
  )
}
