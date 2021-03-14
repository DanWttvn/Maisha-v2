import { FC, useState } from 'react'
import { BaseProps } from '../../models'
// import Styled, { Dialog, Cross } from './styles'

export interface Props extends BaseProps {

}

const Modal: FC<Props> = ({ children, styles }) => {
  const [isOpen, setIsOpen] = useState(open || true)

  return (
    <div>alsjd</div>
  )
}

export default Modal
