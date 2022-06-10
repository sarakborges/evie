import React, { FC, useState } from 'react'
import { Eye, EyeOff } from '@styled-icons/heroicons-solid'
import { Question } from '@styled-icons/bootstrap/Question'

import { FieldProps } from './Field.props'

import { Button } from 'Components/Atoms/Button'

import * as Styled from './Field.style'

export const Field: FC<FieldProps> = ({
  helpText,
  label,
  warning,
  options,
  ...props
}) => {
  const { id, type, placeholder } = props

  const [displayPassword, setDisplayPassword] = useState(false)

  const toggleDisplayPassword = () => {
    setDisplayPassword(!displayPassword)
  }

  return (
    <Styled.FieldWrapper>
      {warning && <Styled.Warning htmlFor={id}>{warning}</Styled.Warning>}

      {type === 'password' && (
        <>
          <Button transparent onClick={toggleDisplayPassword}>
            {displayPassword ? <EyeOff /> : <Eye />}
          </Button>

          <input {...props} type={displayPassword ? 'text' : 'password'} />
        </>
      )}

      {type === 'select' && (
        <select {...props}>
          <option value="" disabled>
            {placeholder}
          </option>

          {options?.map((optionItem: string) => {
            return (
              <option key={optionItem} value={optionItem}>
                {optionItem}
              </option>
            )
          })}
        </select>
      )}

      {type !== 'select' && type !== 'password' && (
        <input {...props} type={type || 'text'} />
      )}

      {id && (
        <label htmlFor={id}>
          <>{label}</>

          {helpText && (
            <Styled.Help>
              <Styled.HelpIcon>
                <Question />
              </Styled.HelpIcon>

              <Styled.HelpText>{helpText}</Styled.HelpText>
            </Styled.Help>
          )}
        </label>
      )}
    </Styled.FieldWrapper>
  )
}
