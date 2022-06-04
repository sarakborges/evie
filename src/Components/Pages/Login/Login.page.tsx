import React, { FC } from 'react'
import Head from 'next/head'

import { ROUTES, SITE_NAME } from 'Utils/Constants'

import { LoginTemplate } from 'Components/Templates'

export const LoginPage: FC = () => {
  return (
    <>
      <Head>
        <title>{`${SITE_NAME.PAGE_TITLE}${ROUTES.LOGIN.TITLE}`}</title>
      </Head>

      <LoginTemplate />
    </>
  )
}
