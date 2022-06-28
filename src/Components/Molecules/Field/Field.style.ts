import styled from 'styled-components'

export const FieldWrapper = styled.div`
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

    & + :is(input, select) {
      padding-right: 31px;
    }
  }

  > :is(input, select) {
    height: 32px;

    background-color: transparent;
    border: 0;
    border-bottom: 1px solid var(--grayLight);

    font-size: 16px;

    transition: border-color 0.3s;

    &:focus {
      border-color: var(--mainLight2);

      & + label {
        color: var(--mainLight2);
      }
    }

    &:-webkit-autofill,
    &:autofill {
      background: none;
    }

    > option {
      color: var(--main);
    }
  }

  > label {
    display: flex;
    place-items: center;
    gap: 4px;

    font-size: 12px;
    line-height: 1.4;

    transition: color 0.3s;
  }
`

export const Warning = styled.label`
  color: var(--yellowLight);

  & + :is(input, select) + label,
  & + button + :is(input, select) + label {
    color: var(--yellowLight);
  }

  & + button {
    bottom: 22px;
  }

  & + button + :is(input, select) {
    border-color: var(--yellowLight);
  }
`

export const Help = styled.div`
  position: relative;

  color: var(--grayLight);
`

export const HelpIcon = styled.div`
  display: flex;
  place-items: center;
  place-content: center;

  width: 20px;
  aspect-ratio: 1;

  border-radius: 50%;
  background-color: var(--mainMedium);
`

export const HelpText = styled.div`
  display: flex;

  position: absolute;
  left: calc(100% + 4px);
  top: -8px;
  z-index: 1;

  width: 280px;
  padding: 8px;

  border-radius: 4px;
  background-color: var(--mainMedium);

  opacity: 0;
  visibility: hidden;

  transition: opacity 0.3s, visibility 0.3s;

  ${Help}:hover > & {
    opacity: 1;
    visibility: visible;
  }
`
