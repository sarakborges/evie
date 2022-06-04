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
    max-width: 100%;
    aspect-ratio: 1;
    padding: ${({ hasBorder }) => (hasBorder ? '4px' : '0')};

    object-fit: cover;

    border: ${({ borderWidth }) => `${borderWidth || 1}px`} solid
      ${({ hasBorder }) => (hasBorder ? 'var(--purple)' : 'transparent')};
    border-radius: 50%;
    background-color: var(--purpleDark2);

    color: var(--grayLight);
  }
`
