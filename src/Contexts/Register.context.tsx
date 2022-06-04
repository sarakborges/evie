import React, { Dispatch, createContext, useState, FC, ReactNode } from 'react'

import { RegisterProps } from 'Utils/Props'

const INITIAL_STATE = {
  step: 0,
  hasError: false,

  form: {
    register_name: {
      value: '',
      error: '',
    },

    register_email: {
      value: '',
      error: '',
    },

    register_password: {
      value: '',
      error: '',
    },

    register_confirm_password: {
      value: '',
      error: '',
    },
  },
}

export const RegisterContext = createContext<{
  registerState: RegisterProps
  setRegisterState: Dispatch<any> | null
}>({
  registerState: { ...INITIAL_STATE },
  setRegisterState: null,
})

export const RegisterProvider: FC<{
  children: ReactNode
}> = ({ children }) => {
  const [registerState, setRegisterState] = useState<RegisterProps>({
    ...INITIAL_STATE,
  })

  return (
    <RegisterContext.Provider value={{ registerState, setRegisterState }}>
      <>{children}</>
    </RegisterContext.Provider>
  )
}
