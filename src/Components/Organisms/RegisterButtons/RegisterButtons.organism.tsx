import React, { FC, useContext } from 'react'

import { REGISTER_TEXTS } from 'Utils/Constants'
import { REGISTER_FORM } from 'Utils/Forms'

import { RegisterContext } from 'Contexts'

import { Button } from 'Components/Atoms'

import * as Styled from './RegisterButtons.style'

export const RegisterButtons: FC = () => {
  const { registerState, setRegisterState } = useContext(RegisterContext)
  const { step } = registerState

  const advanceStep = () => {
    if (
      step > 0 &&
      REGISTER_FORM.STEPS[step - 1].FIELDS.some(
        (fieldItem) =>
          !registerState.form
            .find((formItem) => formItem.id === fieldItem.ID)
            ?.value.trim()
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

  return (
    <Styled.StepsButtons>
      {step > 0 && (
        <Button secondary onClick={returnStep}>
          {REGISTER_TEXTS.BACK}
        </Button>
      )}

      {step < REGISTER_FORM.STEPS.length && (
        <Button secondary onClick={advanceStep}>
          {REGISTER_TEXTS.ADVANCE}
        </Button>
      )}

      {step === REGISTER_FORM.STEPS.length && (
        <Button secondary>{REGISTER_TEXTS.SUBMIT}</Button>
      )}
    </Styled.StepsButtons>
  )
}
