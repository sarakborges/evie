import styled from 'styled-components'

export const ThemeTitle = styled.div`
  padding: 0 24px 4px;
`

export const Settings = styled.div`
  display: flex;
  flex-flow: column;
  gap: 24px;

  padding: 8px 0;
`

export const ThemeOptions = styled.div`
  display: flex;
  gap: 12px;

  padding: 8px 20px;

  border-radius: 22px;

  > button {
    gap: 8px;
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
  gap: 4px;
  flex-wrap: wrap;

  padding: 8px;
  margin: 0 12px;

  > button {
    padding: 2px;
    aspect-ratio: 1;

    border: 1px solid transparent;

    transition: border-color 0.3s;

    &:is(.active, :hover) {
      border-color: var(--mainMedium);
    }
  }
`

interface ColorOptionItemProps {
  accent: number
}
export const ColorOptionItem = styled.div<ColorOptionItemProps>`
  display: flex;
  place-content: center;
  place-items: center;

  width: 24px;
  aspect-ratio: 1;
  border-radius: 50%;

  background-color: hsl(${({ accent }) => accent} 50% 50% / 100%);

  color: var(--grayLight);

  > svg {
    width: 12px;
    aspect-ratio: 1;
  }
`
