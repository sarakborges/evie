import styled from 'styled-components'

export const ThemeTitle = styled.div`
  padding: 0 24px 8px;
`

export const Settings = styled.div`
  display: flex;
  flex-flow: column;
  gap: 24px;

  padding: 8px 0;
`

export const ThemeOptions = styled.div`
  display: flex;
  place-content: center;
  gap: 24px;

  padding: 8px;
  margin: 0 12px;

  background-color: var(--purpleDark1);
  border-radius: 22px;

  > button {
    padding: 4px 12px;

    border-radius: 14px;

    color: var(--grayLight);

    > svg {
      width: 16px;
      aspect-ratio: 1;
    }
  }
`

export const ColorOptions = styled.div`
  display: flex;
  gap: 8px;

  padding: 8px;
  margin: 0 12px;

  > button {
    padding: 2px;
    aspect-ratio: 1;

    border: 1px solid transparent;

    transition: border-color 0.3s;

    > span {
      display: flex;
      place-content: center;
      place-items: center;

      width: 24px;
      aspect-ratio: 1;
      border-radius: 50%;

      background-color: var(--purple);

      color: var(--grayLight);

      > svg {
        width: 12px;
        aspect-ratio: 1;
      }
    }

    &:is(:nth-child(1), :hover) {
      border-color: var(--purpleMedium);
    }

    &:not(:nth-child(1)) {
      > span {
        background-color: hsla(345, 50%, 50%, 100%);
      }
    }
  }
`
