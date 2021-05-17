import React, { FC } from 'react'
import { BaseProps } from '../../models'
import Dialog from '../Dialog'
import Styled from './styles'

export interface Props extends BaseProps {
  onClose?: () => void
}

const Modal: FC<Props> = ({ children, styles, onClose, isHidden }) => {
  if (isHidden) return null

  return (
    <Styled>
      <Dialog styles={styles} onClose={onClose}>
        {children}
      </Dialog>
    </Styled>
  )
}

export default Modal
