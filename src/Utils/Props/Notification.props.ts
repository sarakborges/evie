import { ProfileProps } from './Profile.props'

export interface NotificationProps {
  _id: string
  type: 'newConnection'
  time: Date

  profile: ProfileProps
}
