import React, { FC } from 'react'
import { TextProps } from '../../models'
import Styled from './styles'

export interface Props extends TextProps {
  to: string
}

const RouteLink: FC<Props> = ({ children, to, weight = 'bold', color, styles, size = 'm', isHidden }) => {
  if (isHidden) return null

  return <Styled to={to} color={color} size={size} styles={styles} weight={weight}>{children}</Styled>
}

export default RouteLink