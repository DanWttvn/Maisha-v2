import React, { FC } from 'react'
import { BaseProps } from '../../models'
import Styled from './styles'

export interface Props extends BaseProps {
  onClick?: any
  isBlack?: boolean
  isHighlighted?: boolean
  href?: string
}
//! separar text de Link (new comp)
const Text: FC<Props> = ({ children, onClick, styles, isBlack, isHighlighted, href }) => {
  if(href) console.log('hacer un ruting')
  
  return (
    <Styled styles={styles} isBlack={isBlack} isHighlighted={isHighlighted} onClick={onClick} >
      {children}
    </Styled>
  )
}

export default Text
