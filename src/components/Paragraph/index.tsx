import React, { FC } from 'react'
import { BaseProps } from '../../models'
import Styled from './styles'
// import theme from '../../themes'

export interface Props extends BaseProps {
  // color?: keyof theme.colors
  color?: string
}

const Paragraph: FC<Props> = ({ children, styles, color, isHidden }) => {
  if (isHidden) return null
  return <Styled styles={styles} color={color}>{children}</Styled>
}

export default Paragraph
