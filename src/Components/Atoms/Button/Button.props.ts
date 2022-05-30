import { ComponentPropsWithoutRef } from 'react'

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  primary?: boolean
  dark?: boolean
  transparent?: boolean
  bordered?: boolean
  rounded?: boolean
}
