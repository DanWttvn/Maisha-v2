import React, { FC } from 'react'
import { BaseProps, SectionProps } from '../../models'
import Styled from './styles'

export type Props = SectionProps & BaseProps

const Section: FC<Props> = ({ children, isHidden, styles, isFullWidth, className }) => {
  if (isHidden) return null
  return <Styled styles={styles} className={className} isFullWidth={isFullWidth}>{children}</Styled>
}

export default Section
