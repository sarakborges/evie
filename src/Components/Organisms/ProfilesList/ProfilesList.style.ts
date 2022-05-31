import styled from 'styled-components'

export const ProfilesList = styled.div`
  display: flex;
  flex-flow: column;

  max-height: calc(64px * 2.5);
  overflow: hidden;
  overflow-y: auto;

  > button {
    padding: 0;

    &:hover {
      background-color: var(--purpleMedium);
    }
  }
`
