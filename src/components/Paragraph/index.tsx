import React, { FC } from 'react'
import { Props as TextProps } from '../Text'
import Styled from './styles'

const Paragraph: FC<TextProps> = ({ children, styles, weight = 'normal', size = 'm', color, isHidden }) => {
  if (isHidden) return null
  return <Styled weight={weight} size={size} styles={styles} color={color}>{children}</Styled>
}

export default Paragraph
