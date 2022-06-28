import styled from 'styled-components'

export const User = styled.div`
  display: flex;
  width: 100%;

  > a {
    display: flex;
    flex-flow: column;
    place-items: center;
    gap: 16px;

    width: 100%;
    padding: 32px;
    overflow: hidden;

    transition: background-color 0.3s;

    &:hover {
      background-color: var(--mainDark1);
    }
  }
`

export const UserName = styled.div`
  display: flex;
  flex-flow: column;
  place-items: center;
  gap: 8px;

  width: 100%;

  text-align: center;

  > p {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;

    white-space: nowrap;
  }
`
