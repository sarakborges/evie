import styled from 'styled-components'

import { TextProps } from './Text.props'

export const Text = styled.p<TextProps>`
  font-size: ${({ fs }) => fs || '16px'};
  font-weight: ${({ fw }) => fw || 400};
  line-height: ${({ lh }) => lh || 1};
  color: ${({ fc }) => `var(--${fc || 'grayLight'})`};

  white-space: pre-line;
`
