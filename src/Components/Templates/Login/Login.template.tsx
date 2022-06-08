import React, { FC, FormEvent } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import { LOGIN_TEXTS, ROUTES } from 'Utils/Constants'
import { LOGIN_FORM } from 'Utils/Forms'

import { Button, Form, Text } from 'Components/Atoms'
import { Input } from 'Components/Molecules'

import * as Styled from './Login.style'

export const LoginTemplate: FC = () => {
  const router = useRouter()

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

          <Form onSubmit={doLogin}>
            {LOGIN_FORM.FIELDS.map((loginFormItem) => {
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
              {LOGIN_TEXTS.SUBMIT}
            </Button>
          </Form>

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
