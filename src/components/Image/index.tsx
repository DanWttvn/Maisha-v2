import React, { FC } from 'react'
import { BaseProps } from '../../models'
import Styled from './styles'

export interface Props extends BaseProps {
  src: string
  hasOverlay?: boolean
}

const Image: FC<Props> = ({ src, hasOverlay, styles, isFullWidth, className }) => {
  return <Styled src={src} styles={styles} loading="lazy" hasOverlay={hasOverlay} className={className} isFullWidth={isFullWidth}/>
}

export default Image
