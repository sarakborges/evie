import React, { FC, useContext } from 'react'
import Link from 'next/link'

import { REGISTER, ROUTES } from 'Utils/Constants'

import { RegisterContext } from 'Contexts'

import { Button, Text } from 'Components/Atoms'

import {
  RegisterStep0,
  RegisterStep1,
  RegisterStep2,
} from 'Components/Organisms'

import * as Styled from './Register.style'

export const RegisterTemplate: FC = () => {
  const { registerState, setRegisterState } = useContext(RegisterContext)
  const { step, hasError } = registerState

  const advanceStep = () => {
    if (
      step > 0 &&
      REGISTER.FORM.STEPS[step - 1].FIELDS.some(
        (fieldItem) => !registerState.form[fieldItem.ID].value.trim()
      )
    ) {
      setRegisterState?.({ ...registerState, hasError: true })
      return
    }

    setRegisterState?.({ ...registerState, step: step + 1, hasError: false })
  }

  const returnStep = () => {
    setRegisterState?.({ ...registerState, step: step - 1, hasError: false })
  }

  const registerSteps = [
    <RegisterStep0 key="step0" />,
    <RegisterStep1 key="step1" />,
    <RegisterStep2 key="step2" />,
  ]

  return (
    <Styled.RegisterTemplate>
      <Styled.RegisterContent>
        {registerSteps[step]}

        {hasError && <Text fc="redLight">{REGISTER.FORM.ERROR}</Text>}

        <Styled.StepsButtons>
          {step > 0 && (
            <Button secondary onClick={returnStep}>
              {REGISTER.BACK}
            </Button>
          )}

          {step < registerSteps.length && (
            <Button secondary onClick={advanceStep}>
              {REGISTER.ADVANCE}
            </Button>
          )}

          {step === registerSteps.length && (
            <Button secondary>{REGISTER.SUBMIT}</Button>
          )}
        </Styled.StepsButtons>

        {step === 0 && (
          <Styled.AlreadyRegistered>
            <Link href={ROUTES.LOGIN.PATH}>
              <a>{REGISTER.ALREADY_REGISTERED}</a>
            </Link>
          </Styled.AlreadyRegistered>
        )}
      </Styled.RegisterContent>
    </Styled.RegisterTemplate>
  )
}
