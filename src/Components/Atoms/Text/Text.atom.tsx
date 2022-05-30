import React, { FC } from 'react'

import { TextProps } from './Text.props'

import * as Styled from './Text.style'

export const Text: FC<TextProps> = ({ children, fs, fc, fw, lh }) => {
  return (
    <Styled.Text fs={fs} fc={fc} fw={fw} lh={lh}>
      {children}
    </Styled.Text>
  )
}
