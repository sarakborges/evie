import styled from 'styled-components'

export const Header = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1;

  display: flex;
  place-items: center;
  place-content: space-between;

  height: 64px;

  background-color: var(--purpleDark1);
`

export const HeaderCorner = styled.aside`
  display: flex;
  place-items: center;

  height: 100%;
`

export const Logo = styled.div`
  display: flex;

  height: 100%;

  > a {
    display: flex;
    place-items: center;

    height: 100%;
    padding: 0 32px;

    font-size: 24px;
    font-weight: 700;
    letter-spacing: 8px;
    text-transform: uppercase;
    text-decoration: none;

    transition: background-color 0.3s;

    &:hover {
      background-color: var(--purpleDark2);
    }
  }
`

export const UserArea = styled.aside`
  display: flex;
  place-items: center;

  height: 100%;

  > div {
    position: relative;

    display: flex;

    height: 100%;

    > button {
      height: 100%;
      min-width: 64px;
      padding: 8px 16px;

      svg {
        fill: var(--grayLight);
      }

      > svg {
        width: 24px;
      }
    }
  }
`
