import styled, { css } from 'styled-components'

const PrimaryButton = css`
  background-color: var(--main);
  border-radius: 4px;

  color: var(--grayLight);

  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 1px 8px var(--mainDark2);
  }
`

const SecondaryButton = css`
  background-color: var(--grayLight);
  border-radius: 4px;

  color: var(--main);

  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 1px 8px var(--mainDark2);
  }
`

const DarkButton = css`
  background-color: var(--mainMedium);

  &:hover {
    background-color: var(--mainDark2);
  }
`

const TransparentButton = css`
  background-color: transparent;

  &:hover {
    background-color: var(--mainDark2);
  }
`

interface ButtonStyleProps {
  primary?: boolean
  secondary?: boolean
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

  border: ${({ bordered }) =>
    bordered ? '2px solid var(--main)' : '2px solid transparent'};
  border-radius: ${({ rounded }) => (rounded ? '50%' : 0)};

  font-size: 12px;
  letter-spacing: inherit;

  cursor: pointer;

  transition: background-color 0.3s, color 0.3s, border-color 0.3s;

  ${({ primary }) => primary && PrimaryButton}
  ${({ secondary }) => secondary && SecondaryButton}
  ${({ dark }) => dark && DarkButton}
  ${({ transparent }) => transparent && TransparentButton}
`
