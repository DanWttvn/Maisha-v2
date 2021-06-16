import React, { FC } from 'react'
import { BaseProps, Theme } from '../../models'
import { H3, H4 } from './styles'

export interface Props extends BaseProps {
  color?: keyof Theme['colors']
  isSmall?: boolean
}

const Subtitle: FC<Props> = ({ children, styles, color, isSmall, isFullWidth }) => {
  return (
    <>
      {isSmall
        ? <H4 color={color} styles={styles} isFullWidth={isFullWidth}>{children}</H4>
        : <H3 color={color} styles={styles} isFullWidth={isFullWidth}>{children}</H3>
      }
    </>
  )
}

export default Subtitle
