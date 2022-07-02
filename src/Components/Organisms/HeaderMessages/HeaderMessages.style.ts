import styled from 'styled-components'

export const ChatsList = styled.div`
  max-height: calc(79px * 2.5);
  overflow: hidden;
  overflow-y: auto;
`

export const SeeAll = styled.div`
  > a {
    display: flex;
    place-content: center;
    place-items: center;

    padding: 12px 0;

    transition: background-color 0.3s;

    &:hover {
      background-color: var(--mainMedium);
    }
  }
`
