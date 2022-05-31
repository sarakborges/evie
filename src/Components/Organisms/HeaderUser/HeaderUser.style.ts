import styled from 'styled-components'

export const Dropdown = styled.div`
  width: 16px;
`

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;

  border-top: 1px solid var(--purpleMedium);

  > button {
    place-content: flex-start;

    padding: 12px 20px;

    font-size: 16px;
    color: var(--grayLight);

    > svg {
      width: 20px;
    }

    &:hover {
      background-color: var(--purpleMedium);
    }
  }
`
