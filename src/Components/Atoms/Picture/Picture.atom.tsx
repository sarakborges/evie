import React, { FC } from 'react'
import { Question } from '@styled-icons/bootstrap/Question'

import { PictureProps } from './Picture.props'

import * as Styled from './Picture.style'

export const Picture: FC<PictureProps> = ({
  image,
  alt,
  size,
  hasBorder,
  borderWidth,
}) => {
  return (
    <Styled.Picture size={size} hasBorder={hasBorder} borderWidth={borderWidth}>
      {image ? <img src={image} alt={alt} /> : <Question />}
    </Styled.Picture>
  )
}
