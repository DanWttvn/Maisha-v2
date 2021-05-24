import React, { FC } from 'react'
import { BaseProps } from '../../models'
import Styled from './styles'

export interface Props extends BaseProps {
  src: string
  hasOverlay?: boolean
}

const Image: FC<Props> = ({ src, hasOverlay, styles, isFullWidth }) => {
  return <Styled src={src} styles={styles} loading="lazy" hasOverlay={hasOverlay} isFullWidth={isFullWidth}/>
}

export default Image
