import styled from 'styled-components'

export const HomeTemplate = styled.div`
  display: flex;
  flex: 1;

  padding: 0 320px;
`

export const ChatBar = styled.aside`
  position: fixed;
  right: 0;
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
