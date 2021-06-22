import React, { FC } from 'react'
import { BaseProps, Theme } from '../../models'
import Styled from './styles'

export interface Props extends BaseProps {
  onClick?: (x?: any) => void
  isHighlighted?: boolean
  isCentered?: boolean
  weight?: 'normal' | 'semibold' | 'bold' | 'black'
  size?: 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl'
  color?: keyof Theme['colors'] | 'inherit'
}

const Text: FC<Props> = ({ children, onClick, styles, color, weight = 'normal', size = 'm', isHidden, isHighlighted, isCentered, className, isFullWidth }) => {
  
  if (isHidden) return null

  return (
    <Styled size={size} weight={weight} styles={styles} color={color} isHighlighted={isHighlighted} onClick={onClick} className={className} isFullWidth={isFullWidth} isCentered={isCentered}>
      {children}
    </Styled>
  )
}

export default Text
