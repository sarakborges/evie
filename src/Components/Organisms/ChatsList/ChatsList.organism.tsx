import React, { FC, useContext } from 'react'
import { MessageSquareX } from '@styled-icons/boxicons-regular/MessageSquareX'

import { UserContext } from 'Contexts'

import { MESSAGES } from 'Utils/Constants'

import { Text } from 'Components/Atoms'
import { ChatsListProfileItem, Field } from 'Components/Molecules'

import { ChatsListProps } from './ChatsList.props'
import * as Styled from './ChatsList.style'

export const ChatsList: FC<ChatsListProps> = ({ title, hasFilter }) => {
  const {
    userState: { currentProfile },
  } = useContext(UserContext)

  const { chats } = currentProfile

  return (
    <Styled.ChatsListWrapper>
      {chats?.length ? (
        <>
          {title && (
            <Text lh={3} fw={700}>
              {title}
            </Text>
          )}

          {hasFilter && (
            <Styled.Filter>
              <Field
                id="chats_filter"
                label={MESSAGES.FILTER_LABEL}
                placeholder={MESSAGES.FILTER_PLACEHOLDER}
              />
            </Styled.Filter>
          )}

          <Styled.ChatList>
            {chats.map((chatItem) => {
              return (
                <ChatsListProfileItem
                  key={
                    chatItem.users.find(
                      (userItem) => userItem._id !== currentProfile._id
                    )!._id
                  }
                  profile={
                    chatItem.users.find(
                      (userItem) => userItem._id !== currentProfile._id
                    )!
                  }
                  message={chatItem.messages[chatItem.messages.length - 1]}
                />
              )
            })}
          </Styled.ChatList>
        </>
      ) : (
        <Styled.NoMessages>
          <Styled.NoMessagesIcon>
            <MessageSquareX />
          </Styled.NoMessagesIcon>

          <Text lh={1.6}>{MESSAGES.NONE}</Text>
        </Styled.NoMessages>
      )}
    </Styled.ChatsListWrapper>
  )
}
