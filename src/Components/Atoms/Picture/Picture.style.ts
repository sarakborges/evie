import styled from 'styled-components'

interface PictureDivProps {
  size?: number
  hasBorder?: boolean
  borderWidth?: number
}
export const Picture = styled.div<PictureDivProps>`
  display: flex;
  place-content: center;
  place-items: center;

  width: ${({ size }) => `${size || 40}px`};
  min-width: ${({ size }) => `${size || 40}px`};

  > :is(img, svg) {
    display: flex;
    place-content: center;
    place-items: center;

    max-width: 100%;
    aspect-ratio: 1;
    padding: ${({ hasBorder }) => (hasBorder ? '4px' : '0')};
    overflow: hidden;

    object-fit: cover;

    border: ${({ borderWidth }) => `${borderWidth || 1}px`} solid
      ${({ hasBorder }) => (hasBorder ? 'var(--main)' : 'transparent')};
    border-radius: 50%;

    color: var(--grayLight);
  }

  > img {
    background-color: var(--mainDark2);
  }

  > svg {
    background-color: var(--main);
  }
`
