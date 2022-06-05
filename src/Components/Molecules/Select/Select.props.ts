import { ComponentPropsWithoutRef } from 'react'

export interface SelectProps extends ComponentPropsWithoutRef<'select'> {
  label?: string
  options: string[]
}
