import React, { FC } from 'react'
import { BaseProps } from '../../models'
import { ButtonA, ButtonB, ButtonC, ButtonD, ButtonE, ButtonF } from './styles'

export interface Props extends BaseProps {
  onClick?: () => void
  theme?: 'A' | 'B' | 'C' | 'D' | 'E' | 'F'
  isDisabled?: boolean
  isSelected?: boolean
  type?: 'submit' | 'button'
}

const Button: FC<Props> = ({ children, onClick, theme = 'A', styles, isDisabled, isSelected, type = 'button', className, isHidden }) => {
  if (isHidden) return null

  let Styled

  switch (theme) {
  case 'B':
    Styled = ButtonB
    break
  case 'C':
    Styled = ButtonC
    break
  case 'D':
    Styled = ButtonD
    break
  case 'E':
    Styled = ButtonE
    break
  case 'F':
    Styled = ButtonF
    break
  default:
    Styled = ButtonA
  }

  return <Styled className={className} onClick={onClick} type={type} isDisabled={isDisabled} isSelected={isSelected} styles={styles}>{children}</Styled>
}

Button.displayName = 'Button'

export default Button
