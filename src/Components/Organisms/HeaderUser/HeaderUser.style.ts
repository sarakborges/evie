import styled from 'styled-components'

export const Dropdown = styled.div`
  width: 16px;
`

export const ProfilesList = styled.div`
  display: flex;
  flex-flow: column;

  max-height: calc(64px * 2.5);
  overflow: hidden;
  overflow-y: auto;

  > button {
    padding: 12px 16px;

    &:hover {
      background-color: var(--purpleMedium);
    }
  }
`

export const CurrentProfile = styled.div`
  display: flex;
  place-items: center;
  gap: 16px;

  padding: 12px 16px;
`

export const ProfileButtons = styled.div`
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

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;

  border-top: 1px solid var(--purpleMedium);

  > button {
    place-content: flex-start;

    padding: 12px 20px;

    font-size: 16px;
    color: var(--grayLight);

    > svg {
      width: 20px;
    }

    &:hover {
      background-color: var(--purpleMedium);
    }
  }
`
