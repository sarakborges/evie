import React, { FC, FormEvent, useContext } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import { LoginContext } from 'Contexts/Login.context'

import { LOGIN_TEXTS, ROUTES } from 'Utils/Constants'
import { LOGIN_FORM } from 'Utils/Forms'

import { Text } from 'Components/Atoms'
import { Form } from 'Components/Organisms'

import * as Styled from './Login.style'

export const LoginTemplate: FC = () => {
  const router = useRouter()

  const { loginState, setLoginState } = useContext(LoginContext)

  const doLogin = (e: FormEvent<HTMLFormElement>) => {
    router.push(ROUTES.HOME.PATH)
  }

  return (
    <Styled.LoginTemplate>
      <Styled.LoginText>
        <Text fs="32px" fw={300}>
          {LOGIN_TEXTS.WELCOME}
        </Text>
      </Styled.LoginText>

      <Styled.LoginFormWrapper>
        <Styled.LoginForm>
          <Text fs="24px" fw={300}>
            {LOGIN_TEXTS.SIGNIN}
          </Text>

          <Form
            form={LOGIN_FORM}
            formState={loginState}
            setFormState={setLoginState}
            onSubmit={doLogin}
          />

          <Styled.NotRegistered>
            <Link href={ROUTES.REGISTER.PATH}>
              <a>{LOGIN_TEXTS.NOT_REGISTERED}</a>
            </Link>
          </Styled.NotRegistered>
        </Styled.LoginForm>
      </Styled.LoginFormWrapper>
    </Styled.LoginTemplate>
  )
}
