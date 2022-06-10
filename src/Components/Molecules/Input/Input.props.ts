import { ComponentPropsWithoutRef } from 'react'

export interface InputProps extends ComponentPropsWithoutRef<'input'> {
  label?: string
  warning?: string
}
