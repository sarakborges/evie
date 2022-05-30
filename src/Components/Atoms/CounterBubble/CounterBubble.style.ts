import styled from 'styled-components'

export const CounterBubble = styled.p`
  position: absolute;
  right: 12px;
  top: 12px;
  z-index: 1;

  display: flex;
  place-content: center;
  place-items: center;

  width: 20px;
  aspect-ratio: 1;

  background-color: var(--purple);
  border-radius: 50%;

  color: var(--grayLight);
`
