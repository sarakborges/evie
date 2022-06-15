import React, { Dispatch, createContext, useState, FC, ReactNode } from 'react'

import { GenericFormProps } from 'Utils/Props'

const INITIAL_STATE = {
  step: 0,
  form: [],
}

export const LoginContext = createContext<{
  loginState: GenericFormProps
  setLoginState: Dispatch<any> | null
}>({
  loginState: { ...INITIAL_STATE },
  setLoginState: null,
})

export const LoginProvider: FC<{
  children: ReactNode
}> = ({ children }) => {
  const [loginState, setLoginState] = useState<GenericFormProps>({
    ...INITIAL_STATE,
  })

  return (
    <LoginContext.Provider value={{ loginState, setLoginState }}>
      <>{children}</>
    </LoginContext.Provider>
  )
}
