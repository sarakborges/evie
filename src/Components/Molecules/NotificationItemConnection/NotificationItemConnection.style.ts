import styled from 'styled-components'

export const NotificationItem = styled.div`
  display: flex;
  gap: 16px;

  padding: 16px;

  transition: background-color 0.3s;

  &:hover {
    background-color: var(--purpleMedium);
  }
`

export const ProfilePicture = styled.div`
  min-width: 48px;
`

export const NotificationText = styled.div`
  display: flex;
  flex-flow: column;
  gap: 12px;

  flex: 1;
`

export const ProfileName = styled.span`
  > a {
    color: var(--purpleMediumLight);
  }
`

export const NotificationButtons = styled.div`
  display: flex;
  gap: 12px;
`
