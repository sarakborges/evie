import styled from 'styled-components'

export const RegisterTemplate = styled.div`
  display: flex;
  place-items: center;
  place-content: center;

  min-height: 100vh;

  background-color: var(--main);
`

export const RegisterContent = styled.div`
  > :is(form, div) {
    display: flex;
    place-items: center;
    place-content: center;
    flex-flow: column;
    gap: 48px;

    width: 632px;
    padding: 32px;
  }
`

export const StepsButtons = styled.div`
  display: flex;
  place-items: center;
  place-content: center;
  gap: 24px;

  > button {
    height: 40px;
    padding: 0 16px;

    font-size: 16px;
  }
`

export const AlreadyRegistered = styled.div`
  > a {
    border-bottom: 1px solid var(--grayLight);

    transition: border-color 0.3s, color 0.3s;

    &:hover {
      color: var(--mainLight2);
      border-color: var(--mainLight2);
    }
  }
`
