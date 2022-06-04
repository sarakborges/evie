import { ProfileProps } from 'Utils/Props'

export interface UserProps {
  _id: string
  name: string
  profiles: ProfileProps[]
  currentProfile: ProfileProps
}
