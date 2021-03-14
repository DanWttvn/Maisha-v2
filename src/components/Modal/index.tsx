import React, { FC, useState } from 'react'
import { BaseProps } from '../../models'
import Styled, { Dialog, Cross } from './styles'

export interface Props extends BaseProps {
  onClose?: () => void
}

const Modal: FC<Props> = ({ children, styles, onClose, isHidden }) => {
  if (isHidden) return null

  return (
    <Styled>
      <Dialog styles={styles}>
        <Cross onClick={onClose}/>
        {children}
      </Dialog>
    </Styled>
  )
}

export default Modal
