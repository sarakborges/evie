import React, { FC } from 'react'
import Link from 'next/link'
import { ArrowBarLeft } from '@styled-icons/bootstrap/ArrowBarLeft'

import { ROUTES } from 'Utils/Constants'
import { getTimeString } from 'Utils/Functions'

import { Picture, Text } from 'Components/Atoms'

import { ChatsListProfileItemProps } from './ChatsListProfileItem.props'
import * as Styled from './ChatsListProfileItem.style'

export const ChatsListProfileItem: FC<ChatsListProfileItemProps> = ({
  profile,
  message,
}) => {
  return (
    <Link href={ROUTES.MESSAGES.PATH.replace('[url]', profile?.url)}>
      <a>
        <Styled.ProfileItem seen={message?.seen}>
          <Picture
            image={profile?.picture}
            alt={profile?.name}
            size={40}
            hasBorder
          />

          <Styled.ProfileText>
            <Styled.ProfileName>
              {profile?.name}

              <Text lh={1.4} fc="mainLight2" fs="12px">
                (@{profile?.url})
              </Text>
            </Styled.ProfileName>

            <Styled.Message>
              {message?.sender !== profile?._id && <b>You:</b>}

              <Text fs="12px">{message?.text}</Text>
            </Styled.Message>

            <Text fs="10px" fc="grayMedium">
              {getTimeString(message?.time)}
            </Text>
          </Styled.ProfileText>
        </Styled.ProfileItem>
      </a>
    </Link>
  )
}
