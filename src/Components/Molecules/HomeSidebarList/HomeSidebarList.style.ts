import styled from 'styled-components'

export const SidebarList = styled.div`
  display: flex;
  flex-flow: column;
  gap: 12px;

  width: 100%;
  padding: 0 32px;
`

export const ListTitle = styled.div`
  display: flex;
  place-items: center;
  place-content: space-between;

  > div {
    display: flex;
    place-items: center;
    gap: 4px;
  }

  > a {
    font-size: 12px;

    transition: color 0.3s;

    &:hover {
      color: var(--purpleLight2);
    }
  }
`

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
`

export const ListItem = styled.div`
  display: flex;

  width: 100%;
  overflow: hidden;

  > a {
    display: flex;
    flex-flow: column;
    place-items: center;
    gap: 8px;

    width: 100%;

    text-align: center;

    > div {
      width: 100%;
    }

    > p {
      max-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;

      white-space: nowrap;

      transition: color 0.3s;
    }

    &:hover {
      > p {
        color: var(--purpleLight2);
      }
    }
  }
`
