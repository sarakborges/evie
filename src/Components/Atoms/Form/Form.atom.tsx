import React, { ComponentPropsWithoutRef, FC, FormEvent } from 'react'

export const Form: FC<ComponentPropsWithoutRef<'form'>> = ({
  children,
  ...props
}) => {
  const { onSubmit } = props

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    onSubmit?.(e)
  }

  return (
    <form {...props} onSubmit={handleSubmit}>
      {children}
    </form>
  )
}
