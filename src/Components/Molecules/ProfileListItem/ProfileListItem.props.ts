import { ProfileProps } from 'Utils/Props'

export interface ProfileListItemProps {
  profile: ProfileProps
  buttons: Array<'select' | 'edit' | 'delete'>
}
