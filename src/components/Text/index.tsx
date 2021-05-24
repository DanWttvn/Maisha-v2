import React, { FC } from 'react'
import { BaseProps } from '../../models'
import Styled from './styles'

export interface Props extends BaseProps {
  onClick?: (x?: any) => void
  isHighlighted?: boolean
  weight?: 'normal' | 'semibold' | 'bold' | 'black'
  size?: 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl'
  color?: string
}

const Text: FC<Props> = ({ children, onClick, styles, color, weight = 'normal', size = 'm', isHighlighted, className, isFullWidth }) => {
  
  const handleClick = (e: any) => {
    e.stopPropagation()
    if (onClick) onClick()
  }

  return (
    <Styled size={size} weight={weight} styles={styles} color={color} isHighlighted={isHighlighted} onClick={handleClick} className={className} isFullWidth={isFullWidth}>
      {children}
    </Styled>
  )
}

export default Text
