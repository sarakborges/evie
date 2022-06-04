import styled from 'styled-components'

export const ProfilesList = styled.div`
  display: flex;
  flex-flow: column;

  max-height: calc(64px * 2.5);
  overflow: hidden;
  overflow-y: auto;

  > div {
    transition: background-color 0.3s;

    &:hover {
      background-color: var(--purpleDark1);
    }
  }
`
