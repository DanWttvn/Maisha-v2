import React, { FC } from 'react'
import { BaseProps } from '../../models'
import Styled from './styles'

export interface Props extends BaseProps {
  onClick?: any
  isBlack?: boolean
  isSemibold?: boolean
  isHighlighted?: boolean
  href?: string
}
//! separar text de Link (new comp)
//! sizes
const Text: FC<Props> = ({ children, onClick, styles, isBlack, isSemibold, isHighlighted, href, isStreched }) => {
  if(href) console.log('hacer un ruting')
  
  return (
    <Styled styles={styles} isBlack={isBlack} isHighlighted={isHighlighted} isSemibold={isSemibold} onClick={onClick} isStreched={isStreched}>
      {children}
    </Styled>
  )
}

export default Text
