import React, { FC } from 'react'
import { TextProps } from '../../models'
import Text from '../Text'

const Li: FC<TextProps> = ({ children, isHidden, ...props }) => {
  if (isHidden) return null

  return (
    <li>
      <Text {...props}>{children}</Text>
    </li>
  )
}

export default Li
