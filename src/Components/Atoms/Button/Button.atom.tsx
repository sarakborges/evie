import React, { FC } from 'react'

import { ButtonProps } from './Button.props'

import * as Styled from './Button.style'

export const Button: FC<ButtonProps> = ({ type, children, ...props }) => {
  return (
    <Styled.Button type={type || 'button'} {...props}>
      {children}
    </Styled.Button>
  )
}
