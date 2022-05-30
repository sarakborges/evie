import React, { FC, ReactNode } from 'react'

import * as Styled from './CounterBubble.style'

export const CounterBubble: FC<{ children: ReactNode }> = ({ children }) => {
  return <Styled.CounterBubble>{children}</Styled.CounterBubble>
}
