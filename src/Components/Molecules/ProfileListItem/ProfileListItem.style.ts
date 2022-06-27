import styled from 'styled-components'

export const ProfileItem = styled.div`
  display: flex;
  place-items: center;
  gap: 16px;

  width: 100%;
  padding: 12px 16px;

  transition: background-color 0.3s;

  &:hover {
    background-color: var(--purpleDark1);
  }
`

export const ProfileButtons = styled.div`
  display: flex;
  gap: 8px;

  > button {
    aspect-ratio: 1;

    color: var(--grayLight);

    > svg {
      width: 16px;
    }
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
