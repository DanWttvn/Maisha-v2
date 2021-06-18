import React, { FC } from 'react'
import { BaseProps, Theme } from '../../models'
import Styled from './styles'

export interface Props extends BaseProps {
  color?: keyof Theme['colors'] | 'inherit'
  weight?: 'normal' | 'semibold' | 'bold' | 'black'
  size?: 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl'
}

const Paragraph: FC<Props> = ({ children, styles, weight = 'normal', size = 'm', color, isHidden }) => {
  if (isHidden) return null
  return <Styled weight={weight} size={size} styles={styles} color={color}>{children}</Styled>
}

export default Paragraph
