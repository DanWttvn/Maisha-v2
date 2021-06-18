import React, { FC, forwardRef } from 'react'
import { BaseProps } from '../../models'
import { ButtonA, ButtonB, ButtonC, ButtonD, ButtonE, ButtonF } from './styles'

export interface Props extends BaseProps {
  onClick?: () => void
  variant?: 'A' | 'B' | 'C' | 'D' | 'E' | 'F'
  isDisabled?: boolean
  isSelected?: boolean
  type?: 'submit' | 'button'
}

const Button: FC<Props> = forwardRef(({ children, onClick, variant = 'A', styles, isDisabled, isSelected, type = 'button', className, isHidden }, ref) => {
  if (isHidden) return null

  let Styled

  switch (variant) {
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

  return <Styled ref={ref} className={className} onClick={onClick} type={type} isDisabled={isDisabled} isSelected={isSelected} styles={styles}>{children}</Styled>
})

Button.displayName = 'Button'

export default Button
