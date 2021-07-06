import React, { FC } from 'react'
import { TextProps } from '../../models'
import Styled from './styles'

const Paragraph: FC<TextProps> = ({ children, styles, weight = 'normal', size = 'm', color, isFullWidth, isHidden }) => {
  if (isHidden) return null
  return <Styled weight={weight} size={size} styles={styles} color={color} isFullWidth={isFullWidth}>{children}</Styled>
}

export default Paragraph
