import { ReactNode, RefObject } from 'react'

export interface DropdownProps {
  title?: string
  children: ReactNode
  wrapperRef: RefObject<HTMLDivElement>
  hasCloseButton?: boolean
}
