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

  position: relative;

  width: ${({ size }) => `${size || 40}px`};
  min-width: ${({ size }) => `${size || 40}px`};
  aspect-ratio: 1;

  > :is(img, svg) {
    display: flex;
    place-content: center;
    place-items: center;

    position: absolute;
    left: 0;
    top: 0;

    width: 100%;
    height: 100%;
    padding: ${({ hasBorder }) => (hasBorder ? '4px' : '0')};
    overflow: hidden;

    object-fit: cover;

    border: ${({ borderWidth }) => `${borderWidth || 1}px`} solid
      ${({ hasBorder }) => (hasBorder ? 'var(--main)' : 'transparent')};
    border-radius: 50%;

    color: var(--grayLight);
  }

  > img {
    z-index: 1;

    background-color: var(--mainDark2);
  }

  > svg {
    z-index: 2;

    background-color: var(--main);
  }
`
