import React, { FC, useContext } from 'react'

import { REGISTER_TEXTS } from 'Utils/Constants'
import { REGISTER_FORM } from 'Utils/Forms'

import { RegisterContext } from 'Contexts'

import { Button } from 'Components/Atoms'

import * as Styled from './RegisterButtons.style'

export const RegisterButtons: FC = () => {
  const { registerState, setRegisterState } = useContext(RegisterContext)
  const { step } = registerState

  const validateForm = () => {
    if (
      step > 0 &&
      REGISTER_FORM.STEPS[step - 1].FIELDS.some(
        (fieldItem) =>
          fieldItem.REQUIRED &&
          !registerState.form
            .find((formItem) => formItem.id === fieldItem.ID)
            ?.value.trim()
      )
    ) {
      const newRegisterForm = registerState.form.map((formItem) => {
        const field = REGISTER_FORM.STEPS[step - 1].FIELDS.find(
          (fieldItem) => fieldItem.ID === formItem.id
        )

        return {
          ...formItem,

          warning:
            field?.REQUIRED && !formItem.value ? field?.REQUIRED_ERROR : '',
        }
      })

      setRegisterState?.({
        ...registerState,
        form: [...newRegisterForm],
      })

      return false
    }

    return true
  }

  const advanceStep = () => {
    if (validateForm()) {
      setRegisterState?.({ ...registerState, step: step + 1 })
    }
  }

  const returnStep = () => {
    setRegisterState?.({
      ...registerState,
      step: step - 1,

      form: [
        ...registerState.form.map((formItem) => ({ ...formItem, warning: '' })),
      ],
    })
  }

  const submitRegister = () => {
    validateForm()
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
        <Button secondary onClick={submitRegister}>
          {REGISTER_TEXTS.SUBMIT}
        </Button>
      )}
    </Styled.StepsButtons>
  )
}
