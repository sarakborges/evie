import styled from 'styled-components'

interface ProfileItemProps {
  seen: boolean
}
export const ProfileItem = styled.div<ProfileItemProps>`
  display: flex;
  place-items: center;
  gap: 16px;

  width: 100%;
  padding: 12px 16px;

  border-width: 0 4px;
  border-style: solid;
  border-left-color: ${({ seen }) => (seen ? 'transparent' : 'var(--main)')};
  border-right-color: transparent;
  background-color: ${({ seen }) =>
    seen ? 'transparent' : 'var(--mainDark1)'};

  transition: background-color 0.3s, border-color 0.3s;

  &:hover {
    background-color: var(--mainMedium);
  }
`

export const ProfileText = styled.div`
  display: flex;
  flex-flow: column;
  place-items: flex-start;

  flex: 1;
  overflow: hidden;

  > p {
    max-width: 100%;
    overflow: hidden;

    text-overflow: ellipsis;
    white-space: nowrap;
  }
`

export const ProfileName = styled.div`
  display: flex;
  place-items: center;
  gap: 8px;

  width: 100%;
  flex: 1;
  overflow: hidden;

  text-overflow: ellipsis;
  white-space: nowrap;

  > p:last-child {
    display: inline;

    overflow: hidden;

    white-space: nowrap;
    text-overflow: ellipsis;
  }
`

export const Message = styled.div`
  display: flex;
  place-items: center;
  gap: 4px;

  width: 100%;
  padding: 8px 0;
  flex: 1;
  overflow: hidden;

  font-size: 12px;

  > p {
    max-width: 100%;
    flex: 1;
    overflow: hidden;

    text-overflow: ellipsis;
    white-space: nowrap;
  }

  > b {
    font-weight: 700;
  }
`
