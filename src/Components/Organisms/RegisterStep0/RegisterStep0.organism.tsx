import React, { FC } from 'react'

import { REGISTER } from 'Utils/Constants'

import { Text } from 'Components/Atoms'

export const RegisterStep0: FC = () => {
  return (
    <>
      <Text fs="32px" fw={300} lh={1.4}>
        {REGISTER.WELCOME}
      </Text>

      <Text fs="24px" fw={300} lh={1.4}>
        {REGISTER.PROCEED}
      </Text>
    </>
  )
}
