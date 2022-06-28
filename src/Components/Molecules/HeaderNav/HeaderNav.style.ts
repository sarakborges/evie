import styled from 'styled-components'

export const Nav = styled.nav`
  display: flex;
  place-items: center;

  height: 100%;
`

interface NavLinkStyleProps {
  active?: boolean
}
export const NavLink = styled.p<NavLinkStyleProps>`
  display: flex;
  place-items: center;

  height: 100%;

  > a {
    display: flex;
    place-items: center;

    height: 100%;
    padding: 0 24px;

    color: var(--grayLight);
    text-decoration: none;
    font-size: 14px;

    border: solid transparent;
    border-width: 2px 0;
    border-bottom-color: ${({ active }) =>
      active ? 'var(--main)' : 'transparent'};
    background-color: ${({ active }) =>
      active ? 'var(--mainDark2)' : 'transparent'};

    transition: background-color 0.3s, border-bottom-color 0.3s;

    &:hover {
      background-color: var(--mainDark2);
    }
  }
`
