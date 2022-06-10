import React, { FC, useState } from 'react'
import { Eye, EyeOff } from '@styled-icons/heroicons-solid'

import { InputProps } from './Input.props'

import { Button } from 'Components/Atoms/Button'

import * as Styled from './Input.style'

export const Input: FC<InputProps> = ({ ...props }) => {
  const { id, label, type, warning } = props

  const [displayPassword, setDisplayPassword] = useState(false)

  const toggleDisplayPassword = () => {
    setDisplayPassword(!displayPassword)
  }

  return (
    <Styled.InputWrapper>
      {warning && <Styled.Warning htmlFor={id}>{warning}</Styled.Warning>}

      {type === 'password' ? (
        <>
          <Button transparent onClick={toggleDisplayPassword}>
            {displayPassword ? <EyeOff /> : <Eye />}
          </Button>

          <input {...props} type={displayPassword ? 'text' : 'password'} />
        </>
      ) : (
        <input {...props} type={type || 'text'} />
      )}

      {id && <label htmlFor={id}>{label}</label>}
    </Styled.InputWrapper>
  )
}
