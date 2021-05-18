import React, { FC, useState } from 'react'
import { BaseProps } from '../../models'
// import Styled, { Modal, Cross } from './styles'

export interface Props extends BaseProps {

}

const Popup: FC<Props> = ({ children, styles }) => {
  const [ isOpen, setIsOpen ] = useState(open || true)

  return (
    <div>Falta</div>
  )
}

export default Popup
