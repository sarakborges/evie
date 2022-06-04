import React, { FC, FormEvent } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import { LOGIN, ROUTES } from 'Utils/Constants'

import { Button, Form, Text } from 'Components/Atoms'
import { Input } from 'Components/Molecules'

import * as Styled from './Login.style'

export const LoginTemplate: FC = () => {
  const router = useRouter()

  const doLogin = (e: FormEvent<HTMLFormElement>) => {
    console.log(e.target)

    router.push(ROUTES.HOME.PATH)
  }

  return (
    <Styled.LoginTemplate>
      <Styled.LoginText>
        <Text fs="32px" fw={300}>
          {LOGIN.WELCOME}
        </Text>
      </Styled.LoginText>

      <Styled.LoginFormWrapper>
        <Styled.LoginForm>
          <Text fs="24px" fw={300}>
            {LOGIN.SIGNIN}
          </Text>

          <Form onSubmit={doLogin}>
            {LOGIN.FORM.map((loginFormItem) => {
              return (
                <Input
                  key={loginFormItem.ID}
                  id={loginFormItem.ID}
                  type={loginFormItem.TYPE}
                  label={loginFormItem.LABEL}
                  placeholder={loginFormItem.PLACEHOLDER}
                />
              )
            })}

            <Button type="submit" primary>
              {LOGIN.SUBMIT}
            </Button>
          </Form>

          <Styled.NotRegistered>
            <Link href={ROUTES.REGISTER.PATH}>
              <a>{LOGIN.NOT_REGISTERED}</a>
            </Link>
          </Styled.NotRegistered>
        </Styled.LoginForm>
      </Styled.LoginFormWrapper>
    </Styled.LoginTemplate>
  )
}
