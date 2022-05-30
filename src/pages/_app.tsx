import React from 'react'
import type { AppProps } from 'next/app'

import { UserProvider } from 'Contexts'

import { GlobalStyle } from 'Assets/Styles/Global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <GlobalStyle />

      <Component {...pageProps} />
    </UserProvider>
  )
}

export default MyApp
