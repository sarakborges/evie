import styled from 'styled-components'

export const ChatsListWrapper = styled.div`
  display: flex;
  flex-flow: column;
  place-content: center;
  place-items: center;

  width: 100%;
  flex: 1;
  overflow: hidden;
  overflow-y: auto;
`

export const Filter = styled.div`
  width: 100%;
  padding: 8px 16px 24px;
`

export const ChatList = styled.div`
  display: flex;
  flex-flow: column;

  width: 100%;
  flex: 1;
  overflow: hidden;
  overflow-y: auto;
`

export const NoMessages = styled.div`
  padding: 12px 24px 24px;

  text-align: center;
`

export const NoMessagesIcon = styled.div`
  padding-bottom: 16px;

  > svg {
    max-width: 64px;
  }
`
