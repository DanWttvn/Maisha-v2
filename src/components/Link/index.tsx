import React, { FC } from 'react'
import { TextProps } from '../../models'
import Styled from './styles'

export interface Props extends TextProps {
  href: string
  target?: string
  variant?: 'A' | 'B'
}

const Link: FC<Props> = ({ children, href, target = '_blank', weight = 'bold', variant = 'A', color, onClick, styles, size = 'inherit', isHidden }) => {
  if (isHidden) return null

  return (
    <Styled href={href} target={target} rel="noreferrer" onClick={onClick} variant={variant} color={color} size={size} styles={styles} weight={weight}>
      {children}
    </Styled>
  )
}

export default Link
