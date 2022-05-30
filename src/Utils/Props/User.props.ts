import { ProfileProps } from 'Utils/Props'

export interface UserProps {
  _id: string
  profiles: ProfileProps[]
  currentProfile: ProfileProps
}
