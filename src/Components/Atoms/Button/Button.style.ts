import styled, { css } from 'styled-components'

const PrimaryButton = css`
  background-color: var(--purple);
  border-radius: 4px;

  color: var(--grayLight);

  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 1px 8px var(--purpleDark2);
  }
`

const DarkButton = css`
  background-color: var(--purpleMedium);

  &:hover {
    background-color: var(--purpleDark2);
  }
`

const TransparentButton = css`
  background-color: transparent;

  &:hover {
    background-color: var(--purpleDark2);
  }
`

interface ButtonStyleProps {
  primary?: boolean
  dark?: boolean
  transparent?: boolean
  bordered?: boolean
  rounded?: boolean
}
export const Button = styled.button<ButtonStyleProps>`
  display: flex;
  place-content: center;
  place-items: center;
  gap: 16px;

  padding: 8px;

  border: ${({ bordered }) => (bordered ? '2px solid var(--purple)' : 'none')};
  border-radius: ${({ rounded }) => (rounded ? '50%' : 0)};

  font-size: 12px;
  letter-spacing: inherit;

  cursor: pointer;

  transition: background-color 0.3s, color 0.3s;

  ${({ primary }) => primary && PrimaryButton}
  ${({ dark }) => dark && DarkButton}
  ${({ transparent }) => transparent && TransparentButton}
`
