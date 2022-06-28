import React, {
  Dispatch,
  createContext,
  useState,
  FC,
  ReactNode,
  useEffect,
} from 'react'

import { AppProps } from 'Utils/Props'

const INITIAL_STATE = {
  accent: 255,
  brightness: 'dark',
}

export const AppContext = createContext<{
  appState: AppProps
  setAppState: Dispatch<any> | null
}>({
  appState: { ...INITIAL_STATE },
  setAppState: null,
})

export const AppProvider: FC<{
  children: ReactNode
}> = ({ children }) => {
  const [appState, setAppState] = useState<AppProps>({
    ...INITIAL_STATE,
  })

  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  const { accent, brightness } = appState

  useEffect(() => {
    if (!isLoaded) {
      return
    }

    const doc = document.querySelector(':root') as HTMLElement

    doc?.style.setProperty('--accent', `${accent}`)
    doc?.style.setProperty(
      '--brightness',
      `${brightness === 'dark' ? `0%` : `100%`}`
    )
    doc?.style.setProperty('--math', `${brightness === 'dark' ? `+` : `-`}`)

    localStorage.setItem('theme', JSON.stringify({ ...appState }))
  }, [accent, brightness])

  useEffect(() => {
    setIsLoaded(true)

    let localTheme = localStorage.getItem('theme')

    if (localTheme) {
      setAppState({ ...JSON.parse(localTheme) })
    }
  }, [])

  return (
    <AppContext.Provider value={{ appState, setAppState }}>
      <>{children}</>
    </AppContext.Provider>
  )
}
