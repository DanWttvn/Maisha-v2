import React, { FC } from 'react'
import Styled from './styles'
import { BaseProps } from '../../models'

const SkipWrap: FC<BaseProps> = ({ isHidden }) => {
  if (isHidden) return null
  return <Styled />
}

export default SkipWrap
