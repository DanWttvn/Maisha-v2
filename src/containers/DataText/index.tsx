import React, { FC } from 'react'
import { BaseProps } from '../../models'
import Styled from './styles'

export interface Props extends BaseProps {
  type?: 'text' | 'number'
}

const DataText: FC<Props> = ({ children, type = 'number', styles, isHidden }) => {
  if (isHidden) return null
  return <Styled type={type} styles={styles}>{children}</Styled>
}

export default DataText