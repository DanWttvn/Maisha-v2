import React, { FC } from 'react'
import { BaseProps } from '../../models'
import Styled from './styles'

export interface Props extends BaseProps {
  onClick?: (x?: any) => void
  isBlack?: boolean
  isSemibold?: boolean
  isHighlighted?: boolean
  href?: string
  weight?: 'normal' | 'semibold' | 'bold'
  size?: 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl'
}
//? separar text de Link (new comp)
const Text: FC<Props> = ({ children, onClick, styles, weight = 'normal', size = 'm', isBlack, isSemibold, isHighlighted, href, isStreched }) => {
  if(href) console.log('hacer un ruting')
  
  return (
    <Styled size={size} weight={weight} styles={styles} isBlack={isBlack} isHighlighted={isHighlighted} isSemibold={isSemibold} onClick={onClick} isStreched={isStreched}>
      {children}
    </Styled>
  )
}

export default Text
