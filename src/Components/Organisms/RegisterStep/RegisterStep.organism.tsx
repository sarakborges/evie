import React, { ChangeEvent, FC, Fragment, useContext } from 'react'

import { REGISTER } from 'Utils/Constants'

import { RegisterContext } from 'Contexts'

import { Text } from 'Components/Atoms'
import { Input, Select } from 'Components/Molecules'

export const RegisterStep: FC = () => {
  const { registerState, setRegisterState } = useContext(RegisterContext)
  const { step } = registerState

  const getName = () => {
    return (
      registerState.form.find((formItem) => formItem.id === 'register_name')
        ?.value || ''
    )
  }

  const getValue = (id: string) => {
    return (
      registerState?.form
        ?.find((formItem) => formItem.id === id)
        ?.value.trim() || ''
    )
  }

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setRegisterState?.({
      ...registerState,

      form: [
        ...registerState.form.filter(
          (formItem) => formItem.id !== e.currentTarget.id
        ),

        {
          id: e.currentTarget.id,
          value: e.currentTarget.value,
          error: '',
        },
      ],
    })
  }

  return (
    <>
      <Text fs="32px" fw={300} lh={1.4}>
        {REGISTER.FORM.STEPS[step - 1].TEXT.replace(
          '[register_name]',
          getName()
        )}
      </Text>

      {REGISTER.FORM.STEPS[step - 1].FIELDS.map((registerFormItem) => {
        return (
          <Fragment key={registerFormItem.ID}>
            {registerFormItem.TYPE === 'select' && (
              <Select
                key={registerFormItem.ID}
                id={registerFormItem.ID}
                label={registerFormItem.LABEL}
                placeholder={registerFormItem.PLACEHOLDER}
                value={getValue(registerFormItem.ID)}
                options={registerFormItem?.OPTIONS || []}
                onChange={handleChange}
              />
            )}

            {['text', 'password'].includes(registerFormItem.TYPE) && (
              <Input
                key={registerFormItem.ID}
                id={registerFormItem.ID}
                type={registerFormItem.TYPE}
                label={registerFormItem.LABEL}
                placeholder={registerFormItem.PLACEHOLDER}
                value={getValue(registerFormItem.ID)}
                onChange={handleChange}
              />
            )}
          </Fragment>
        )
      })}
    </>
  )
}
