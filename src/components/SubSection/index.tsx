import React, { FC } from 'react'
import { BaseProps, SubSectionProps } from '../../models'
import Styled from './styles'

export type Props = SubSectionProps & BaseProps

const SubSection: FC<Props> = ({ children, isHidden, styles, isFullWidth, className }) => {
  if (isHidden) return null
  return <Styled styles={styles} className={className} isFullWidth={isFullWidth}>{children}</Styled>
}

export default SubSection
