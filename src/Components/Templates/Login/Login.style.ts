import styled from 'styled-components'

export const LoginTemplate = styled.div`
  display: flex;

  min-height: 100vh;
`

export const LoginText = styled.div`
  flex: 1;
  padding: 48px;
`

export const LoginFormWrapper = styled.div`
  display: flex;
  place-content: center;
  place-items: center;

  min-width: 600px;
  max-width: 600px;
  flex: 1;

  background-color: var(--mainMedium);
`

export const LoginForm = styled.div`
  display: flex;
  flex-flow: column;
  gap: 32px;

  width: 320px;

  > h1 {
    font-weight: 300;
    font-size: 24px;
  }

  > form {
    display: flex;
    flex-flow: column;
    gap: 32px;

    > button {
      height: 48px;

      font-size: 16px;
    }
  }
`

export const NotRegistered = styled.div`
  text-align: center;

  > a {
    border-bottom: 1px solid var(--grayLight);

    transition: border-color 0.3s, color 0.3s;

    &:hover {
      color: var(--mainLight2);
      border-color: var(--mainLight2);
    }
  }
`
