import styled, { css } from 'styled-components'

const PrimaryButton = css`
  background-color: var(--purple);
  border-radius: 4px;

  color: var(--grayLight);

  &:hover {
    background-color: var(--grayLight);

    color: var(--purple);
  }
`

const DarkButton = css`
  background-color: var(--purpleMedium);

  &:hover {
    background-color: var(--purpleMediumDark);
  }
`

const TransparentButton = css`
  background-color: transparent;

  &:hover {
    background-color: var(--purpleMediumDark);
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
