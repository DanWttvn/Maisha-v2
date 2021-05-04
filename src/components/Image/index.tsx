import React, { FC } from 'react'
import { BaseProps } from '../../models'
import Styled from './styles'

export interface Props extends BaseProps {
  src: string
  hasOverlay?: boolean
}

const Image: FC<Props> = ({ src, hasOverlay, styles, isStreched }) => {
  return <Styled src={src} styles={styles} hasOverlay={hasOverlay} isStreched={isStreched}/>
}

export default Image
