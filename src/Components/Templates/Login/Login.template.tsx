import React, { FC } from 'react'

import { LOGIN, ROUTES } from 'Utils/Constants'

import { Button, Text } from 'Components/Atoms'
import { Input } from 'Components/Molecules'

import * as Styled from './Login.style'
import Link from 'next/link'

export const LoginTemplate: FC = () => {
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

          <form
            onSubmit={(e) => {
              e.preventDefault()
            }}
          >
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
          </form>

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
