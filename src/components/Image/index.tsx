import React, { FC } from 'react'
import { BaseProps } from '../../models'
import Styled from './styles'

export interface Props extends BaseProps {
  src: string
}

// background: 'linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)))'
//forma de poner overlay
const Image: FC<Props> = ({ src, styles, isStreched }) => {
  return <Styled src={src} styles={styles} isStreched={isStreched}/>
}

export default Image
