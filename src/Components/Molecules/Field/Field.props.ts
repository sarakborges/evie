import { ComponentPropsWithoutRef } from 'react'

export type FieldProps = {
  helpText?: string
  label?: string
  warning?: string
  options?: string[]
} & ComponentPropsWithoutRef<'input'> &
  ComponentPropsWithoutRef<'select'>
