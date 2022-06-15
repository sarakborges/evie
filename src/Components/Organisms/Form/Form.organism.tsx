import React, { ChangeEvent, FC, FormEvent } from 'react'

import { slugify } from 'Utils/Functions'

import { Button, Text } from 'Components/Atoms'
import { Field } from 'Components/Molecules'

import { FormProps } from './Form.props'
import * as Styled from './Form.style'

export const Form: FC<FormProps> = ({
  form,
  formState,
  step = 0,
  buttonStyles = 'primary',
  setFormState,
  onSubmit,
  ...props
}) => {
  const getValue = (id: string) => {
    return (
      formState?.form?.find((formItem) => formItem.id === id)?.value.trim() ||
      ''
    )
  }

  const getWarning = (id: string) => {
    return (
      formState?.form?.find((formItem) => formItem.id === id)?.warning || ''
    )
  }

  const validateForm = () => {
    console.log(form.STEPS[step])

    if (
      form.STEPS[step].FIELDS?.some(
        (fieldItem) =>
          fieldItem.REQUIRED &&
          !formState.form
            .find((formItem) => formItem.id === fieldItem.ID)
            ?.value.trim()
      )
    ) {
      const newRegisterForm = formState.form.map((formItem) => {
        const field = form.STEPS[step].FIELDS?.find(
          (fieldItem) => fieldItem.ID === formItem.id
        )

        return {
          ...formItem,

          warning:
            field?.REQUIRED && !formItem.value ? field?.REQUIRED_ERROR : '',
        }
      })

      setFormState?.({
        ...formState,
        form: [...newRegisterForm],
      })

      return false
    }

    return true
  }

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormState?.({
      ...formState,

      form: [
        ...formState?.form?.filter(
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

  const advanceStep = () => {
    if (step < form?.STEPS.length - 1 && validateForm()) {
      setFormState?.({
        ...formState,
        step: step + 1,
      })
    }
  }

  const returnStep = () => {
    setFormState?.({
      ...formState,
      step: step - 1,
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (step === form?.STEPS.length - 1) {
      onSubmit?.(e)
      return
    }

    advanceStep()
  }

  return (
    <form {...props} onSubmit={handleSubmit}>
      {!!form.STEPS[step].TEXT && (
        <Text fs="32px" fw={300} lh={1.4}>
          {form.STEPS[step].TEXT?.replace(
            '[register_name]',
            getValue('register_name')
          )}
        </Text>
      )}

      {!!form.STEPS[step].FIELDS?.length &&
        form.STEPS[step].FIELDS?.map((registerFormItem) => {
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

      <Styled.Buttons>
        {step > 0 && form.STEPS[step].RETURN_TEXT && (
          <Button
            primary={buttonStyles === 'primary'}
            secondary={buttonStyles === 'secondary'}
            onClick={returnStep}
          >
            {form.STEPS[step].RETURN_TEXT}
          </Button>
        )}

        {step < form.STEPS.length && form.STEPS[step].ADVANCE_TEXT && (
          <Button
            type="submit"
            primary={buttonStyles === 'primary'}
            secondary={buttonStyles === 'secondary'}
          >
            {form.STEPS[step].ADVANCE_TEXT}
          </Button>
        )}

        {step === form.STEPS.length - 1 && form.STEPS[step].SUBMIT_TEXT && (
          <Button
            type="submit"
            primary={buttonStyles === 'primary'}
            secondary={buttonStyles === 'secondary'}
          >
            {form.STEPS[step].SUBMIT_TEXT}
          </Button>
        )}
      </Styled.Buttons>
    </form>
  )
}
