import React, { FC } from 'react'
import Head from 'next/head'

import { ROUTES, SITE_NAME_TEXTS } from 'Utils/Constants'

import { HomeTemplate } from 'Components/Templates'
import { Authed } from 'Components/Layouts'

export const HomePage: FC = () => {
  return (
    <Authed>
      <Head>
        <title>{`${SITE_NAME_TEXTS.PAGE_TITLE}${ROUTES.HOME.TITLE}`}</title>
      </Head>

      <HomeTemplate />
    </Authed>
  )
}
