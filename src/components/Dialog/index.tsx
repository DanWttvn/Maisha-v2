import React, { FC } from 'react'
import { BaseProps } from '../../models'
import Styled, { Cross } from './styles'

export interface Props extends BaseProps {
  onClose?: () => void
}

const Dialog: FC<Props> = ({ children, styles, onClose, isHidden }) => {
  if (isHidden) return null

  return (
    <Styled styles={styles}>
      <Cross onClick={onClose}/>
      {children}
    </Styled>
  )
}

export default Dialog
