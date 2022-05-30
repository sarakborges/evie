import { ProfileProps } from 'Utils/Props'

export interface HomeSidebarListProps {
  list: ProfileProps[] | undefined
  type: 'connections' | 'groups'
}
