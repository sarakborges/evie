export interface ProfileProps {
  _id: string
  name: string
  url: string
  picture?: string
  cover?: string
  connections?: ProfileProps[]
  groups?: ProfileProps[]
}
