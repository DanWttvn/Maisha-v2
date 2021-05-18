import React, { FC } from 'react'
import { BaseProps } from '../../models'
import Styled from './styles'

export interface Props extends BaseProps {
  onClick?: (x?: any) => void
  isHighlighted?: boolean
  weight?: 'normal' | 'semibold' | 'bold' | 'black'
  size?: 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl'
}

const Text: FC<Props> = ({ children, onClick, styles, weight = 'normal', size = 'm', isHighlighted, className, isStreched }) => {
  
  const handleClick = (e: any) => {
    e.stopPropagation()
    if (onClick) onClick()
  }

  return (
    <Styled size={size} weight={weight} styles={styles} isHighlighted={isHighlighted} onClick={handleClick} className={className} isStreched={isStreched}>
      {children}
    </Styled>
  )
}

export default Text
