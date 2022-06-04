import React, { FC } from 'react'
import Link from 'next/link'

import { HomeSidebarListProps } from './HomeSidebarList.props'

import { CONNECTIONS, GROUPS, ROUTES } from 'Utils/Constants'

import { Text, Picture } from 'Components/Atoms'

import * as Styled from './HomeSidebarList.style'

export const HomeSidebarList: FC<HomeSidebarListProps> = ({ list, type }) => {
  return (
    <Styled.SidebarList>
      <Styled.ListTitle>
        <div>
          <Text fw={700}>
            {(type === 'connections' ? CONNECTIONS : GROUPS).TITLE}
          </Text>

          <Text fs="12px">({list?.length || 0})</Text>
        </div>

        <Link
          href={(type === 'connections'
            ? ROUTES.CONNECTIONS
            : ROUTES.GROUPS
          ).PATH.replace('[url]', '')}
        >
          <a>{(type === 'connections' ? CONNECTIONS : GROUPS).SEE_ALL}</a>
        </Link>
      </Styled.ListTitle>

      {list?.length ? (
        <Styled.List>
          {list.slice(0, 6).map((listItem) => {
            return (
              <Styled.ListItem key={listItem.url}>
                <Link href={ROUTES.PROFILE.PATH.replace('[url]', listItem.url)}>
                  <a>
                    <Picture image={listItem.picture} alt={listItem.name} />

                    <Text fs="12px" lh={1.4}>
                      {listItem.name}
                    </Text>
                  </a>
                </Link>
              </Styled.ListItem>
            )
          })}
        </Styled.List>
      ) : (
        <Text lh={1.4} fs="12px">
          {(type === 'connections' ? CONNECTIONS : GROUPS).NONE}
        </Text>
      )}
    </Styled.SidebarList>
  )
}
