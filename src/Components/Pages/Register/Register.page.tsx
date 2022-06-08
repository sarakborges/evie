import React, { FC } from 'react'
import Head from 'next/head'

import { ROUTES, SITE_NAME_TEXTS } from 'Utils/Constants'

import { RegisterProvider } from 'Contexts'

import { RegisterTemplate } from 'Components/Templates'

export const RegisterPage: FC = () => {
  return (
    <RegisterProvider>
      <Head>
        <title>{`${SITE_NAME_TEXTS.PAGE_TITLE}${ROUTES.REGISTER.TITLE}`}</title>
      </Head>

      <RegisterTemplate />
    </RegisterProvider>
  )
}
