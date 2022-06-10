import styled from 'styled-components'

export const InputWrapper = styled.div`
  display: flex;
  flex-flow: column-reverse;
  gap: 4px;

  position: relative;

  width: 100%;

  > button {
    position: absolute;
    right: 0;
    bottom: 1px;

    height: 31px;
    aspect-ratio: 1;

    & + input {
      padding-right: 31px;
    }
  }

  > input {
    height: 32px;

    background-color: transparent;
    border: 0;
    border-bottom: 1px solid var(--grayLight);

    font-size: 16px;

    transition: border-color 0.3s;

    &:focus {
      border-color: var(--purpleLight2);

      & + label {
        color: var(--purpleLight2);
      }
    }

    &:-webkit-autofill,
    &:autofill {
      background: none;
    }
  }

  > label {
    font-size: 12px;
    line-height: 1.4;

    transition: color 0.3s;
  }
`

export const Warning = styled.label`
  color: var(--yellowLight);

  & + input + label,
  & + button + input + label {
    color: var(--yellowLight);
  }

  & + button {
    bottom: 22px;
  }

  & + button + input {
    border-color: var(--yellowLight);
  }
`
