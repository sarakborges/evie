import styled from 'styled-components'

export const Sidebar = styled.aside`
  position: fixed;
  left: 0;
  top: 64px;
  z-index: 2;

  display: flex;
  flex-flow: column;
  place-items: center;
  gap: 16px;

  width: 320px;
  min-height: 100%;
  max-height: calc(100vh - 64px);
  overflow: hidden;
  overflow-y: auto;

  background-color: var(--mainDark2);
`

export const Lists = styled.aside`
  display: flex;
  flex-flow: column;
  place-items: center;
  gap: 32px;

  padding-bottom: 16px;
`
