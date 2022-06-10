import React, { Dispatch, createContext, useState, FC, ReactNode } from 'react'

import { RegisterProps } from 'Utils/Props'

const INITIAL_STATE = {
  step: 0,
  form: [],
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
