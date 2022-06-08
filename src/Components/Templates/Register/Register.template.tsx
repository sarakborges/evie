import React, { FC, useContext } from 'react'
import Link from 'next/link'

import { REGISTER_TEXTS, ROUTES } from 'Utils/Constants'
import { REGISTER_FORM } from 'Utils/Forms'

import { RegisterContext } from 'Contexts'

import { Text } from 'Components/Atoms'
import { RegisterButtons, RegisterStep } from 'Components/Organisms'

import * as Styled from './Register.style'

export const RegisterTemplate: FC = () => {
  const { registerState } = useContext(RegisterContext)
  const { step, hasError } = registerState

  return (
    <Styled.RegisterTemplate>
      <Styled.RegisterContent>
        {step > 0 ? (
          <RegisterStep />
        ) : (
          <>
            <Text fs="32px" fw={300} lh={1.4}>
              {REGISTER_TEXTS.WELCOME}
            </Text>

            <Text fs="24px" fw={300} lh={1.4}>
              {REGISTER_TEXTS.PROCEED}
            </Text>
          </>
        )}

        {hasError && <Text fc="redLight">{REGISTER_FORM.ERROR}</Text>}

        <RegisterButtons />

        {step === 0 && (
          <Styled.AlreadyRegistered>
            <Link href={ROUTES.LOGIN.PATH}>
              <a>{REGISTER_TEXTS.ALREADY_REGISTERED}</a>
            </Link>
          </Styled.AlreadyRegistered>
        )}
      </Styled.RegisterContent>
    </Styled.RegisterTemplate>
  )
}
