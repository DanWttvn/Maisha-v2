import React, { FC } from 'react'
import { BaseProps } from '../../models'
import Styled from './styles'

export interface Props extends BaseProps {
  href: string
  target?: string
  onClick?: () => void
  weight?: 'normal' | 'semibold' | 'bold' | 'black'
  size?: 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl'
}

const Link: FC<Props> = ({ children, href, target = '_blank', onClick, styles, size = 'm', isHidden, weight }) => {
  if (isHidden) return null

  return (
    <Styled href={href} target={target} rel="noreferrer" onClick={onClick} size={size} styles={styles} weight={weight}>
      {children}
    </Styled>
  )
}

export default Link
