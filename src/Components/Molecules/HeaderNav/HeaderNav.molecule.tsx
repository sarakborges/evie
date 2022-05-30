import React, { FC } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { HEADER_NAV } from 'Utils/Constants'

import * as Styled from './HeaderNav.style'

export const HeaderNav: FC = () => {
  const { asPath } = useRouter()

  return (
    <Styled.Nav>
      {HEADER_NAV.map((navItem) => {
        return (
          <Styled.NavLink
            active={navItem.ACTIVE_AT.includes(asPath)}
            key={navItem.TEXT}
          >
            <Link href={navItem.LINK}>
              <a>{navItem.TEXT}</a>
            </Link>
          </Styled.NavLink>
        )
      })}
    </Styled.Nav>
  )
}
