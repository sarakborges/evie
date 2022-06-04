import React, { ChangeEvent, FC, useContext } from 'react'

import { REGISTER } from 'Utils/Constants'

import { RegisterContext } from 'Contexts'

import { Text } from 'Components/Atoms'
import { Input } from 'Components/Molecules'

export const RegisterStep2: FC = () => {
  const { registerState, setRegisterState } = useContext(RegisterContext)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRegisterState?.({
      ...registerState,
      form: {
        ...registerState.form,
        [e.currentTarget.id]: {
          value: e.currentTarget.value,
          error: '',
        },
      },
    })
  }

  return (
    <>
      <Text fs="32px" fw={300} lh={1.4}>
        {REGISTER.FORM.STEPS[1].TEXT.replace(
          '[name]',
          registerState.form.register_name.value
        )}
      </Text>

      {REGISTER.FORM.STEPS[1].FIELDS.map((registerFormItem) => {
        return (
          <Input
            key={registerFormItem.ID}
            id={registerFormItem.ID}
            type={registerFormItem.TYPE}
            label={registerFormItem.LABEL}
            placeholder={registerFormItem.PLACEHOLDER}
            value={registerState?.form?.[registerFormItem.ID].value}
            onChange={handleChange}
          />
        )
      })}
    </>
  )
}
