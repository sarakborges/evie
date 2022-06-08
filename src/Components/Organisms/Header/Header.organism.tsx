import React, { FC, Fragment } from 'react'
import Link from 'next/link'

import { HEADER_NAV_COMPONENTS, ROUTES, SITE_NAME_TEXTS } from 'Utils/Constants'

import { HeaderNav } from 'Components/Molecules'

import * as Styled from './Header.style'

export const Header: FC = () => {
  return (
    <Styled.Header>
      <Styled.HeaderCorner>
        <Styled.Logo>
          <Link href={ROUTES.HOME.PATH}>
            <a>{SITE_NAME_TEXTS.PLAIN}</a>
          </Link>
        </Styled.Logo>

        <HeaderNav />
      </Styled.HeaderCorner>

      <Styled.UserArea>
        {HEADER_NAV_COMPONENTS.map((navItem) => {
          return <Fragment key={navItem.ID}>{navItem.COMPONENT}</Fragment>
        })}
      </Styled.UserArea>
    </Styled.Header>
  )
}
