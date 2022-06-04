import React, { FC } from 'react'

import { ButtonProps } from './Button.props'

import * as Styled from './Button.style'

export const Button: FC<ButtonProps> = ({ children, ...props }) => {
  const { type } = props

  return (
    <Styled.Button {...props} type={type || 'button'}>
      {children}
    </Styled.Button>
  )
}
