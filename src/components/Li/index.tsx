import React, { FC } from 'react'
import Text, { Props as TextProps } from '../Text'

const Li: FC<TextProps> = ({ children, isHidden, ...props }) => {
  if (isHidden) return null

  return (
    <li>
      <Text {...props}>{children}</Text>
    </li>
  )
}

export default Li
