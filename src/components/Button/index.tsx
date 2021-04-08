import React, { FC } from 'react'
import { BaseProps } from '../../models'
import { ButtonA, ButtonB, ButtonC } from './styles'

export interface Props extends BaseProps {
  onClick?: () => void
  theme?: 'A' | 'B' | 'C'
  isDisabled?: boolean
  isSelected?: boolean
  type?: 'submit' | 'button'
}

const Button: FC<Props>  = ({ children, onClick, theme = 'A', styles, isDisabled, isSelected, type = 'button' }) => {
  let Styled

  switch (theme) {
  case 'B':
    Styled = ButtonB
    break
  case 'C':
    Styled = ButtonC
    break
  default:
    Styled = ButtonA
  }

  return <Styled onClick={onClick} type={type} isDisabled={isDisabled} isSelected={isSelected} styles={styles}>{children}</Styled>
}

Button.displayName = 'Button'

export default Button
