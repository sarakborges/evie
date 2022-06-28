import { ProfileProps, MessageProps } from 'Utils/Props'

export interface ChatProps {
  users: ProfileProps[]
  messages: MessageProps[]
}
