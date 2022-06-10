import React, { FC, useContext, useEffect } from 'react'
import Link from 'next/link'

import { REGISTER_TEXTS, ROUTES } from 'Utils/Constants'
import { REGISTER_FORM } from 'Utils/Forms'
import { FormItemProps } from 'Utils/Props'

import { RegisterContext } from 'Contexts'

import { Text } from 'Components/Atoms'
import { RegisterButtons, RegisterStep } from 'Components/Organisms'

import * as Styled from './Register.style'

export const RegisterTemplate: FC = () => {
  const { registerState, setRegisterState } = useContext(RegisterContext)
  const { step } = registerState

  useEffect(() => {
    const form: FormItemProps[] = []

    REGISTER_FORM.STEPS.forEach((stepItem) => {
      stepItem.FIELDS.forEach((fieldItem) => {
        form.push({
          id: fieldItem.ID,
          value: '',
          warning: '',
        })
      })
    })

    setRegisterState?.({ ...registerState, form: [...form] })
  }, [])

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
