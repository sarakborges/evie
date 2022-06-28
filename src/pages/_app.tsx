import React from 'react'
import type { AppProps } from 'next/app'

import { UserProvider, AppProvider } from 'Contexts'

import { GlobalStyle } from 'Assets/Styles/Global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <UserProvider>
        <GlobalStyle />

        <Component {...pageProps} />
      </UserProvider>
    </AppProvider>
  )
}

export default MyApp
