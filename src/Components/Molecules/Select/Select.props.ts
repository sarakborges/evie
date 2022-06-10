import { ComponentPropsWithoutRef } from 'react'

export interface SelectProps extends ComponentPropsWithoutRef<'select'> {
  label?: string
  warning?: string
  options: string[]
}
