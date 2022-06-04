import { ComponentPropsWithoutRef } from 'react'

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  primary?: boolean
  secondary?: boolean
  dark?: boolean
  transparent?: boolean
  bordered?: boolean
  rounded?: boolean
}
