import React, { ChangeEvent, FC, useContext } from 'react'

import { REGISTER_FORM } from 'Utils/Forms'
import { slugify } from 'Utils/Functions'

import { RegisterContext } from 'Contexts'

import { Text } from 'Components/Atoms'
import { Field } from 'Components/Molecules'

export const RegisterStep: FC = () => {
  const { registerState, setRegisterState } = useContext(RegisterContext)
  const { step } = registerState

  const getValue = (id: string) => {
    return (
      registerState?.form
        ?.find((formItem) => formItem.id === id)
        ?.value.trim() || ''
    )
  }

  const getWarning = (id: string) => {
    return (
      registerState?.form?.find((formItem) => formItem.id === id)?.warning || ''
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
          value:
            e.currentTarget.id === 'register_profile_url'
              ? slugify(e.currentTarget.value)
              : e.currentTarget.value,
          warning: '',
        },
      ],
    })
  }

  return (
    <>
      <Text fs="32px" fw={300} lh={1.4}>
        {REGISTER_FORM.STEPS[step - 1].TEXT.replace(
          '[register_name]',
          getValue('register_name')
        )}
      </Text>

      {REGISTER_FORM.STEPS[step - 1].FIELDS.map((registerFormItem) => {
        return (
          <Field
            key={registerFormItem.ID}
            id={registerFormItem.ID}
            type={registerFormItem.TYPE}
            label={registerFormItem.LABEL}
            placeholder={registerFormItem.PLACEHOLDER}
            helpText={registerFormItem.HELP_TEXT}
            warning={getWarning(registerFormItem.ID)}
            value={getValue(registerFormItem.ID)}
            options={registerFormItem?.OPTIONS || []}
            onChange={handleChange}
          />
        )
      })}
    </>
  )
}
