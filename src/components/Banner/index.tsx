import React, { FC } from 'react'
import { BaseProps } from '../../models'
import Styled from './styles'

export interface Props extends BaseProps {
  variant: 'A' | 'B'
}

const Banner: FC<Props> = ({ children, variant, styles, className, isHidden }) => {
  if (isHidden) return null
  return <Styled variant={variant} className={className} styles={styles}>{children}</Styled>
}

Banner.displayName = 'Banner'

export default Banner
