import React, { Dispatch, createContext, useState, FC, ReactNode } from 'react'

import { UserProps } from 'Utils/Props'

const INITIAL_STATE = {
  _id: '',

  profiles: [
    {
      _id: '',
      name: '',
      url: '',
      picture: '',
      cover: '',

      connections: [],
      groups: [],
    },
  ],

  currentProfile: {
    _id: '',
    name: '',
    url: '',
    picture: '',
    cover: '',

    connections: [],
    groups: [],
  },
}

export const UserContext = createContext<{
  userState: UserProps
  setUserState: Dispatch<any> | null
}>({
  userState: { ...INITIAL_STATE },
  setUserState: null,
})

export const UserProvider: FC<{
  children: ReactNode
}> = ({ children }) => {
  const [userState, setUserState] = useState<UserProps>({ ...INITIAL_STATE })

  return (
    <UserContext.Provider value={{ userState, setUserState }}>
      <>{children}</>
    </UserContext.Provider>
  )
}
