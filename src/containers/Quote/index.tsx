import React, { FC } from 'react'
import { TextProps, Theme } from '../../models'
import Styled from './styles'

export interface Props extends TextProps {
  quotesColor: keyof Theme['colors'] | 'inherit'
}

const Quote: FC<Props> = ({ children, quotesColor, isHidden, className, ...props }) => {
  if (isHidden) return null

  return (
    <Styled className={className} quotesColor={quotesColor} {...props}>
      {children}
    </Styled>
  )
}

export default Quote
