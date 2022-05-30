import React, { FC } from 'react'
import Link from 'next/link'

import { CONNECTIONS, NOTIFICATIONS, ROUTES } from 'Utils/Constants'
import { GetTimeString } from 'Utils/Functions'

import { Button, Picture, Text } from 'Components/Atoms'

import { NotificationItemConnectionProps } from './NotificationItemConnection.props'
import * as Styled from './NotificationItemConnection.style'

export const NotificationItemConnection: FC<
  NotificationItemConnectionProps
> = ({ notification }) => {
  const profileLink = ROUTES.PROFILE.PATH.replace(
    '[url]',
    notification.profile.url
  )

  return (
    <Styled.NotificationItem>
      <Styled.ProfilePicture>
        <Link href={profileLink}>
          <a>
            <Picture
              image={notification.profile.picture}
              alt={notification.profile.name}
              size={48}
            />
          </a>
        </Link>
      </Styled.ProfilePicture>

      <Styled.NotificationText>
        <div>
          <Text fs="12px" lh={1.4}>
            <Styled.ProfileName>
              <Link href={profileLink}>
                <a>{notification.profile.name}</a>
              </Link>
            </Styled.ProfileName>

            <>{NOTIFICATIONS.NEW}</>
          </Text>
        </div>

        <Styled.NotificationButtons>
          <Button primary>{CONNECTIONS.BUTTONS.ACCEPT}</Button>
          <Button primary>{CONNECTIONS.BUTTONS.REFUSE}</Button>
        </Styled.NotificationButtons>

        <Text fs="12px" fc="grayMedium">
          {GetTimeString(notification.time)}
        </Text>
      </Styled.NotificationText>
    </Styled.NotificationItem>
  )
}
