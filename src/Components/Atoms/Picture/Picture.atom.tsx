import React, { FC, useState } from 'react'
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
  const [hasError, setHasError] = useState(false)
  const [hasLoaded, setHasLoaded] = useState(false)

  return (
    <Styled.Picture size={size} hasBorder={hasBorder} borderWidth={borderWidth}>
      {image && !hasError && (
        <img
          src={image}
          alt={alt}
          onError={() => {
            setHasError(true)
          }}
          onLoad={() => {
            setHasLoaded(true)
          }}
        />
      )}

      {(hasError || !hasLoaded) && <Question />}
    </Styled.Picture>
  )
}
