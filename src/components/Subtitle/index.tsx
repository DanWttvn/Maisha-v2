import React, { FC } from 'react'
import { BaseProps } from '../../models'
import { H3, H4 } from './styles'

export interface Props extends BaseProps {
  color?: string
  isSmall?: boolean
}

const Subtitle: FC<Props> = ({ children, styles, color, isSmall, isStreched }) => {
  return (
    <>
      {isSmall
        ? <H4 color={color} styles={styles} isStreched={isStreched}>{children}</H4>
        : <H3 color={color} styles={styles} isStreched={isStreched}>{children}</H3>
      }
    </>
  )
}

export default Subtitle
